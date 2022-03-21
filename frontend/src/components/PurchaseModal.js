import styles from "../styles/PurchaseModal.module.scss";
import { VscChromeClose } from "react-icons/vsc";

const PurchaseModal = ({ show, onHide }) => {
    console.log("PurchaseModal Created")

    const walletAddr = "0xA72ec60E7AA4FB1928D3f2A375Da13dFaaAAd2f";

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
                    <p className={styles.walletAddr}>{walletAddr}</p>
                </section>
                <section className={styles.myPurchaseInfo}>
                    <h2>거래정보</h2>
                    <ul>
                        <li>토지</li>
                        <li>구매자</li>
                        <li>판매자</li>
                        <li>가격</li>
                    </ul>
                </section>

            </div>
        </div>
    );
  }

export default PurchaseModal;