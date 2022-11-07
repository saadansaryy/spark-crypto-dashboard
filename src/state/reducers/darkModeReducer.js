// Reducer function for updating 'darkMode' state value
const updateDarkMode = (state = false, action) => {
    if (action.type === "UPDATE_MODE") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default updateDarkMode;
  