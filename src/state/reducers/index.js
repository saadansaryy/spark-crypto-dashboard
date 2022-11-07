import { combineReducers } from "redux";
import currencyReducer from "./currencyReducer";
import searchReducer from "./searchReducer";
import daysAgoReducer from "./daysAgoReducer";
import updateCrypto from "./cryptoReducer";
import updateChartData1 from "./chartData1Reducer";
import updateChartData2 from "./chartData2Reducer";
import updateDarkMode from "./darkModeReducer";

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore
const reducers = combineReducers({
  currency: currencyReducer,
  search: searchReducer,
  daysAgo: daysAgoReducer,
  cryptoCurrency: updateCrypto,
  chartData1: updateChartData1,
  chartData2: updateChartData2,
  darkMode: updateDarkMode
});

export default reducers;
