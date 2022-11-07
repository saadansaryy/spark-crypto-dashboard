// action creator function to dispatch an action for updating currency value
export const updateCurrency = (currencyValue) => {
  return (dispatch) => {
    dispatch({
      type: "updateCurrency",
      payload: currencyValue.target.value,
    });
  };
};

// action creator function to dispatch an action for filtering market cap list 
export const filterSearch = (searchValue) => {
  return (dispatch) => {
    dispatch({
      type: "filter",
      payload: searchValue.target.value,
    });
  };
};

// action creator function to dispatch an action for updating time frame value
export const updateDaysAgo = (daysAgoVal) => {
  return (dispatch) => {
    dispatch({
      type: "updateDaysAgo",
      payload: daysAgoVal,
    });
  };
};

// action creator function to dispatch an action for updating cryptocurrency value
export const updateCrypto = (list, item) => {
  return (dispatch) => {
    dispatch({
      type: "updateCrypto",
      payload: { list, item },
    });
  };
};

// action creator function to dispatch an action for removing cryptocurrency value
export const removeCrypto = (list, item) => {
  return (dispatch) => {
    dispatch({
      type: "removeCrypto",
      payload: { list, item },
    });
  };
};

// action creator function to dispatch an action for updating first chart data value
export const updateChartData1 = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateChartData1",
      payload: data,
    });
  };
};

// action creator function to dispatch an action for updating second chart data value
export const updateChartData2 = (data) => {
  return (dispatch) => {
    dispatch({
      type: "updateChartData2",
      payload: data,
    });
  };
};

// action creator function to dispatch an action for switching to dark/light mode
export const updateDarkMode = (modeVal) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_MODE",
      payload: modeVal,
    });
  };
};

