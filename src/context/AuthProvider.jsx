import { createContext, useState } from "react";

export const AuthContext = createContext({
  loggedIn: false,
  author: null,
  id: null,
  token: null,
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    author: "",
    id: "",
    token: "",
  });

  const login = (author, id, token) => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: true,
      author,
      id,
      token,
    }));
  };

  const logout = (author, id, token) => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: false,
      author,
      id,
      token,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
