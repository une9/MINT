import { Outlet } from "react-router-dom";
import Sidebar from "./components/navbar/Sidebar";
import SidebarUSer from "./components/navbar/SidebarUser";
import SidebarAdmin from "./components/navbar/SidebarAdmin";

const App= ( ) => {
    return(
        <div>
            {/* <Sidebar/> */}
            {/* <SidebarUSer/> */}
            <SidebarAdmin/>
            <Outlet />
        </div>
    );
}
export default App;