import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import shortenWalletAddr from "./utils/shortenWalletAddr";
import axios from 'axios';
import { useEffect, useState } from "react";

const SideBarInfo = ({tid, area, image, buyerAdr, trade_date, price, tokenId, onModalShow, onAddCart, myWalletAddr, dibbedLands, setDibbedLands }) => {
    const [dibbed, setDibbed] = useState(false);
    useEffect(() => {
        let flag = false;
        dibbedLands.forEach(tile => {
            if (tile.tileId === tid) {
                flag = true;
                setDibbed(true);
                return
            }
        });
        if (!flag) {
            setDibbed(false);
        }
    }, [dibbedLands, tid]);

    const BASE_URL = process.env.REACT_APP_SERVER_URL;
    const imageURL = `http://j6a106.p.ssafy.io/api/image/display?filename=${image}`;

    const onToggleDibs = () => {
        try {
            if (dibbed) {
                //이미 찜 목록에 있으면 찜 해제
                axios.delete(`${BASE_URL}/api/favorite/${myWalletAddr}/${tid}`)
                .then((res) => {
                    console.log(res)
                    setDibbedLands(prev => prev.filter(tile => tile.tileId !== tid))
                    setDibbed(false);
                })
                console.log("찜 해제")
            } else {
                // 찜 목록에 없으면 찜 등록
                axios.post(`${BASE_URL}/api/favorite`, {
                    tileId: tid,
                    walletId: myWalletAddr
                })
                .then((res) => {
                    console.log(res)
                    setDibbedLands(prev => [...prev, {tileId: tid}])
                    setDibbed(true);
                    console.log("찜 등록")
                })
                
            }
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <aside className="SideBar">
            <header>
                <h1>토지 정보</h1>
                <button className="toggleDibsOnLandBtn" onClick={onToggleDibs}>
                    {
                        dibbed ? <AiFillStar /> : <AiOutlineStar />
                    }
                </button>
            </header>
            <section className="info" >
                <h2>{tid}</h2>
                {
                    image 
                    ? <img className="image imageO" src={imageURL} alt="land" />
                    : <div className="image" />
                }

                <div className="SideBarCart__metadataWrapper">
                    <dl className="metadata">
                        <div>
                            <dt>크기</dt> <dd>{area}</dd>
                        </div>
                        <div>
                            <dt>소유자</dt> <dd>{buyerAdr && tokenId ? `${shortenWalletAddr(buyerAdr)}` : "(없음)"}</dd>
                        </div>
                        <div className="price">
                            <dt>현재가</dt> 
                            <dd><img className="eth" src="../../ethereum.png" alt="ethereum" /><span className="priceText">{price} ETH</span></dd>
                        </div>
                    </dl>
                </div>
            </section>
            {
                buyerAdr && tokenId
                ?
                <section className="notice">
                    <p className="notice__buyer">
                        {
                            myWalletAddr === buyerAdr
                            ?
                            "이미 소유하고 있는 토지입니다."
                            :
                            `${shortenWalletAddr(buyerAdr)}님이 소유하고 있는 토지입니다.`
                        }
                    </p>
                    <p>
                        {"개인간 거래 및 판매 기능은 추후 오픈 예정입니다 :)"}
                    </p>
                </section>
                :
                <section className="btns">
                    <button onClick={onAddCart}>
                        장바구니에 넣기
                    </button>
                    <button onClick={onModalShow}>
                        바로 구매하기
                    </button>
                </section>
            }
        </aside>
    );
}
export default SideBarInfo;