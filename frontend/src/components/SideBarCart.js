import { VscChromeClose } from "react-icons/vsc";

const SideBarCart = ({cartItems, selectedIdx, setSelectedIdx}) => {
    console.log(cartItems)
    
    return(
        <aside className="SideBar">
            <header>
                <h1>장바구니</h1>
            </header>
            <section className="cartList" >
                {
                    cartItems.map((item, idx) => (
                        <section key={`cartItem-${idx}`} className={`cartItem ${idx === selectedIdx ? "cartItem--selected" : ""}`}>
                            <button className="deleteBtn"><VscChromeClose/></button>
                            <img className="planetImg" src={item.planet.data.imgSrc} alt={`planet-${item.planet.data.name}`} />
                            <div className="itemInfo">
                                <p className="planetName">{item.planet.data.name}</p>
                                <h2 className="landId">{item.id}</h2>
                                <div className="itemPrice">
                                    <img src="../../ethereum.png" alt="ethereum" className="eth"/>
                                    <span className="priceText">{item.price} ETH</span>
                                </div>
                            </div>
                        </section>))
                }
            </section>
            <section className="totalPrice">
                <h2>총 금액 {`(${cartItems.length})`}</h2>
                <div className="priceWrapper">
                    <img src="../../ethereum.png" alt="ethereum" className="eth"/>
                    <span className="priceText">{`${cartItems.reduce((acc, item) => { return acc + item.price }, 0)}`} ETH</span>
                </div>

            </section>
            <section className="btns">
                <button>구매하기</button>
            </section>
        </aside>
    );
}
export default SideBarCart;