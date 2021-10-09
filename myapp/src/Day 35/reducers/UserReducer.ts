import { User } from "../actions/index";

const initialUser = {
  username: "",
  profilePicture: "",
};

export interface actionType {
  type: "Update_User";
  payload: User;
}

const userReducer = (state: User = initialUser, action: any) => {
  switch (action.type) {
    case "Update_User":
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
