import styles from "../styles/Land.module.scss";
import PurchaseHistoryItem from "./PurchaseHistoryItem";

import shortenWalletAddr from "./utils/shortenWalletAddr";

import { VscChevronDown } from "react-icons/vsc";
import { useEffect } from "react";

import { ethers } from 'ethers';
import contract from '../smartcontract/TileFactory.json'

// version
// card-purchase: 행성 구매페이지 (history: open)
// card-mypage: 마이페이지 - 내가 구매한 토지 정보 (history default: close)

// const Land = ({ version, tid, area, image, buyer, trade_date, price, tokenId }) => {
const Land = (props) => {
    console.log(props)
    const { version, tid, area, image, buyerAdr, tradeDate, price } = props;
    const tokenId = "0x00";
    // console.log(version)
    console.log("tokenId:", Number(tokenId))

    useEffect(() => {
        // const { ethereum } = window;
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();
        // // const abi = contract.abi;
        // const abi = [ "event nftPurchase(tileIds, msg.sender, block.timestamp)" ];;
        // const iface = new ethers.utils.Interface(abi);
        // console.log(provider)

        // const filter = {
        //     transactionHash: tokenId
        // }
        // provider.getLogs({})
        // .then((res) => {
        //     console.log(res)
        //     const parsedLogs = res.map((log) => iface.parseLog(log));
        //     console.log("parsedLogs", parsedLogs)
        // })

    }, []);

    useEffect(() => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        // const abi = contract.abi;
        const abi = [ "event nftPurchase(uint256 indexed tileIds, address indexed buyer, uint256 indexed purchaseTime)" ];;
        const iface = new ethers.utils.Interface(abi);
        console.log(provider)

        const filter = {
            // transactionHash: tokenId
            logIndex: Number(tokenId),
            blockHash: "0x894E2eFe90a97d732f20fC12f6a020a67D24aA5F",
            // topics: [
            //     iface
            // ]
            // transactionIndex: Number(tokenId)
        }
        provider.getLogs(filter)
        .then((res) => {
            console.log(res)
            const parsedLogs = res.map((log) => {
                try {
                    return iface.parseLog(log);
                } catch (err) {
                    return null;
                }
            });
            console.log("parsedLogs", parsedLogs)
        })


        // contract.on("nftPurchase", (tileIds, buyer, purchaseTime) => {
        //     console.log({
        //         tileIds: tileIds,
        //         buyer: buyer,
        //         purchaseTime: purchaseTime,
        //     });
        // });


        // provider.getTransactionReceipt("0x894E2eFe90a97d732f20fC12f6a020a67D24aA5F")
        // .then((receipt) => {
        //     console.log(receipt)
        //     let abi = [ "event nftPurchase(uint256 indexed tileIds, address indexed buyer, uint256 indexed purchaseTime)" ];
        //     let iface = new ethers.utils.Interface(abi);
        //     // let log = iface.parseLog(receipt.logs[1]);
        //     // console.log(log)
        // })

    }, [tokenId])

    const imageChange = () => {

    }

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
                        <button className={styles.landImgUploadBtn} onClick={imageChange}>사진 등록</button>
                    </div>
                }
                <dl className={`metadata ${styles.metadata}`}>
                    <div>
                        <dt>크기</dt> <dd>{area * 1000}km<sup>2</sup></dd>
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
                        <dt>소유자</dt> <dd>{buyerAdr}{`(${tokenId ? tokenId : " 없음 "})`}</dd>
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