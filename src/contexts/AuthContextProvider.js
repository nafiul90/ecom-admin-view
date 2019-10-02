import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const auth = localStorage.getItem("auth");

const AuthContextProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(auth ? true : false);

    const loginRequest = (auth) => {
        setIsLogin(true);
        localStorage.setItem("auth", auth);
    }

    const logoutRequest = () => {
        setIsLogin(false);
        localStorage.removeItem("auth");
    }

    return ( 
        <AuthContext.Provider
            value={{
                isLogin,
                loginRequest,
                logoutRequest
            }}
        >
            {children}
        </AuthContext.Provider>
     );
} 

export default AuthContextProvider;