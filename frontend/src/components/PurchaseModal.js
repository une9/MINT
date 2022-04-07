import PurchaseBtnSection from "./PurchaseBtnSection";
import styles from "../styles/PurchaseModal.module.scss";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";
import shortenWalletAddr from "./utils/shortenWalletAddr";

import { ethers } from 'ethers';
import axios from 'axios';
import Big from "big.js";

const PurchaseModal = ({ show, onHide, itemsToBuy, myWeb3, isBuyDirect }) => {
    // console.log("PurchaseModal Created")
    const [myWalletAddr, setMyWalletAddr] = useState();

    // const myWalletName = "ssafy";
    // const myWalletAddr = "0xA72ec60E7AA4FB1928D3f2A375Da13dFaaAAd2f";

    const BASE_URL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        signer.getAddress()
        .then((res) => {
            setMyWalletAddr(res);
        })
    }, []);

    const buy = async () => {
        console.log("구매!")
        // 구매 함수 호출
        try {
            for (const item of itemsToBuy) {
                const priceInWei = ethers.utils.parseEther(String(item.price))._hex;
                console.log(priceInWei)
                // const price = item.price * 10**18;
                console.log(item.planet.data.galaxy, item.planet.data.name, item.tid, priceInWei)
                const tokenId = await myWeb3.nftContract.createAndBuy(item.planet.data.galaxy, item.planet.data.name, item.tid, priceInWei, { value: priceInWei});
                console.log("tokenId: ", tokenId)
                // const tokenId = await myWeb3.nftContract.currentTileId();

                axios.put(`${BASE_URL}/api/tile/`, {
                    buyerAdr: myWalletAddr,
                    buyerId: null,
                    tokenId: tokenId._hex,
                    area: item.area,
                    planet: Number(item.planet.id),
                    price: item.price,
                    tid: item.tid,
                    tradeDate: new Date()
                })
                .then(() => {
                    axios.get(`${BASE_URL}/api/tile/${item.tid}`)
                    .then((res) => {
                        console.log(res);
                    })
                })
                console.log(item)
            }

            if (!isBuyDirect) {
                localStorage.removeItem("mintCart");
            }

            console.log("구매 끝!");
        } catch (err) {
            console.log(err);
        }
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
                                                <span className={`${styles.purchaseGridItem__title} ${styles.purchaseGridItem__landId}`}>{item.tid}</span>
                                            </span>
                                            <span className={styles.purchaseGridItem}>
                                                <span className={styles.purchaseGridItem__title}>FROM</span>
                                                {`${shortenWalletAddr(item.buyerAdr)}`}
                                            </span>
                                            <span className={styles.purchaseGridItem}>
                                            <span className={styles.purchaseGridItem__title}>TO</span>
                                                {`${shortenWalletAddr(myWalletAddr)}`}
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
                                    totalPrice={new Big(itemsToBuy.reduce((acc, item) => { return acc + item.price }, 0)).toFixed(2)}
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