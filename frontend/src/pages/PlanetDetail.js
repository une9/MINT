import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/PlanetDetail.module.scss";
import { BsCart3 } from "react-icons/bs";

// outlet context
import { useOutletContext } from "react-router-dom";

import Planet from "../components/Planet";
import PlanetMap from "../components/PlanetMap";
import SideBarInfo from "../components/SideBarInfo";
import PurchaseModal from "../components/PurchaseModal";

import axios from 'axios';

const PlanetDetail= ( ) => {
    const { planetId } = useParams();
    // console.log(planetId)
    const [planetInfo, setPlanetInfo] = useState({});
    const [tiles, setTiles] = useState([]);
    // const [selectedTile, setSelectedTile] = useState({});
    const [selectedTileIdx, setSelectedTileIdx] = useState(0);
    const [selectedTileId, setSelectedTileId] = useState("");
    const [cartItemNum, setCartItemNum] = useState(0);

    const [modalShow, setModalShow] = useState(false);
    const onModalHide = () => setModalShow(false);

    const navigate = useNavigate();

    // web3 관련 객체 가져오기
    const myWeb3 = useOutletContext();

    const BASE_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const prevCart = localStorage.getItem("mintCart");
        if (prevCart) {
            const cartLen = JSON.parse(prevCart).length;
            setCartItemNum(cartLen);
        }

        // axios 백엔드에서 정보 가져오기
        axios.all([
            axios.get(`${BASE_URL}/api/planet/${planetId}`),
            axios.get(`${BASE_URL}/api/all/${planetId}`),
        ])
          .then(
              axios.spread((planetRes, tileRes) => {
                console.log(planetRes.data);
                const planetData = planetRes.data;
                planetData.version = "description";
                setPlanetInfo(planetData);

                console.log("tiles:", tileRes.data.tiles)
                const tileData = tileRes.data.tiles;
                setTiles(tileData);
              })
          )
          .catch((err) => {
            console.log(err);
          });
    }, []);

    useEffect(() => {
        if (tiles.length > 0) {
            setSelectedTileId(tiles[0].tid);
        }
    }, [tiles]);

    useEffect(() => {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].tid === selectedTileId) {
                setSelectedTileIdx(i);
                break
            }
        }
    }, [selectedTileId]);

    return(
        <div className={`${styles.PlanetDetail} PlanetPage`}>
            <main>
                {
                    planetInfo.name && <Planet {...planetInfo} />
                }

                <div className={styles.planetInfoWrapper}>
                    {
                        planetInfo.name 
                        && 
                        <PlanetMap 
                            version={"detail"}
                            planetName={planetInfo.name}
                            tiles={tiles}
                            selectedTileId={selectedTileId}
                            setSelectedTileId={setSelectedTileId} />
                    }
                </div>

                {/* 장바구니 버튼 */}
                <button className={styles.cartButton} 
                    onClick={() => { navigate("/planet/purchase"); }}>
                    <BsCart3 />
                    <div className={styles.cartBadge}>{cartItemNum}</div>
                </button>
            </main>
            {
                tiles.length > 0
                &&
                <PurchaseModal
                    show={modalShow}
                    onHide={onModalHide} 
                    itemsToBuy={[{
                        ...tiles[selectedTileIdx],
                        planet: {
                            id: planetId,
                            data: planetInfo
                        },
                    }]}
                    myWeb3={myWeb3}
                    isBuyDirect={true}
                />
            }
            <SideBarInfo 
                {...tiles[selectedTileIdx]}
                onAddCart={() => {
                    let cart = JSON.parse(localStorage.getItem("mintCart"));
                    if (!cart) {
                        cart = []
                    }
                    cart.push(
                        {
                            ...tiles[selectedTileIdx],
                            planet: {
                                id: planetId,
                                data: planetInfo
                            },
                        }
                    )
                    localStorage.setItem("mintCart", JSON.stringify(cart));
                    console.log(cart);
                    setCartItemNum(prev => prev + 1);
                }}
                onModalShow={()=> setModalShow(true)}
            />
            
        </div>
    );
}
export default PlanetDetail;