import styles from '../../styles/Metamask.scss';
const Metamask = ()=>{
    const buttonClick= ()=>{
        
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