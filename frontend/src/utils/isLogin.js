
import { useEffect, useState } from "react";
const IsLogin = () => {

    // const account = localStorage.getItem("account");
    // console.log(token);
    // if (account === null) {
    //   // console.log(token);
    //   return false;
    // } else {
    //   return true;
    // }
    useEffect(() => {
      checkWalletIsConnected();
    });
    const [currentAccount, setCurrentAccount] = useState();;

    const checkWalletIsConnected = async () => {
      const { ethereum } = window;

      if (!ethereum) {
          console.log("Wallet is not exist");
          return;
      } else {
          console.log("Wallet exist!");
      }

      const accounts = await ethereum.request({ method: 'eth_accounts'});

      if (accounts.length !== 0){
          const account = accounts[0];
          setCurrentAccount(account);
          console.log("현재 연결된 지갑 주소 : ", account);
      } else {
          console.log("현재 연결된 지갑 X");
      }
    }
  };
  export default IsLogin;