import { useWeb3React } from '@web3-react/core';
import styles from '../../styles/Metamask.scss';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Web3Provider } from '@ethersproject/providers';
import { useEffect, useState } from 'react';

const Metamask = ()=>{

    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWalletHandler = async () => { 
        const { ethereum } = window;

        if (!ethereum) {
            window.open('https://metamask.io/download.html');
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Address : ", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="login-box" style={styles}>
            <img src="/image/logos_metamask-icon.png" alt="" className='matamask-icon'/>
            <div className='metamask-title'>MetaMask</div>
            <div className='metamask-content'>
                <div>서비스를 사용하시려면 <br /> 지갑과 연결이 필요합니다.</div>
                <div style={{"margin-top":"1.5vh"}}>MetaMask 지갑에 연결하시겠습니까?</div>    
            </div>
            <div className='connect-button' onClick={connectWalletHandler}>Connect</div>
        </div>
    );
}
export default Metamask;