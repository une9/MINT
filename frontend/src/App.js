import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";
import isLogin from "./utils/isLogin";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";


let currentAccount;

const checkWalletIsConnected = async () => {
  const { ethereum } = window;

  if (!ethereum) {
      console.log("Wallet is not exist");
      return;
  } else {
      console.log("Wallet exist!");
  }

  const accounts = await ethereum.request({ method: 'eth_accounts'});

  if (accounts.length !== 0){
      const account = accounts[0];
      currentAccount = account;
      console.log("현재 연결된 지갑 주소 : ", account);
  } else {
      console.log("현재 연결된 지갑 X");
  }
}

const App= ( ) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
    checkWalletIsConnected();
    if (pathname==='/') {
      navigate('/home');
    }
  });
    return(
        <div style={{height:"100%"}}>
          {isLogin()?(
            <SidebarUSer/>
          ):( <Sidebar/>)}
           
            {/* <SidebarUSer/> */}
            {/* <SidebarAdmin/> */}
            <Outlet />

        </div>
    );
}
export default App;