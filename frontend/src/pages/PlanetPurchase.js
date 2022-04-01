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
        // localstorage에서 가져오기
        const cartItemsInStorage = [
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-A-001",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-A-002",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-B-001",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-C-001",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-D-002",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-A-006",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "Kepler_1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "KepC-A-010",
                area: 1,
                image: null,
                buyer: null,
                trade_date: null,
                price: 0.01,
                token: null,
            },
        ]
        setCartItems(cartItemsInStorage);

    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            setSelectedId(cartItems[0].id);
        }
    }, [cartItems]);

    useEffect(() => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === selectedId) {
                setSelectedIdx(i);
                break
            }
        }
    }, [selectedId]);


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
                                    selectedTileId={cartItems[selectedIdx].id}
                                    setSelectedTileId={setSelectedId} />
                            }
                        </div>
                        <div>
                            <Land {...{...cartItems[selectedIdx], ...{version: "card-purchase"}}} />

                            {/* test용 */}
                            <div>
                                <button onClick={contractCall}>contractCall</button>
                            </div>
                            {/* test용 */}

                        </div>
                    </div>
                    :
                    <div className="btns">
                        <button onClick={() => {
                            navigate("/");
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
            />
            <SideBarCart  
                cartItems={cartItems}
                selectedIdx={selectedIdx}
                setSelectedIdx={setSelectedIdx}
                setModalShow={setModalShow}
                setCartItems={setCartItems}
            />
        </div>
    );
}
export default PlanetPurchase;