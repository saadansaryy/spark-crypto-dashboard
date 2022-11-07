import React, { useState, useEffect } from "react";
import axios from "axios";
import numeral from "numeral";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";

// A short registration format to quickly register everything related to chart.js
Chart.register(...registerables);

const Portfolio = () => {
  // A global variable that switches value based on user input
  const currencyVal = useSelector((state) => state.currency);

  const darkMode = useSelector((state) => state.darkMode);

  // API to fetch required data from Coingecko website
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyVal}&order=market_cap_desc&per_page=250&page=1&sparkline=false`;

  // A local variable to displa the user-chosen fiat currency throughout the component 'Portfolio'
  let currencyType;
  if (currencyVal === "usd") {
    currencyType = "$";
  } else if (currencyVal === "inr") {
    currencyType = "₹";
  } else if (currencyVal === "eur") {
    currencyType = "\u20AC";
  }

  const [chartData, setChartData] = useState([]);

  // Apply get method on fetched API
  // Receive response and use it to chart the data on the Pie-Chart representation
  const fetchTopCoins = () => {
    axios
      .get(url)
      .then((response) => {
        setChartData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTopCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyVal]);

  // Copy data from the state to a new array
  // Sort it by market_cap in descending order
  // Pick top 3 results using slice
  // And then map
  const majorValues = chartData
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 3)
    .map((coin) => coin.market_cap);

  // Sum up the total marketcap of top 3 coins
  let sum = 0;
  majorValues.forEach((element) => {
    sum += element;
  });

  const data = {
    // copy data from the state to a new array,
    // sort it by market_cap in descending order,
    // take top 3 results using slice
    // and then map
    labels: chartData
      .sort((a, b) => b.market_cap - a.market_cap)
      .slice(0, 3)
      .map((coin) => coin.name),
    datasets: [
      {
        // Individual proportions of top 3 coins
        data: chartData
          .sort((a, b) => b.market_cap - a.market_cap)
          .slice(0, 3)
          .map((coin) => coin.market_cap),

        // Background colors of the Pie-Chart representation
        backgroundColor: [
          "rgb(248, 131, 121)",
          "rgb(54, 162, 235)",
          "rgb(159, 226, 191)",
        ],
        borderWidth: 2,
      },
    ],
  };

  // Various customisable properties of the Pie-Chart representation
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
    },
    plugins: {
      // CSS properties for legend
      legend: {
        position: "right",
        display: true,

        labels: {
          usePointStyle: true,
          color: darkMode ? "white" : "black",
          font: {
            size: 12,
          },
        },
      },

      // CSS properties for datalabels
      datalabels: {
        display: true,

        align: "center",
        labels: {
          title: {
            font: {
              weight: "bold",
              size: 11,
            },
          },
        },
        formatter: (value) => numeral(value / 100000000).format(`E0,0`),
      },
    },
  };

  return (
    // Main div: Portfolio
    <div className="px-4">
      {/* Upper Div */}
      <div className="flex place-content-between pt-2 xl:pb-2 xl:pt-4">
        {/* Text: Portfolio */}
        <h1 className="dark:text-gray-50 font-bold font-mono text-zinc-700 text-lg xl:text-2xl ">
          Portfolio
        </h1>
        <h1>
          {/* Text: Total Value */}
          <span className="text-sm font-medium text-slate-400 mx-1">
            Total value :
          </span>
          {/* Text: Total Amount */}
          <span className="font-medium dark:text-gray-100">
            {currencyType} {Math.round(sum / 100000000)}
          </span>
        </h1>
      </div>
      {/* Lower Div */}
      <div className="pt-0 w-52 h-36 xl:w-96 xl:h-44 mx-auto">
        {/* Pie-Chart representation */}
        <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
    </div>
  );
};

export default Portfolio;
