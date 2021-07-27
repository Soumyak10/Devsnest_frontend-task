import React, { useContext } from "react";
import { Login } from "../Context";

const Home = () => {
  const logger = useContext(Login);

  return (
    <>
      <h2>This is Home page</h2>
      <h2>If not logged in can't access profile and dashboard</h2>
      {logger.loading ? (
        <h4>Loading..</h4>
      ) : !logger.isAuthenticated ? (
        <button onClick={logger.login}>Login</button>
      ) : (
        <button onClick={logger.logout}>Logout</button>
      )}
    </>
  );
};

export default Home;
