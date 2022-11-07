// Reducer function for updating 'chartData1' state value
const updateChartData1 = (state = [], action) => {
    if (action.type === "updateChartData1") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default updateChartData1;