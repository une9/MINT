import styles from "../styles/Planet.module.scss";

import { useState } from "react";
// import Lottie from 'react-lottie';

// import Kepler_1649c from '../lottie/Planet_Kepler_1649C.json';
// import Kepler_22b from '../lottie/Planet_Kepler_22B.json';
// import Proxima_B from '../lottie/Planet_Proxima-b.json';
// import Ross_128b from '../lottie/Planet_Ross_128B.json';
// import Teegarden_b from '../lottie/Planet_Teegarden_B.json';

import PlanetLottie from "./PlanetLottie";


// version
// 1. description: 행성 설명 포함된 버전
// 2. card: 행성 설명x 간단하게 카드형식으로 표현되는 버전
// 3. (default) 기본

const Planet = ({ version, name, imgSrc, diameter, mass, galaxy, distance, content }) => {
    // console.log(version)
    let slogan, detail;
    if (content) {
        [slogan, detail] = content.split("\n");
    } 
    return(
        <article className={`${styles.Planet} ${styles[version]} ${version === "card" ? "Box" : ""}`}>
            <div className={styles.Planet__metadata}>
                <PlanetLottie 
                    planetName={name}
                />
                <dl className="metadata">
                    {
                        version === "description"
                        ? <h1>{name}</h1>
                        : 
                        <div className="metadata__data">
                            <dt>이름</dt> <dd>{name}</dd>
                        </div>
                    }
                    
                    <div className="metadata__data">
                        <dt>지름</dt> <dd>{diameter}</dd>
                    </div>
                    <div className="metadata__data">
                        <dt>질량</dt> <dd>{mass}</dd>
                    </div>
                    <div className="metadata__data">
                        <dt>소속</dt> <dd>{galaxy}</dd>
                    </div>
                    {/* <div className="metadata__data">
                        <dt>거리</dt> <dd>{distance}</dd>
                    </div> */}
                </dl>
            </div>
            {
                version === "description" && 
                <dl className={styles.Planet__description}>
                    <p className={styles.slogan}>{slogan}</p>
                    <figcaption>{detail}</figcaption>
                </dl>
            }
        </article>
    );
}
export default Planet;