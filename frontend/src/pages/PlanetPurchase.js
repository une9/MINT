import { useEffect, useState } from "react";
import styles from "../styles/PlanetPurchase.module.scss";

import Planet from "../components/Planet";
import Land from "../components/Land";
import PlanetMap from "../components/PlanetMap";
import SideBarCart from "../components/SideBarCart";
import PurchaseModal from "../components/PurchaseModal";
import { useNavigate } from "react-router-dom";

const PlanetPurchase= () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedIdx, setSelectedIdx] = useState(0);

    const [modalShow, setModalShow] = useState(false);
    const onModalHide = () => setModalShow(false);

    const navigate = useNavigate();

    useEffect(() => {
        // localstorage에서 가져오기
        const cartItemsInStorage = [
            {
                planet: {
                    id: "abcd",
                    data: {
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-001",
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
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-001",
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
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-001",
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
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-001",
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
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-001",
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
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-002",
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
                        name: "kepler-1649c",
                        imgSrc: "../../planet_ex.png",
                        diameter: "지구의 약 1.06배",
                        mass: "지구의 약 4배",
                        belongsTo: "?" ,
                        distance: "지구로부터 약 300광년",
                        description: `“지구의 크기와 궤도까지 비슷한 유사 지구” \n 지구의 크기와 궤도까지 비슷한 몇 안 되는 외계행성 중 하나다. 표면 온도 역시 지구와 유사해 생명체가 존재할 가능성이 있는 것으로 추정된다. 공전주기는 지구 시간으로 19.5일로 매우 짧은 편인데, 1년은 무려 617일이나 된다! 하루하루가 너무 길게 느껴지는 사람이라면 케플러-1649c에서 살아보는 것은 어떨까?`,
                    }
                },
                id: "A-003",
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
                                cartItems.length && <PlanetMap tiles={cartItems[selectedIdx]} />
                            }
                        </div>
                        <div>
                            <Land {...{...cartItems[selectedIdx], ...{version: "card-purchase"}}} />
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
                setCartItems={setCartItems} />
        </div>
    );
}
export default PlanetPurchase;