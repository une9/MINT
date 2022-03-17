import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/PlanetDetail.module.scss";

import Planet from "../components/Planet";
import PlanetMap from "../components/PlanetMap";
import SideBarInfo from "../components/SideBarInfo";

const PlanetDetail= ( ) => {
    const { planetId } = useParams();
    console.log(planetId)
    const [planetInfo, setPlanetInfo] = useState({});
    const [tiles, setTiles] = useState([]);
    const [selectedTile, setSelectedTile] = useState({});
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const planetRes = {
            name: "kepler-1649c",
            imgSrc: "../../planet_ex.png",
            diameter: "지구의 약 1.06배",
            mass: "지구의 약 4배",
            belongsTo: "?" ,
            distance: "지구로부터 약 300광년",
            description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
        }
        planetRes.version = "description"
        setPlanetInfo(planetRes);

        const tileRes = [
            {
                id: "A-001",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "A-002",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "A-003",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                id: "A-004",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
        ]
        setTiles(tileRes);
    }, []);
    console.log(planetInfo)

    useEffect(() => {
        if (tiles.length > 0) {
            setSelectedTile(tiles[0]);
        }
    }, [tiles]);

    return(
        <div className={`${styles.PlanetDetail} PlanetPage`}>
            <main>
                {
                    planetInfo.name && <Planet {...planetInfo} />
                }

                {
                    planetInfo.name && <PlanetMap tiles={tiles} />
                }
                <button className={styles.cartButton}>
                    카트
                    <div className={styles.cartBadge}>{cartItems.length}</div>
                </button>
            </main>
            {
                <SideBarInfo {...selectedTile} />
            }

            
        </div>
    );
}
export default PlanetDetail;