import { createContext, useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";
import { User } from "../utils/User";
import { showToast } from "../utils/ToastHelper";

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextProps extends Credentials {
  signIn: null | ((arg0: Object) => Promise<void>);
  token: null | String;
}

export const AuthContext = createContext<AuthContextProps>({
  email: "",
  password: "",
  signIn: null,
  token: "",
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (
        storageUser &&
        storageToken &&
        storageUser !== "undefined" &&
        storageToken !== "undefined"
      ) {
        const parsedUser: User = JSON.parse(storageUser);
        setUser(parsedUser);
      }
    };
    loadingStoreData();
  }, []);

  const [token, setToken] = useState(null);

  const signIn = async (formDict: Object) => {
    try {
      const response = await axiosInstance.post(
        "http://localhost:8080/auth/login",
        JSON.stringify(formDict),
      );

      showToast("success", "Login efetuado com sucesso!");
      console.log(response.data);
      setUser(response.data);
      axiosInstance.defaults.headers.common["Authorization"] =
        `Bearer ${response.data.token}`;
      localStorage.setItem("@Auth:token", response.data.token);
      localStorage.setItem("@Auth:user", response.data.user);

      console.log(response);
    } catch (error) {
      showToast("error", "Aconteceu algum problema no login!");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email: user?.email,
        password: user?.password,
        signIn: signIn,
        token: token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
