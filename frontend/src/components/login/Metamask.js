import { useWeb3React } from '@web3-react/core';
import styles from '../../styles/Metamask.scss';
import {InjectedConnector} from '@web3-react/injected-connector';
import { useNavigate } from 'react-router-dom';

const Metamask = ()=>{
    const {
        chainId,
        account,
        active,
        error,
        activate,
        deactivate
    } = useWeb3React();
    
    const navigate = useNavigate();
    const injected = new InjectedConnector();

    const handleConnect = () => {
        if(active){
            deactivate();
            return;
        }

        activate(injected, (error)=>{
            console.log(error);
            if('/No Ethereum provider was found on window.ethereum/'){
                window.open('https://metamask.io/download.html');
            }
        });

        localStorage.setItem("account", {account});
        localStorage.setItem("chainId", {chainId});
    }
    const buttonClick= ()=>{
        handleConnect();
        const uri = localStorage.getItem('path');
        navigate(uri);

    }
    return(
        <div className="login-box" style={styles}>
            <img src="/image/logos_metamask-icon.png" alt="" className='matamask-icon'/>
            <div className='metamask-title'>MetaMask</div>
            <div className='metamask-content'>
                <div>서비스를 사용하시려면 <br /> 지갑과 연결이 필요합니다.</div>
                <div style={{"margin-top":"1.5vh"}}>MetaMask 지갑에 연결하시겠습니까?</div>    
            </div>
            <div className='connect-button' onClick={buttonClick}>Connect</div>
        </div>
    );
}
export default Metamask;