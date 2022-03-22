import PurchaseBtnSection from "./PurchaseBtnSection";
import { VscChromeClose } from "react-icons/vsc";

const SideBarCart = ({cartItems, selectedIdx, setSelectedIdx, setModalShow}) => {
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
            <PurchaseBtnSection 
                cartSize={cartItems.length} 
                totalPrice={cartItems.reduce((acc, item) => { return acc + item.price }, 0)}
                onClick={() => setModalShow(true)} />
        </aside>
    );
}
export default SideBarCart;