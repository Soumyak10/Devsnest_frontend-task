import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { changeData, changePassword } from "../actions/index";

const Form = () => {
  const showData = useSelector((state) => state.showData);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-26">
        <h1>Please enter follwoing details!</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => dispatch(changeData(e.target.value))}
          />
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => dispatch(changePassword(e.target.value))}
          />
        </form>
        <h2>User Data:-</h2>
        <div className="data">
          <h4>Username: {showData.username}</h4>
          <h4>E-mail: {showData.email}</h4>
        </div>
      </div>
    </>
  );
};

export default Form;
