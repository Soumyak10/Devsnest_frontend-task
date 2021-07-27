import { NavLink } from "react-router-dom";

const Nav_ele = () => {
  return (
    <div className="nav_ele">
      <NavLink activeClassName="active_class" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active_class" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink activeClassName="active_class" to="/home">
        Home
      </NavLink>
      <NavLink activeClassName="active_class" to="/profile">
        Profile
      </NavLink>
    </div>
  );
};

export default Nav_ele;
