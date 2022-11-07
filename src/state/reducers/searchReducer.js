// Reducer function for updating 'search' state value
const reducer = (state = "", action) => {
  if (action.type === "filter") {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;
