import { createContext, ReactNode, useContext, useState } from "react";
import { History } from "history";
import api from "../../services";
import toast from "react-hot-toast";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface UserRegisterData {
  name: string;
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: UserData, history: History) => void;
  logOut: (history: History) => void;
  singUp: (userData: UserRegisterData, history: History) => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("accessToken") || ""
  );

  const singUp = (userData: UserRegisterData, history: History) => {
    api
      .post("/register", userData)
      .then(() => {
        history.push("/");
      })
      .then(() => toast.success("Sua conta foi criada com sucesso!"))
      .catch(() =>
        toast.error("Erro ao criar sua conta, tente novamente com outro email!")
      );
  };

  const signIn = (userData: UserData, history: History) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        setAuthToken(response.data.accessToken);
        history.push("/dashboard");
        toast.success("Bem vindo novamente!");
      })
      .catch(() => toast.error("Email ou senha incorreta!"));
  };

  const logOut = (history: History) => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
    toast.success("Até logo!");
  };

  return (
    <AuthContext.Provider value={{ authToken, logOut, singUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
