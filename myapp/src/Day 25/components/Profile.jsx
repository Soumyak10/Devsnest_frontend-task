import { useContext } from "react";
import { Login } from "../Context";

const Profile = () => {
  // console.log(Login);
  const logger = useContext(Login);
  return (
    <>
      {logger.isAuthenticated ? (
        <h2>This is Profile </h2>
      ) : (
        <h2>This page is not accessbile</h2>
      )}
    </>
  );
};

export default Profile;
