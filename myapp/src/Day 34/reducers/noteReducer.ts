interface addNoteAction {
  type: string;
  payload: string;
}

interface deleteNoteAction {
  type: string;
  payload: number;
}

type ActionType = addNoteAction | deleteNoteAction;

const noteReducer = (state: any = [], action: ActionType) => {
  switch (action.type) {
    case "Add_Note":
      return [...state, action.payload];
    case "Delete_Note":
      return state.filter(
        (_: string, index: number) => index != action.payload
      );
    default:
      return state;
  }
};

export default noteReducer;
