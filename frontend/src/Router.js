import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import PlanetDetail from './pages/PlanetDetail';
import PlanetPurchase from './pages/PlanetPurchase';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter= ( ) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>  
                    <Route path="home" element={<Home />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="mypage" element={<MyPage />}/>
                    <Route path="planet/:planetId" element={<PlanetDetail />} /> 
                    <Route path="planet/purchase" element={<PlanetPurchase />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;