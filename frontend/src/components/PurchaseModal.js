import PurchaseBtnSection from "./PurchaseBtnSection";
import styles from "../styles/PurchaseModal.module.scss";
import { VscChromeClose } from "react-icons/vsc";

const PurchaseModal = ({ show, onHide, itemsToBuy }) => {
    // console.log("PurchaseModal Created")

    const myWalletName = "ssafy";
    const myWalletAddr = "0xA72ec60E7AA4FB1928D3f2A375Da13dFaaAAd2f";
    const prevWalletAddr = "0x0000000000000000000000000000000000000";

    const shortenWalletAddr = (addr) => {
        const L = addr.length;
        if (L > 12) {
            return `${addr.slice(0,9)}...${addr.slice(L-3, L-1)}`
        } else return addr
    }

    const buy = () => {
        console.log("구매!")
    }

    return (
        <div className={`${styles.PurchaseModalWrapper} ${show ? styles.show : ""}`}>
            <div className={styles.PurchaseModal}>
                <header>
                    <button className={styles.closeBtn} onClick={onHide}>
                        <VscChromeClose/>
                    </button>
                </header>
                <section className={styles.myWalletInfo}>
                    <h2>
                        내 지갑
                        <img className={styles.metamaskLogo} alt="metamask"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" />
                    </h2>
                    <p className={styles.walletAddr}>{myWalletAddr}</p>
                </section>
                <div className={styles.purchaseModal__bottomWrapper}>
                    <section className={styles.myPurchaseInfoWrapper}>
                        <h2>거래정보</h2>
                        <ul className={`${styles.purchaseGrid} ${styles.purchaseGridTitle}`}>
                            <li className={styles.purchaseGridItem}>토지</li>
                            <li className={styles.purchaseGridItem}>판매자</li>
                            <li className={styles.purchaseGridItem}>구매자</li>
                            <li className={styles.purchaseGridItem}>가격</li>
                        </ul>
                        <div className={styles.myPurchaseInfo}>
                            <ul className={styles.myPurchaseInfo__inner}>
                                {
                                    itemsToBuy.map((item, idx) => (
                                        <li key={`purchaseItem-${idx}`} className={`${styles.purchaseGrid} ${styles.purchaseGridLi}`}>
                                            <span className={styles.purchaseGridItem}>
                                                <span className={styles.purchaseGridItem__title}>{item.id}</span>
                                            </span>
                                            <span className={styles.purchaseGridItem}>
                                                <span className={styles.purchaseGridItem__title}>FROM</span>
                                                {`${item.buyer}(${shortenWalletAddr(prevWalletAddr)})`}
                                            </span>
                                            <span className={styles.purchaseGridItem}>
                                            <span className={styles.purchaseGridItem__title}>TO</span>
                                                {`${myWalletName}(${shortenWalletAddr(myWalletAddr)})`}
                                            </span>
                                            <span className={`price ${styles.price} ${styles.purchaseGridItem}`}>
                                                <img src="../../ethereum.png" alt="eth" className="eth"/>
                                                <span className={`priceText ${styles.priceText}`}>{item.price}</span>
                                            </span>
                                            <span className={`price ${styles.price} ${styles.purchaseGridItem}`}></span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </section>
                    <div className={styles.purchaseBtnWrapper}>
                        <section className={styles.purchaseBtnWrapper__inner}>
                            <div className={styles.purchaseNotice}>
                                <p>
                                    행성 토지 구매시 해당 토지의 소유권은 구매자에게 귀속됩니다.
                                </p>
                                <p>
                                    구매자는 추후 자신이 구매한 토지를 타인에게 재판매할 수 있습니다.
                                </p>
                                <p>
                                    단, 재판매시 얻은 수익의 일부(재판매가의 10%)는 자동으로 MINT에 납부됩니다.
                                </p>
                            </div>
                            <div>
                                <PurchaseBtnSection 
                                    cartSize={itemsToBuy.length} 
                                    totalPrice={itemsToBuy.reduce((acc, item) => { return acc + item.price }, 0)}
                                    onClick={buy} />
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
  }

export default PurchaseModal;