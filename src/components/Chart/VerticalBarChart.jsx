import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function VerticalBarChart() {
  //Set of hooks implemented in Vertical Bar Chart
  const currencyVal = useSelector((state) => state.currency);
  const daysAgo = useSelector((state) => state.daysAgo);
  const cryptoCurrency = useSelector((state) => state.cryptoCurrency);
  const chartData1 = useSelector((state) => state.chartData1);
  const chartData2 = useSelector((state) => state.chartData2);
  const darkMode = useSelector((state) => state.darkMode);

  // To capitalize the first letter of the Crptocurrency label
  const capitalizeFirstLetter = (cryptoLabel) => {
    return cryptoLabel[0].toUpperCase() + cryptoLabel.slice(1);
  };

  //Render data on X-axis in accordance with the time-interval chosen - days, month, year
  const labels = [];

  let dateStyle = {
    weekday: "short",
  };
  if (daysAgo < 7) {
    dateStyle = {
      hour: "2-digit",
      weekday: "short",
    };
  } else if (daysAgo > 7) {
    dateStyle = {
      month: "short",
    };
  }

  //Formatting date into a string
  chartData1.forEach((element) => {
    let date = new Date(element[0]).toLocaleDateString("en-US", dateStyle);
    labels.push(date);
  });

  // First data set for first cryptocurrency selected
  let dataset1 = {
    label: "",
    backgroundColor: "transparent",
  };
  // Second data set for the second cryptocurrency selected
  let dataset2 = {
    label: "",
    backgroundColor: "transparent",
  };

  // Set dataset value only if first cryptocurrency is selected
  if (cryptoCurrency[0] !== undefined) {
    dataset1 = {
      label:
        cryptoCurrency[0] !== undefined
          ? capitalizeFirstLetter(cryptoCurrency[0])
          : "",
      data: chartData1 !== undefined ? chartData1.map((data) => data[1]) : "",
      backgroundColor:
        cryptoCurrency[0] !== undefined
          ? darkMode
            ? "rgba(148,163,184,0.3)"
            : "rgba(54, 162, 235, 0.2)"
          : "transparent",
      borderColor:
        cryptoCurrency[0] !== undefined
          ? darkMode
            ? "whitesmoke"
            : "blue"
          : "none",
      borderWidth: cryptoCurrency[0] !== undefined ? 1 : "none",
    };
  }

  // Set dataset2 value only if second cryptocurrency is selected
  if (cryptoCurrency[1] !== undefined) {
    dataset2 = {
      label:
        cryptoCurrency[1] !== undefined
          ? capitalizeFirstLetter(cryptoCurrency[1])
          : "",
      data: chartData2 !== undefined ? chartData2.map((data) => data[1]) : "",
      backgroundColor:
        cryptoCurrency[1] !== undefined
          ? darkMode
            ? "rgba(209,213,220,0.8)"
            : "rgba(255, 99, 132, 0.2)"
          : "transparent",
      borderColor:
        cryptoCurrency[1] !== undefined ? (darkMode ? "black" : "red") : "none",
      borderWidth: cryptoCurrency[1] !== undefined ? 1 : "none",
    };
  }

  // Tool Tip Customization
  const toolTipTitle = (toolTipItems) => {
    const titles = [];
    chartData1.forEach((element) => {
      let date = new Date(element[0]).toLocaleDateString("en-US", {
        dateStyle: "long",
      });
      titles.push(date);
    });
    return titles[toolTipItems[0].dataIndex];
  };

  // Chart Customization tools such as- backgroundColor, Chart alignment, Title, Labels on respective axes
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: darkMode ? "white" : "black",
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 9,
          boxHeight: 9,
          padding: 14,
          font: {
            size: 15,
            weight: "500",
          },
        },
      },
      tooltip: {
        yAlign: "bottom",
        xAlign: "center",
        callbacks: {
          title: toolTipTitle,
        },
      },
      title: {
        display: true,
        text: currencyVal.toUpperCase(),
        align: "start",
        color: darkMode ? "white" : "black",
        font: {
          size: 14,
          weight: "700",
        },
      },
    },

    //Implementation of Logarithmic Scale to fix exponential value of one datasets over other on comparison
    scales: {
      y: {
        type: "logarithmic",
        min: 0,
        ticks: {
          color: darkMode ? "white" : "black",
          font: {
            size: 11,
            weight: "700",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: darkMode ? "white" : "black",
          maxTicksLimit: 8,
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [dataset1, dataset2],
      }}
      options={options}
    />
  );
}

export default VerticalBarChart;
