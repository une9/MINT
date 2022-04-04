import styles from "../styles/Land.module.scss";
import PurchaseHistoryItem from "./PurchaseHistoryItem";

import { VscChevronDown } from "react-icons/vsc";
import { useEffect } from "react";

import { ethers } from 'ethers';

// version
// card-purchase: 행성 구매페이지 (history: open)
// card-mypage: 마이페이지 - 내가 구매한 토지 정보 (history default: close)

const Land = ({ version, tid, area, image, buyer, trade_date, price, token }) => {
    console.log(version)

    useEffect(() => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log(provider)


        // transaction history 
        // https://docs.ethers.io/v5/api/providers/provider/#Provider-getTransactionReceipt

        // provider.getLogs()
        // .then((res) => {
        //     console.log(res)
        // })

    }, []);

    // useEffect(() => {
    //     if (provider) {

    //         console.log(provider.getLogs())
    //     }
    // }, [provider])

    return(
        <article className={`${styles.Land} ${styles[version]} ${version === "card-purchase" ? "Box" : ""}`}>
            {
                version === "card-purchase" 
                &&
                <header>
                    {
                        image
                        ? <img className={styles.landImg} src={image} alt="landImg" />
                        : <div className={styles.landImg} />
                    }
                    <h2>{tid}</h2>
                </header>
            }
            <div className={styles.landInfoWrapper}>
                {
                    version === "card-mypage"
                    &&
                    <div className={styles.landImgWrapper}>
                        {
                            image
                            ? <img className={`${styles.landImg} ${styles.landImgBig}`} src={image} alt="landImg" />
                            : <div className={`${styles.landImg} ${styles.landImgBig}`} />
                        }
                        <button className={styles.landImgUploadBtn}>사진 등록</button>
                    </div>
                }
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
                    {
                        version !== "card-purchase" 
                        &&
                        <div className={styles.tradeDate}>
                            <dt>취득일</dt> <dd>{trade_date}</dd>
                        </div>
                    }
                    <div>
                        <dt>소유자</dt> <dd>{buyer}{`(${token ? token : " 없음 "})`}</dd>
                    </div>
                    <details open={version === "card-purchase" ? true : false} className={styles.purchaseHistory}>
                        <summary>
                            history 
                            {
                                version !== "card-purchase"
                                &&
                                <VscChevronDown className={styles.arrowDown} />
                            }
                        </summary>
                        <ul className={styles.historyItems}>
                            <PurchaseHistoryItem price={0.01} />
                            <PurchaseHistoryItem price={0.01} />
                            <PurchaseHistoryItem price={0.01} />
                        </ul>
                    </details>
                </dl>
            </div>
            {
                version === "card-mypage"
                &&
                <button className={styles.landInMapBtn}>지도에서 위치 확인하기</button>
            }

        </article>
    );
}
export default Land;