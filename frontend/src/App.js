import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import useMetaMask from './hook/MetamaskHook';

import { ethers } from 'ethers';
import contract from './smartcontract/TileFactory.json'


const App = ( ) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [myWeb3, setMyWeb3] = useState({});
    const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask();

    useEffect(() => {
      if (pathname === '/') {
        navigate('/home');
        localStorage.setItem("path",{pathname});
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
         {account&&account.length>0 ? (account === "0x5c6ba643C16FdaBCdb9806067d6C911F4ceF080E" ? <SidebarAdmin/>:<SidebarUSer/>):<Sidebar/>}
            {/* <SidebarUSer/> */}
            {/* <SidebarAdmin/> */}
            <Outlet context={myWeb3} />

        </div>
    );
}
export default App;