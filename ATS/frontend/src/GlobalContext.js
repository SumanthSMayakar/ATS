import axios from "axios";
import React, { createContext, useCallback, useState, useEffect } from "react";
import AuthApi from './Component/API/AuthApi';

export const GlobalContext = createContext();

function DataProvider(props) {
  const [token, setToken] = useState(false);

  const initToken = useCallback(() => {
    const getToken = async () => {
      const accessToken = localStorage.getItem("accesstoken") || false;

      if (accessToken) {
        const res = await axios.get(`/api/v1/auth/authToken`);
        // console.log("auth token =", res.data);
        setToken(accessToken.data.accessToken);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    initToken();
  }, [initToken]);

  const data = {
    token: token,
    useAuth: AuthApi(),
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default DataProvider;
