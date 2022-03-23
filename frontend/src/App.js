import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";
import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";

const App= ( ) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
    if (pathname==='/') {
      navigate('/home');
    }
  });
    return(
        <div>
            {/* <Sidebar/> */}
            <SidebarUSer/>
            {/* <SidebarAdmin/> */}
            <Outlet />

        </div>
    );
}
export default App;