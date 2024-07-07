import { createContext, useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import { showToast } from "../utils/ToastHelper";

interface AuthContextProps{
  signIn: null | ((arg0: Object) => Promise<void>);
  token: null | String;
}

export const AuthContext = createContext<AuthContextProps>({
  signIn: null,
  token: "",
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {

  const [token, setToken] = useState<string | null>(null);

  const signIn = async (formDict: Object) => {
    try {
      const response = await axiosInstance.post(
        "http://localhost:8080/auth/login",
        JSON.stringify(formDict),
      );

      showToast("success", "Login efetuado com sucesso!");
      setToken(response.data.token);
      axiosInstance.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.token}`;
      localStorage.setItem("@Auth:token", response.data.token);
      localStorage.setItem("@Auth:id", response.data.id)

    } catch (error) {
      showToast("error", "Aconteceu algum problema no login!");
    }
    console.log(localStorage.getItem("@Auth:token"));
  };

  return (
    <AuthContext.Provider
      value={{
        signIn: signIn,
        token: token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
