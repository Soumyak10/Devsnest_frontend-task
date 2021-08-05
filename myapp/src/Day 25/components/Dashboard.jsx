import { useContext } from "react";
import { Login } from "../Context";

const Dashboard = () => {
  const logger = useContext(Login);
  return (
    <>
      {logger.isAuthenticated ? (
        <h2>This is Dashboard </h2>
      ) : (
        <h2>This page is not accessbile</h2>
      )}
    </>
  );
};

export default Dashboard;
