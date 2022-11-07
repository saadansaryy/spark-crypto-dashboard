// Reducer function for updating 'daysAgo' state value
const daysAgoReducer = (state = "7", action) => {
  if (action.type === "updateDaysAgo") {
    console.log("hurraayyy")
    return action.payload;
  } else {
    return state;
  }
};

export default daysAgoReducer;
