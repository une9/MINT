import styles from "../styles/SideBarInfo.module.scss";

const SideBarInfo = ({id, area, image, buyer, trade_date, price, token}) => {
    
    return(
        <aside className="SideBar">
            <header>
                <h1>토지 정보</h1>
            </header>
            <section className={styles.info}>
                <h2>{id}</h2>
                {
                    image 
                    ? <img className={styles.image} src={image} alt="land" />
                    : <div className={styles.image} />
                }

                <dl className="metadata">
                    <div>
                        <dt>크기</dt> <dd>{area}</dd>
                    </div>
                    <div>
                        <dt>소유자</dt> <dd>{buyer && token ? `${buyer}(${token})` : "(없음)"}</dd>
                    </div>
                    <div className="price">
                        <dt>현재가</dt> 
                        <dd><img src="../../ethereum.png" alt="ethereum" /><span className="priceText">{price} ETH</span></dd>
                    </div>
                </dl>
            </section>
            <section className="btns">
                <button>장바구니에 넣기</button>
                <button>구매하기</button>
            </section>
        </aside>
    );
}
export default SideBarInfo;