import styles from "../styles/PlanetMap.module.scss";

// versions
// 1. purchase (구매과정, 선택 셀 색깔 민트색)
// 2. admin (관리자 페이지, 선택 셀(구매 완료된 셀들) 색깔 빨간색)

const PlanetMap = ({ version, tiles}) => {
    
    return(
        <article className={`${styles.PlanetMap} ${styles[version]}`}>

        </article>
    );
}
export default PlanetMap;