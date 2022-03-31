import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";
import isLogin from "./utils/isLogin";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import { ethers } from 'ethers';
import contract from './smartcontract/TileFactory.json'


const App = ( ) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [myWeb3, setMyWeb3] = useState({});

    useEffect(() => {
      if (pathname === '/') {
        navigate('/home');
        return
      }

      const abi = contract.abi;
      const contractAddress = "0xe51250721f911098273062509165185f0e18DF82";

      try {
          const { ethereum } = window;
          console.log("web3 객체 생성!!!!!!!!!!!!!!!!!!!!")

          if ( ethereum ){
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const nftContract = new ethers.Contract(contractAddress, abi, signer);
              
              setMyWeb3({
                provider: provider,
                signer: signer,
                nftContract: nftContract
              });

              console.log("컨트랙트 연결");

          } else {
              console.log("metamast 연결 X")
          }
      }
      catch (error) {
          console.log(error);        
      }

    }, []);

    return(
        <div style={{height:"100%"}}>
          {isLogin()?(
            <SidebarUSer/>
          ):( <Sidebar/>)}
           
            {/* <SidebarUSer/> */}
            {/* <SidebarAdmin/> */}
            <Outlet context={myWeb3} />

        </div>
    );
}
export default App;