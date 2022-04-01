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

    const BASE_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
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
                // const tileData = tileRes.data.tiles;
                // setTiles(tileData);
              })
          )
          .catch((err) => {
            console.log(err);
          });

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