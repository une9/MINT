import styles from "../styles/Land.module.scss";
import PurchaseHistoryItem from "./PurchaseHistoryItem";

import { VscChevronDown } from "react-icons/vsc";
import { useEffect } from "react";

import { ethers } from 'ethers';
import axios from "axios";


// version
// card-purchase: 행성 구매페이지 (history: open)
// card-mypage: 마이페이지 - 내가 구매한 토지 정보 (history default: close)

const Land = ({ version, tid, area, image, buyerAdr, tradeDate, price, tokenId }) => {
    console.log(version)
    const imageURL = `http://j6a106.p.ssafy.io/api/image/display?filename=${image}`;
    const shortenWalletAddr = (addr) => {
        if (!addr) {
            return "없음(0x000...00000)";
        }
        const L = addr.length;
        if (L > 12) {
            return `${addr.slice(0,9)}...${addr.slice(L-6, L-1)}`
        } else return addr
    }
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

    const imageChange = async (e) => {
        e.preventDefault();
        if(e.target.files){
            const uploadFile = e.target.files[0]
            const formData = new FormData()
            formData.append('uploadfile',uploadFile)
            formData.append('tid',tid)
            axios
            .post(process.env.REACT_APP_SERVER_URL + '/api/image/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
            window.location.reload();
            // console.log(res);
            });
        }
    }
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
                        ? <img className={styles.landImg} src={imageURL} alt="landImg" />
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
                            ? <img className={`${styles.landImg} ${styles.landImgBig}`} src={imageURL} alt="landImg" />
                            : <div className={`${styles.landImg} ${styles.landImgBig}`} />
                        }
                        {/* <button className={styles.landImgUploadBtn} htmlFor="file">사진 등록</button> */}
                        <div className={styles.filebox}>
                            <label  htmlFor="file">사진 등록</label>
                            <input
                                type="file"
                                id="file"
                                accept="image/*"
                                onChange={imageChange}
                            />
                        </div>
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
                            <dt>취득일</dt> <dd>{tradeDate}</dd>
                        </div>
                    }
                    <div>
                        <dt>소유자</dt> <dd>{shortenWalletAddr(buyerAdr)}{`(${tokenId ? tokenId : " 없음 "})`}</dd>
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