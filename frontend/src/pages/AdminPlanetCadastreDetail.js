import { useParams } from "react-router-dom";
import PlanetMap from "../components/PlanetMap";

const AdminPlanetCadastreDetail= ( ) => {
    // 임시 데이터
    // 수정해서 쓰세요 :)
    const planetName = "Kepler-1649c"
    const tiles = [
        {
            id: "KepC-A-001",
            area: 1,
            image: null,
            buyer: null,
            trade_date: null,
            price: 0.01,
            token: null,
        },
        {
            id: "KepC-A-002",
            area: 1,
            image: null,
            buyer: null,
            trade_date: null,
            price: 0.01,
            token: null,
        },
        {
            id: "KepC-A-003",
            area: 1,
            image: null,
            buyer: null,
            trade_date: null,
            price: 0.01,
            token: null,
        },
        {
            id: "KepC-A-004",
            area: 1,
            image: null,
            buyer: null,
            trade_date: null,
            price: 0.01,
            token: null,
        },
        {
            id: "KepC-B-001",
            area: 2,
            image: null,
            buyer: null,
            trade_date: null,
            price: 0.04,
            token: null,
        },
    ]
    const soldTiles = [
        "KepC-A-001",
        "KepC-A-003",
        "KepC-B-001",
        "KepC-C-001",
        "KepC-D-002",
        "KepC-E-002",
        "KepC-E-003",
    ]
    const { planetId } = useParams();
    

    return(
       <div>
           <div><b>싸피싸피행성</b> 토지현황</div>
           <PlanetMap
                version={"admin"}
                planetName={planetName}
                tiles={tiles}
                soldTiles={soldTiles} />
       </div>
    );
}
export default AdminPlanetCadastreDetail;