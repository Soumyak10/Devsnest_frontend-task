import React, { useEffect, useState } from "react";
import { createContext } from "react";

const Login = createContext();

const LoggingContext = ({ children }) => {
  const [loading, setLoading] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(0);

  const logger = {
    isAuthenticated: isAuthenticated,
    loading: loading,

    login: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsAuthenticated(true);
      }, 1000);
    },

    logout: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsAuthenticated(false);
      }, 1000);
    },
  };

  return <Login.Provider value={logger}>{children}</Login.Provider>;
};

export default LoggingContext;
export { Login };
