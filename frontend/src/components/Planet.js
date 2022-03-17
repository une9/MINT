import styles from "../styles/Planet.module.scss";

const Planet= ({ name, imgSrc, diameter, mass, belongsTo, distance, description }) => {
    const version = description ? "description" : "";
    let slogan, detail;
    if (description) {
        [slogan, detail] = description.split("\n");
    } 
    return(
        <article className={`${styles.Planet} ${styles[version]}`}>
            <div className={styles.Planet__metadata}>
                <img src={imgSrc} alt="planet" />
                <dl className="metadata">
                    <h1>{name}</h1>
                    <div>
                        <dt>지름</dt> <dd>{diameter}</dd>
                    </div>
                    <div>
                        <dt>질량</dt> <dd>{mass}</dd>
                    </div>
                    <div>
                        <dt>소속</dt> <dd>{belongsTo}</dd>
                    </div>
                    <div>
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