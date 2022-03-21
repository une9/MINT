import styles from "../styles/Planet.module.scss";

const Planet = ({ version, name, imgSrc, diameter, mass, belongsTo, distance, description }) => {
    console.log(version)
    let slogan, detail;
    if (description) {
        [slogan, detail] = description.split("\n");
    } 
    return(
        <article className={`${styles.Planet} ${styles[version]} ${version === "card" ? "Box" : ""}`}>
            <div className={styles.Planet__metadata}>
                <img src={imgSrc} alt="planet" />
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
                        <dt>소속</dt> <dd>{belongsTo}</dd>
                    </div>
                    <div className="metadata__data">
                        <dt>거리</dt> <dd>{distance}</dd>
                    </div>
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