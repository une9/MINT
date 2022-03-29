const isLogin = () => {
    const account = localStorage.getItem("account");
    // console.log(token);
    if (account === null) {
      // console.log(token);
      return false;
    } else {
      return true;
    }
  };
  export default isLogin;