import React from "react";


let useAuth = () => {
    let isLogedin = localStorage.getItem('logedin');
    if(isLogedin === 'true') {
        return true;
    }
    return false;
}

export default useAuth;