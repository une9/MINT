import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlanetMap from "../components/PlanetMap";
import PlanetLottie from '../components/PlanetLottie';
import CircularProgressBar from "../components/CircularProgressbar";
import '../styles/CadastreDetail.scss';


const AdminPlanetCadastreDetail= ( ) => {

    // 임시 데이터
    // 수정해서 쓰세요 :)
    const planetName = "Kepler_1649c"
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
    const [myPlanet, setMyPlanet] = useState([]);
    const [myDistance, setMyDistance] = useState("");
    const percentage = (( 5 / 20) * 100).toFixed(0);
    useEffect(() => {
        
        axios
      .get(process.env.REACT_APP_SERVER_URL + '/api/planet/' + planetId, {})
      .then((res) => {
        const planetRes = res.data;
        setMyPlanet(planetRes);
        setMyDistance( distance.get(planetRes.name))
      });
  }, []);
  const distance = new Map([
    ['Teegarden_b', "지구로부터 약 758,893AU (약 12광년)"],
    ['Kepler_1649c', "지구로부터 약 1.897e+7AU (약 300광년)"],
    ['Ross_128b', "지구로부터 약 695,652AU (약 11광년)"],
    ['Kepler_22b', "지구로부터 약 3.794e+7AU (약 600광년)"],
    ['Proxima_B', "지구로부터 약 265,613AU (약 4.2광년)"],
  ]);

    return(
       <div className="CadastreDetail">
           <div className="CadastreDetail-name"><b>{myPlanet.name}</b> 토지현황</div>
           <div className="CadastreDetail-box">
                <div className="CadastreDetail-lottie"><PlanetLottie planetName={myPlanet.name}/></div>
                <div className="CadastreDetail-area">
                    <span className="CadastreDetail-data">
                        <div className="CadastreDetail-title">질량</div>
                        <div className="CadastreDetail-content">{myPlanet.mass}x 5.9742 x 1024kg</div>
                    </span>
                    <span className="CadastreDetail-data">
                        <div className="CadastreDetail-title">지름</div>
                        <div className="CadastreDetail-content">{myPlanet.diameter}x 12,742km</div>
                    </span>
                    <span className="CadastreDetail-data">
                        <div className="CadastreDetail-title">소속</div>
                        <div className="CadastreDetail-content">{myPlanet.galaxy}</div>
                    </span>
                    
                    <img src={'../../cadastre.svg'} alt={'../../cadastre.svg'} className="CadastreDetail-img"/>
                    <div className="CadastreDetail-distance">{myDistance}</div>
                    <div className="CadastreDetail-au">*1AU = 약 1억 5천만 km(태양과 지구 간의 거리)</div>
                </div>
                <div className='v-line'></div>
                <div className="CadastreDetail-percent">
                    <div className="CadastreDetail-landdiv">땅구매 비율</div>
                    <div className="CadastreDetail-circular"><CircularProgressBar percentage={percentage}/></div>
                </div>
                
           </div>
           <PlanetMap
                version={"admin"}
                planetName={planetName}
                tiles={tiles}
                soldTiles={soldTiles} />
       </div>
    );
}
export default AdminPlanetCadastreDetail;