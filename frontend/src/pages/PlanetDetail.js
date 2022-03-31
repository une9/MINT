import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/PlanetDetail.module.scss";
import { BsCart3 } from "react-icons/bs";

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
    const [cartItems, setCartItems] = useState([]);

    const [modalShow, setModalShow] = useState(false);
    const onModalHide = () => setModalShow(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/planet/${planetId}`)
          .then((res) => {
            console.log(res.data);
            const planetData = res.data;
            planetData.version = "description";
            setPlanetInfo(planetData);
          })
          .catch((err) => {
            console.log(err);
          });

        // const planetRes = {
        //     name: "kepler-1649c",
        //     // name: "teegarden",
        //     imgSrc: "../../planet_ex.png",
        //     diameter: "지구의 약 1.06배",
        //     mass: "지구의 약 4배",
        //     belongsTo: "?" ,
        //     distance: "지구로부터 약 300광년",
        //     description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
        // }
        // planetRes.version = "description"
        // setPlanetInfo(planetRes);

        const tileRes = [
            {
                id: "KepC-A-001",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "KepC-A-002",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "KepC-A-003",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "KepC-A-004",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "KepC-B-001",
                area: 2,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.04,
                token: null,
            },
        ]
        setTiles(tileRes);
    }, []);
    // console.log(planetInfo)

    useEffect(() => {
        if (tiles.length > 0) {
            setSelectedTileId(tiles[0].id);
        }
    }, [tiles]);

    useEffect(() => {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].id === selectedTileId) {
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
                <button className={styles.cartButton} 
                    onClick={() => { navigate("/planet/purchase"); }}>
                    <BsCart3 />
                    <div className={styles.cartBadge}>{cartItems.length}</div>
                </button>
            </main>
            {
                tiles.length > 0
                &&
                <PurchaseModal
                    show={modalShow}
                    onHide={onModalHide} 
                    itemsToBuy={[{
                        planet: {
                            id: planetId,
                            data: planetInfo
                        },
                        ...tiles[selectedTileId]
                    }]}
                />
            }
            <SideBarInfo 
            {...tiles[selectedTileIdx]}
            onModalShow={()=> setModalShow(true)} />
        </div>
    );
}
export default PlanetDetail;