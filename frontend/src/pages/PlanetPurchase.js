import { useEffect, useState } from "react";
import styles from "../styles/PlanetPurchase.module.scss";

import Planet from "../components/Planet";
import Land from "../components/Land";
import PlanetMap from "../components/PlanetMap";
import SideBarCart from "../components/SideBarCart";
import PurchaseModal from "../components/PurchaseModal";
import { useNavigate } from "react-router-dom";

// outlet context
import { useOutletContext } from "react-router-dom";

import { ethers } from 'ethers';
// import contract from '../smartcontract/TileFactory.json'

const PlanetPurchase= () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [selectedId, setSelectedId] = useState("");

    const [modalShow, setModalShow] = useState(false);
    const onModalHide = () => setModalShow(false);

    const navigate = useNavigate();

    // web3 관련 객체 가져오기
    const myWeb3 = useOutletContext();
    console.log(myWeb3)

    useEffect(() => {
        const cartItemsInStorage = JSON.parse(localStorage.getItem("mintCart"));
        console.log(cartItemsInStorage);
        if (cartItemsInStorage) {
            setCartItems(prev => [...prev, ...cartItemsInStorage]);
        }

    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            setSelectedId(cartItems[0].id);
        }
        console.log(cartItems)
    }, [cartItems]);

    useEffect(() => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === selectedId) {
                setSelectedIdx(i);
                break
            }
        }
    }, [selectedId]);


    // TEST!!!
    // smart contract
    const contractCall = async () => {
        // const abi = contract.abi;
        // const contractAddress = "0xe51250721f911098273062509165185f0e18DF82";

        try {
            const { ethereum } = window;

            if ( ethereum ){
                // const provider = new ethers.providers.Web3Provider(ethereum);
                // const signer = provider.getSigner();
                // const nftContract = new ethers.Contract(contractAddress, abi, signer);
                // console.log("컨트랙트 연결");

                // const gasPrice = await provider.getGasPrice();
                // const gasPriceInDecString = Number(gasPrice._hex).toString();
                // // console.log(gasPrice)
                // console.log("gas price: ", gasPriceInDecString);

                let amountInEther = '0.001';
                // Create a transaction object
                let tx = {
                    // Convert currency unit from ether to wei
                    value: ethers.utils.parseEther(amountInEther)
                };

                // 구매 함수 호출
                // await nftContract.createAndBuy("우리은하", "TEST", "TEST-A-001", 10**15, tx);

                const myTiles = await myWeb3.nftContract.getMyTile();
                console.log("getMyTile: ", myTiles);

                let currentTileId = await myWeb3.nftContract.currentTileId();
                console.log("currentTileId:", currentTileId);
                const currentTileIdHex = currentTileId._hex;
                const currentTileIdDec = Number(currentTileIdHex);
                console.log("currentTileId(hex):", currentTileIdHex);
                console.log("currentTileId(decimal):", currentTileIdDec);

                // let balance = await provider.getBalance(contractAddress);
                // console.log(balance);
            } else {
                console.log("metamast 연결 X")
            }
        }
        catch (error) {
            console.log(error);        
        }
    }





    return(
        <div className={`${styles.PlanetPurchase} PlanetPage`}>
            <main>
                <h1>행성 토지 정보</h1>
                {
                    cartItems.length > 0
                    ?
                    <div className={styles.PlanetPurchaseInfoWrapper}>
                        <div>
                            {
                                cartItems.length && <Planet {...{...cartItems[selectedIdx].planet.data, ...{version: "card"}}} />
                            }

                            {
                                cartItems.length 
                                && 
                                 <PlanetMap 
                                    version={"purchase"}
                                    planetName={cartItems[selectedIdx].planet.data.name}
                                    tiles={cartItems[selectedIdx]}
                                    selectedTileId={cartItems[selectedIdx].tid}
                                    setSelectedTileId={setSelectedId} />
                            }
                        </div>
                        <div>
                            <Land {...{...cartItems[selectedIdx], ...{version: "card-purchase"}}} />
                        </div>
                    </div>
                    :
                    <div className="btns">
                        <button onClick={() => {
                            navigate("/home");
                        }}>
                            메인페이지로 가기
                        </button>
                    </div>
                }
            </main>
            
            <PurchaseModal
                show={modalShow}
                onHide={onModalHide} 
                itemsToBuy={cartItems}
                myWeb3={myWeb3}
                isBuyDirect={false}
            />
            <SideBarCart  
                cartItems={cartItems}
                selectedIdx={selectedIdx}
                setSelectedIdx={setSelectedIdx}
                setModalShow={setModalShow}
                setCartItems={setCartItems}
                onBuyDirect={false}
            />
        </div>
    );
}
export default PlanetPurchase;