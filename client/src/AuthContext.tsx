import { createContext, useContext, useState, useEffect,type ReactNode } from "react";
// import { ReactNode } from "react";

interface AuthContextType {
  isLogin: boolean;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLogin(!!user);
  }, []);

  const login = (user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
