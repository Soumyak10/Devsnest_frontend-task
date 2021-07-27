import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Nav_ele from "./components/Nav_ele";
import Profile from "./components/Profile";
import Logger from "./Context";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container-24">
      <Router>
        <Nav_ele />
        <Switch>
          <Logger>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
          </Logger>
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
