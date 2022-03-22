
const PurchaseBtnSection = ({cartSize, totalPrice, onClick}) => {

    return (
        <div className="PurchaseBtnSection">
            <section className="totalPrice">
                <h2 className="priceTitle">총 금액 {`(${cartSize})`}</h2>
                <div className="priceWrapper">
                    <img src="../../ethereum.png" alt="ethereum" className="eth"/>
                    <span className="priceText">{`${totalPrice}`} ETH</span>
                </div>

            </section>
            <section className="btns">
                <button onClick={onClick}>구매하기</button>
            </section>
        </div>
    )
}

export default PurchaseBtnSection;