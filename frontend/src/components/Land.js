import styles from "../styles/Land.module.scss";
import PurchaseHistoryItem from "./PurchaseHistoryItem";

// version
// card-open: 행성 구매페이지 (history: open)
// card-close: 마이페이지 - 내가 구매한 토지 정보 (history default: close)

const Land = ({ version, id, area, image, buyer, trade_date, price, token }) => {
    console.log(version)

    return(
        <article className={`${styles.Land} ${styles[version]} ${version === "card-open" ? "Box" : ""}`}>
            <header>
                {
                    image
                    ? <img className={styles.landImg} src={image} alt="landImg" />
                    : <div className={styles.landImg} />
                }
                <h2>{id}</h2>
            </header>
            <dl className={`metadata ${styles.metadata}`}>
                <div>
                    <dt>크기</dt> <dd>{area}km<sup>2</sup></dd>
                </div>
                <div className="price">
                    <dt>현재가</dt> 
                    <dd>
                        <img src="../../ethereum.png" alt="eth" className="eth" />
                        <span className={`priceText ${styles.priceText}`}>{price} ETH</span>
                    </dd>
                </div>
                <div>
                    <dt>소유자</dt> <dd>{buyer}{`(${token ? token : " 없음 "})`}</dd>
                </div>
                <div className={styles.tradeDate}>
                    <dt>취득일</dt> <dd>{trade_date}</dd>
                </div>
                <detail open>
                    <summary>history</summary>
                    <ul className={styles.historyItems}>
                        <PurchaseHistoryItem price={0.01} />
                        <PurchaseHistoryItem price={0.01} />
                        <PurchaseHistoryItem price={0.01} />
                    </ul>
                </detail>
            </dl>

        </article>
    );
}
export default Land;