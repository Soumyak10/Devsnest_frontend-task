//day-26
const changeData = (value) => {
  return {
    type: "change-data",
    payload: value,
  };
};

const changePassword = (value) => {
  return {
    type: "change-email",
    payload: value,
  };
};

//day-27
const addToDo = (todo_item) => {
  return {
    type: "add-todo",
    payload: todo_item,
  };
};

const deleteToDo = (id) => {
  return {
    type: "delete-todo",
    payload: id,
  };
};

const toggleToDo = (id) => {
  return {
    type: "toggle-todo",
    payload: id,
  };
};

//day-28
const updatePlace = (place) => {
  return {
    type: "update-place",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=2a05443c22e34fd4a4d141953210808&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "update-place-data",
          payload: data,
        });
      });
  };
};

export {
  changeData,
  changePassword,
  addToDo,
  deleteToDo,
  toggleToDo,
  updatePlace,
  updatePlaceData,
};
