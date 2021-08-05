import { NavLink } from "react-router-dom";

const Nav_ele = () => {
  return (
    <div
      className="d-flex justify-content-around fs-3 "
      style={{ background: "lavenderblush" }}
    >
      <NavLink to="/about" className="p-2 text-decoration-none p-3">
        About
      </NavLink>
      <NavLink to="/dashboard" className="p-2 text-decoration-none p-3">
        Dashboard
      </NavLink>
      <NavLink to="/home" className="p-2 text-decoration-none p-3">
        Home
      </NavLink>
      <NavLink to="/profile" className="p-2 text-decoration-none p-3">
        Profile
      </NavLink>
    </div>
  );
};

export default Nav_ele;
