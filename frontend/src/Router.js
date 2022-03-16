import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import MyPage from './pages/MyPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router= ( ) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>  
                    <Route path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/mypage" element={<MyPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;