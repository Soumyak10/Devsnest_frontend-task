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

export { changeData, changePassword, addToDo, deleteToDo, toggleToDo };
