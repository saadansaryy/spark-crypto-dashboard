import React from "react";
import Multiselect from "multiselect-react-dropdown";
import "./CryptoDropdown.css"; // External CSS File for CryptoDropDown Styling
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const CryptocurrencyDropdown = () => {
  // dispatch() is the method used to dispatch actions and trigger state changes to the store
  const dispatch = useDispatch();
  // bindActionCreators - Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly
  // updateCrypto - action creator function to dispatch an action for updating selected cryptocurrency in dropdown to the store
  // removeCrypto - action creator function to dispatch an action for removing deselected cryptocurrency in dropdown to the store
  const { updateCrypto, removeCrypto } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // State for switching between dark and light mode
  const darkMode = useSelector((state) => state.darkMode);
  
  // To store background colors and text colors for Multiselect dropdown which will change according to the selected mode (Dark/Light)
  const dropdownMenuBgColor = darkMode ? "rgb(156 163 175)" : "#F9FAFB";
  const dropdownOptionBoxBgColor = darkMode ? "rgb(156 163 175)" : "white";
  const dropdownOptionTextColor = darkMode ? "rgb(249,250,251)" : "grey";

  // State for storing the top cryptocurrencies data
  const [cryptoData, setCryptoData] = useState([]);

  // To capitalize the first letter of the Cryptocurrency in the list
  const capitalizeFirstLetter = (cryptoName) => {
    return cryptoName[0].toUpperCase() + cryptoName.slice(1);
  };

  // URL link to fetch data
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  // Function to fetch top cryptocurrencies data with the help of axios
  const fetchTopCoins = () => {
    axios
      .get(url, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => console.log(error));
  };

  // To Call the FetchTopCoins() every time this component re-renders
  useEffect(() => {
    fetchTopCoins();
  }, []);

  // To store top 10 crypto currencies in the list
  const cryptoList = cryptoData
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, 15)
    .map((coin) => capitalizeFirstLetter(coin.id));

  return (
    // React Multiselect Dropdown
    <Multiselect
      id="crypto_css"
      isObject={false}
      options={cryptoList}
      onSelect={updateCrypto}
      onRemove={removeCrypto}
      showCheckbox={true}
      showArrow={true}
      selectedValues={[cryptoList[0]]}
      selectionLimit={2}
      avoidHighlightFirstOption={true}
      onSearch={false}
      className="shadow-sm shadow-slate-400 rounded-lg z-20"
      style={{
        // Styling for React MultiSelect Dropdown

        // Selected Values Styling
        chips: {
          borderBottom: "3px solid rgb(31 41 55)",
          marginBottom: "0px",
          borderRadius: "0.25rem",
          background: "rgb(75 85 99)",
          color: "white",
          fontWeight: "500",
        },

        // Multiselect Container Styling
        multiselectContainer: {
          color: "black",
        },

        // Search Bar Styling
        searchBox: {
          border: "1px solid #94a3b8",
          borderRadius: "8px",
          background: `${dropdownMenuBgColor}`,
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          color: "black",
        },

        // Option Styling
        option: {
          color: `${dropdownOptionTextColor}`,
          fontSize: "1rem",
          fontWeight: "500",
        },

        // Options Container Styling
        optionContainer: {
          border: "none",
          backgroundColor: `${dropdownOptionBoxBgColor}`,
          height: "13.5rem",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
        },
      }}
    />
  );
};

export default CryptocurrencyDropdown;
