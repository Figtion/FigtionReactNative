import { useEffect, useContext, createContext } from "react";
import Router from "next/router";

import { useAPI } from "@/hooks/useAPI";
import authService from "@/services/auth.service";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const useLogin = () => {
  const loginApi = useAPI({
    url: "/users/login",
    method: "POST",
    shouldExecute: false,
  });
  const { setCurrentUser, setJWT } = useAuth();

  const login = ({ email, password }) => {
    loginApi.executeRequest({ email, password }).then((res) => {
      if (!!res) {
        Router.push("/");
      }
    });
  };

  useEffect(() => {
    if (loginApi.data) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user: loginApi.data.user,
          jwt: loginApi.data.token,
        })
      );
      setCurrentUser(loginApi.data.user);
      setJWT(loginApi.data.token);
    }
  }, [loginApi.data]);

  return {
    login,
  };
};

export const useRegister = () => {
  const registerApi = useAPI({
    url: "/users/register",
    method: "POST",
    shouldExecute: false,
  });

  const signup = ({
    firstName,
    lastName,
    phone,
    countryCode,
    email,
    password,
  }) => {
    registerApi
      .executeRequest({
        firstName,
        lastName,
        phone,
        countryCode,
        email,
        password,
      })
      .then((res) => {
        console.log("testing res", res);
        Router.push("/");
      });
  };

  useEffect(() => {
    console.log("data", registerApi.data);
  }, [registerApi.data]);

  return {
    signup,
  };
};

export const useLogout = () => {
  const logoutApi = useAPI({
    url: "/users/logout",
    method: "POST",
    shouldExecute: false,
  });

  const { setCurrentUser, setJWT } = useAuth();

  const logout = () => {
    setCurrentUser(null);
    setJWT(null);
    authService.logout();
    Router.push("/");

    logoutApi.executeRequest();
  };

  return { logout };
};
