interface addNoteAction {
  type: string;
  payload: string;
}

interface deleteNoteAction {
  type: string;
  payload: number;
}

type ActionType = addNoteAction | deleteNoteAction;

const noteReducer = (state = [], action: ActionType) => {
  switch (action.type) {
    case "Add_Note":
      return [...state, action.payload];
    case "Delete_Note":
      return state.filter((note, index) => index != action.payload);
    default:
      return state;
  }
};

export default noteReducer;
