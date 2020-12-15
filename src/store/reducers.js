const initialState = {};

const reducer = (state = initialState, action = null) => {
  if (action.type === "SET_USER_LIST") {
    return { ...state, users: action.payload };
  } else if (action.type === "SET_USER_DETAILS") {
    return { ...state, userDetails: action.payload };
  } else {
    return state;
  }
};

export default reducer;
