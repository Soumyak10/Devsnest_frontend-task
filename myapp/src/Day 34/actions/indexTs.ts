//day-34 counter app
const IncCounter = (num: number) => {
  return {
    type: "Inc_Counter",
    payload: num,
  };
};

const DecCounter = (num: number) => {
  return {
    type: "Dec_Counter",
    payload: num,
  };
};

//day34 note taking app

const addNote = (name: string) => {
  return {
    type: "Add_Note",
    payload: name,
  };
};

const deleteNote = (id: number) => {
  return {
    type: "Delete_Note",
    payload: id,
  };
};

export { IncCounter, DecCounter, addNote, deleteNote };
