// Reducer function for updating 'currency' state value
const updateCurrency = (state = "usd", action) => {
  if (action.type === "updateCurrency") {
    return action.payload;
  } else {
    return state;
  }
};

export default updateCurrency;
