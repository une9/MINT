import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const SideBarInfo = ({tid, area, image, buyerAdr, trade_date, price, tokenId, onModalShow, onAddCart}) => {
    const onToggleDibs = () => {

    }

    return(
        <aside className="SideBar">
            <header>
                <h1>토지 정보</h1>
                <button className="toggleDibsOnLandBtn" onClick={onToggleDibs}>
                    {/* <AiFillStar /> */}
                    <AiOutlineStar />
                </button>
            </header>
            <section className="info" >
                <h2>{tid}</h2>
                {
                    image 
                    ? <img className="image" src={image} alt="land" />
                    : <div className="image" />
                }

                <div className="SideBarCart__metadataWrapper">
                    <dl className="metadata">
                        <div>
                            <dt>크기</dt> <dd>{area}</dd>
                        </div>
                        <div>
                            <dt>소유자</dt> <dd>{buyerAdr && tokenId ? `${buyerAdr}(${tokenId})` : "(없음)"}</dd>
                        </div>
                        <div className="price">
                            <dt>현재가</dt> 
                            <dd><img className="eth" src="../../ethereum.png" alt="ethereum" /><span className="priceText">{price} ETH</span></dd>
                        </div>
                    </dl>
                </div>
            </section>
            <section className="btns">
                <button onClick={onAddCart}>
                    장바구니에 넣기
                </button>
                <button onClick={onModalShow}>
                    바로 구매하기
                </button>
            </section>
        </aside>
    );
}
export default SideBarInfo;