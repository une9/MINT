import styles from "../styles/PurchaseHistoryItem.module.scss";

const PurchaseHistoryItem = ({ version, price, }) => {
    console.log(version)
   
    return(
        <li className={styles.historyItem}>
            <div className={styles.historyItem__header}>
                <div className={styles.marker} />
                <p>22.03.07</p>
            </div>
            <div className={styles.historyItem__purchaseInfo}>
                <p className={styles.historyItem__buyer}>
                    ssafyking1 {`(0x723...2ee60f)`}
                </p>
                <div className={`price ${styles.price}`}>
                    <dd>
                        <img src="../../ethereum.png" alt="eth" className="eth" />
                        <span className={`priceText ${styles.priceText}`}>{price} ETH</span>
                    </dd>
                </div>
            </div>
        </li>
    );
}
export default PurchaseHistoryItem;