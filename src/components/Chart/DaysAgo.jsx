import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const DaysAgo = () => {
  // dispatch() is the method used to dispatch actions and trigger state changes to the store
  const dispatch = useDispatch();
  // bindActionCreators - Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly
  //UpdateDaysAgo - action creator function to dispatch an action for updating time interval to the store
  const { updateDaysAgo } = bindActionCreators(actionCreators, dispatch);

  return (
    // TimeFrame Buttons
    <div className="flex justify-center space-x-3 xs:space-x-4 xs2:space-x-6 lg:space-x-4">
      {/* Button to access Chart Data 1 Day ago */}
      <button
        className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
        onClick={() => updateDaysAgo("1")}
      >
        1D
      </button>
      {/* Button to access Chart Data 1 Week ago */}
      <button
        className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
        onClick={() => updateDaysAgo("7")}
      >
        1W
      </button>
      {/* Button to access Chart Data 1 Month ago */}
      <button
        className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
        onClick={() => updateDaysAgo("30")}
      >
        1M
      </button>
      {/* Button to access Chart Data 6 Months ago */}
      <button
        className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
        onClick={() => updateDaysAgo("180")}
      >
        6M
      </button>
      {/* Button to access Chart Data 1 Year ago */}
      <button
        className="dark:bg-gray-400 dark:text-gray-50 bg-gray-50 h-10 w-14 focus:border focus:border-blue-500 focus:bg-slate-100 focus:text-blue-500 dark:focus:border-white dark:focus:bg-slate-700 font-bold font-mono px-3 py-1 rounded-lg shadow-sm hover:border hover:border-blue-500 hover:bg-slate-100 hover:text-blue-500 dark:hover:border-white dark:hover:bg-slate-700"
        onClick={() => updateDaysAgo("360")}
      >
        1Y
      </button>
    </div>
  );
};

export default DaysAgo;
