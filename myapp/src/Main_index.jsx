import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./Day 16/Card";
import Card2 from "./Day 16/Card2";
import Calorie_card from "./Day 17/Calorie_card";
import Board from "./Day 18/Board";
import Calorie_card1 from "./Day 18/Calorie_card1";
import App from "./Day 19/App";
import Calorie_card2 from "./Day 20/Calorie-card2";
import Calorie_Tracker from "./Day 21/Calorie_Tracker";
import Meme_gen from "./Day 22/Meme_gen";
import Customhooks from "./Day 23/Customhooks";
import Navbar from "./Day 24/Navbar";
import MyBootstrap from "./Day 25/MyBootstrap";
import { NavLink } from "react-router-dom";
import Form from "./Day 26/Form";
import Addtodo from "./Day 27/Addtodo";
import WeatherApi from "./Day 28/WeatherApi";
import WeatherForm from "./Day 29/WeatherForm";
import "./style.css";

const Ele = () => {
  return (
    <>
      <h1 id="heading">REACT THA</h1>
      <div className="nav_container">
        <NavLink to="/card">Day-16(A)</NavLink>
        <NavLink to="/card2">Day-16(B)</NavLink>
        <NavLink to="/Calorie_card">Day-17</NavLink>
        <NavLink to="/Board">Day-18</NavLink>
        <NavLink to="/Calorie_card1">Day-18(A)</NavLink>
        <NavLink to="/App">Day-19</NavLink>
        <NavLink to="/Calorie_card2">Day-20</NavLink>
        <NavLink to="/Calorie_Tracker">Day-21</NavLink>
        <NavLink to="/Meme_gen">Day-22</NavLink>
        <NavLink to="/Customhooks">Day-23</NavLink>
        <NavLink to="/Navbar">Day-24</NavLink>
        <NavLink to="/Mybootstrap">Day-25</NavLink>
        <NavLink to="/Form">Day-26</NavLink>
        <NavLink to="/Addtodo">Day-27</NavLink>
        <NavLink to="/WeatherApi">Day-28</NavLink>
        <NavLink to="/WeatherForm">Day-29</NavLink>
      </div>
    </>
  );
};

const Main_index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/card" component={Card} />
          <Route path="/card2" component={Card2} />
          <Route path="/Calorie_card" component={Calorie_card} />
          <Route path="/Board" component={Board} />
          <Route path="/Calorie_card1" component={Calorie_card1} />
          <Route path="/App" component={App} />
          <Route path="/Calorie_card2" component={Calorie_card2} />
          <Route path="/Calorie_Tracker" component={Calorie_Tracker} />
          <Route path="/Meme_gen" component={Meme_gen} />
          <Route path="/Customhooks" component={Customhooks} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/Mybootstrap" component={MyBootstrap} />
          <Route path="/Form" component={Form} />
          <Route path="/Addtodo" component={Addtodo} />
          <Route path="/WeatherApi" component={WeatherApi} />
          <Route path="/WeatherForm" component={WeatherForm} />
          <Route exact path="/" component={Ele} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main_index;
