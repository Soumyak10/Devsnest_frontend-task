import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
          </Logger>
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
