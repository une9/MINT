import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import useMetaMask from './hook/MetamaskHook';


const App= ( ) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask();

    useEffect(() => {
      if (pathname==='/') {
        navigate('/home');
        localStorage.setItem("path",{pathname});
      }
    });
    return(
        <div style={{height:"100%"}}>
         {account&&account.length>0 ? (account === "0x5c6ba643C16FdaBCdb9806067d6C911F4ceF080E" ? <SidebarAdmin/>:<SidebarUSer/>):<Sidebar/>}
            {/* <SidebarUSer/> */}
            {/* <SidebarAdmin/> */}
            <Outlet />

        </div>
    );
}
export default App;