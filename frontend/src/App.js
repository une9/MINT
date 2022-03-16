import { Outlet } from "react-router-dom";

const App= ( ) => {
    return(
        <div>
            <div>App</div>
            <Outlet />
        </div>
    );
}
export default App;