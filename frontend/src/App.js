import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";
import isLogin from "./utils/isLogin";
import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";


const App= ( ) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
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