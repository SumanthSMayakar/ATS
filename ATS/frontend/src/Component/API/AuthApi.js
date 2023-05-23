import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";

function AuthApi(token) {
  // login status
  const [isLogged, setIsLogged] = useState(false);

  // roles
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  // user
  const [user, setUser] = useState(false);

  const initData = useCallback(() => {
    const getUser = async () => {
      const token = localStorage.getItem("accessToken") || false;
      console.log("token =", token);
      if (token) {
        const res = await axios.get(`/api/v1/auth/currentUser`, {
          headers: {
            Authorization: token,
          },
        });
        console.log("current user =", res.data);
        setUser(res.data.user);
        setIsLogged(true);
        if (res.data.user.role === "superadmin") {
          setIsAdmin(true);
        } else if (res.data.user.role === "user") {
          setIsUser(true);
        }
      }
    };

    getUser();
  }, [isAdmin, isLogged, isUser, user]);

  useEffect(() => {
    initData();
  }, []);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    isUser: [isUser, setIsUser],

    user: [user, setUser] // shows the new user details in component context.provider
  };
}

export default AuthApi;
