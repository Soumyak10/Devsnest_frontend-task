import "../style.css";
import { useSelector } from "react-redux";
import { PostType } from "../Ig";

const Navbar = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <nav className="navbar navbar-expand-lg card">
      <div className="container">
        <div className="navbar-brand">
          <img
            src="/image/logo.png"
            style={{ width: "40%", height: "40%", margin: "0px 0px" }}
            alt="insta_logo"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="search">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="bi bi-house-door-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="bi bi-chat"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="bi bi-compass"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="bi bi-heart"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img src={user ? user.profilePicture : ""} alt="profile" />
                {/* <i className="bi bi-person-circle"></i> */}
                {/* <img src={user ? user.profilePicture : ""} alt="profile" /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
