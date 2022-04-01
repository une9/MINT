import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MyPage.module.scss";

const MyPage= ( ) => {
    const [dibbedLands, setDibbedLands] = useState([]);
    const [boughtPlanets, SetBoughtPlanets] = useState([]);
    const username = "username";

    useEffect(() => {
        const boughtPlanetsRes = [
            {
                planetId: 1,
                planetName: "Teegarden_b",
                imgSrc: "../../planet_ex.png"
            },
            {
                planetId: 2,
                planetName: "Ross_128b",
                imgSrc: "../../planet_ex.png"
            },
            {
                planetId: 3,
                planetName: "Kepler_1649c",
                imgSrc: "../../planet_ex.png"
            },
        ]
        SetBoughtPlanets(boughtPlanetsRes);

        const dibbedLandsRes = [
            {
                planetId: 1,
                planetName: "Teegarden_b",
                imgSrc: "../../planet_ex.png",
                landId: "A-001",
            },
            {
                planetId: 1,
                planetName: "Teegarden_b",
                imgSrc: "../../planet_ex.png",
                landId: "A-002",
            },
            {
                planetId: 1,
                planetName: "Teegarden_b",
                imgSrc: "../../planet_ex.png",
                landId: "A-003",
            },
            {
                planetId: 1,
                planetName: "Teegarden_b",
                imgSrc: "../../planet_ex.png",
                landId: "A-004",
            },
            {
                planetId: 1,
                planetName: "Teegarden_b",
                imgSrc: "../../planet_ex.png",
                landId: "A-005",
            },
        ]
        setDibbedLands(dibbedLandsRes);

    }, []);

    const navigate = useNavigate();

    return (
       <main className={styles.MyPage}>
           <header>
                <h1>{username}</h1>
                <button className={styles.ProfileEditBtn}>회원정보수정</button>
           </header>
           <div className={styles.MyPageInfo}>
                <section className={styles.MyReceipts}>
                    <h2>구매 내역</h2>
                    <div className={`${styles.ProfileBox} Box`}>
                            <ul className={styles.ProfileBox__inner}>
                                {
                                    boughtPlanets.map((item, idx) => (
                                        <li className={styles.ProfileBox__item} onClick={() => navigate(`/mypage/${item.planetId}`)} key={idx}>
                                            <img src={item.imgSrc} alt={`bought-planet-${idx}`} className={styles.planetImg} />
                                            <p className={styles.planetName}>{item.planetName}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                    </div>
                </section>

                <section className={styles.MyDibbedLands}>
                    <h2>내가 찜한 땅</h2>
                    <div className={`${styles.ProfileBox} Box`}>
                            <ul className={styles.ProfileBox__inner}>
                                {
                                    dibbedLands.map((item, idx) => (
                                        <li className={styles.ProfileBox__item} key={idx}>
                                            <img src={item.imgSrc} alt="planet" className={styles.planetImg} />
                                            <p className={styles.planetName}>{item.planetName}</p>
                                            <p className={styles.landName}>{item.landId}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                    </div>
                </section>
           </div>

        </main>
    );
}
export default MyPage;