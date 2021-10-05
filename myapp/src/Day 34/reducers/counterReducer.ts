interface ActionType {
  type: string;
  payload: number;
}

const counterReducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case "Inc_Counter":
      return state + action.payload;
    case "Dec_Counter":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
