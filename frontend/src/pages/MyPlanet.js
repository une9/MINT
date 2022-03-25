import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/MyPlanet.module.scss";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";

import Planet from "../components/Planet";
import Land from "../components/Land";

const MyPlanet = () => {
    const { planetId } = useParams();
    console.log(planetId)
    const [myPlanet, setMyPlanet] = useState({});
    const [myLands, setMyLands] = useState([]);


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
        // planetRes.version = "card"
        setMyPlanet(planetRes);

        const myLandsRes = [
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
        ]
        setMyLands(myLandsRes);

    }, []);


    return(
        <main className={`${styles.MyPlanet}`}>
           <h1>{myPlanet.name} 구매 정보</h1>
           <div className={styles.myPlanetInfoWrapper}>
               <div className={styles.myPlanetWrapper}>
                    <Planet {...myPlanet} />    
               </div>
                <div className={`Box ${styles.myLandsWrapper}`}>
                    <ul className={styles.myLands__inner}>
                        {
                            myLands.map((item, idx) => (
                                <li key={`myLand-item-${idx}`} className={styles.myLandItem}>
                                    <details>
                                        <summary className={styles.landItemSummary}>
                                            {
                                                item.image
                                                ? <img className={styles.landImg} src={item.image} alt="landImg" />
                                                : <div className={styles.landImg} />
                                            }
                                            {item.id}
                                            <VscChevronDown className={styles.arrowDown} />
                                        </summary>
                                        <Land {...{...item, ...{version: "card-mypage"}}} />
                                    </details>
                                </li>
                            ))
                        }
                    </ul>
                </div>
           </div>

        </main>
    );
}
export default MyPlanet;