const SideBarCart = (items) => {
    console.log(items)
    
    return(
        <aside className="SideBar">
            <header>
                <h1>장바구니</h1>
            </header>
            <section className="cartList" >
                <h2>{}</h2>
                
            </section>
            <section className="btns">
                <button>구매하기</button>
            </section>
        </aside>
    );
}
export default SideBarCart;