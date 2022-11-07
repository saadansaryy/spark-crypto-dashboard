// Reducer function for updating 'chartData2' state value
const updateChartData2 = (state = [], action) => {
    if (action.type === "updateChartData2") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default updateChartData2;