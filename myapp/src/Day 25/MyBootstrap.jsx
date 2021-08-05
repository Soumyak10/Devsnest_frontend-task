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
import "bootstrap/dist/css/bootstrap.min.css";

const MyBootstrap = () => {
  return (
    <div>
      <Router>
        <div
          className="vh-100"
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          <Nav_ele />
          <Switch>
            <Logger>
              <div className="d-flex justify-content-center align-items-center flex-column h-75">
                <Route exact path="/dashboard" component={Dashboard}></Route>
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/about" component={About} />
                <Route exact path="/">
                  <Redirect to="/about" />
                </Route>
              </div>
            </Logger>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default MyBootstrap;
