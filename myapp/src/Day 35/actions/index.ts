export interface User {
  username: string;
  profilePicture: string;
}

const updateUser = () => {
  return (dispatch: any) => {
    fetch("/data/User.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "Update_User",
          payload: data,
        });
      });
  };
};

export { updateUser };
