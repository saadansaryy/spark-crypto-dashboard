import React from "react";
import DaysAgo from "./DaysAgo";
import CryptocurrencyDropdown from "./CryptocurrencyDropdown";
import ChartTypeDropdown from "./ChartTypeDropdown";
import Charts from "./Charts";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../state/index'

export default function MainChart() {

  //Dispatch--> To trigger a state change
  const dispatch = useDispatch();
  const {updateChartData1,updateChartData2} = bindActionCreators(actionCreators,dispatch);
  const currency = useSelector((state) => state.currency);
  const daysAgo = useSelector((state) => state.daysAgo);
  const cryptoCurrency = useSelector((state) => state.cryptoCurrency);

  useEffect(() => {

    //Request cryptocurrency data from API using fetch() method in JSON format
    const url = `https://api.coingecko.com/api/v3/coins/${cryptoCurrency[0]}/market_chart?vs_currency=${currency}&days=${daysAgo}&interval=daily`;
    fetch(url).then((data) => {
      data.json().then((resp) => {
        updateChartData1(resp.prices);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cryptoCurrency[0] !== undefined) {
      fetchData1(cryptoCurrency[0]);
    }
    if (cryptoCurrency[1] !== undefined) {
      fetchData2(cryptoCurrency[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daysAgo, currency,cryptoCurrency]);

  //Fetching Data from an API in JSON format for Chart '1'
  const fetchData1 = (crypto) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${daysAgo}&interval=daily`;
    fetch(url).then((data) => {
      data.json().then((resp) => {
        updateChartData1(resp.prices);
      });
    });
  };

   //Fetching Data from an API in JSON format for Chart '2'
  const fetchData2 = (crypto) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${daysAgo}&interval=daily`;
    fetch(url).then((data) => {
      data.json().then((resp) => {
        updateChartData2(resp.prices);
      });
    });
  };

  return (
    <BrowserRouter>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          {/* BUTTONS & DROPDOWNS */}
          <div className="flex flex-col h-36 xs:h-28 w-[17rem] xs:w-[22rem] xs2:w-[26rem] sm:w-[32rem] sm:self-center md:w-[40rem] xl:flex-row xl:h-24 xl:items-center xl:justify-end xl:w-[52rem] 2xl:w-[58rem]">
            {/* DaysAgo Buttons */}
            <div className="w-full md:w-1/2 my-3 px-2 self-center xl:my-0">
              <DaysAgo />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-col xs2:flex-row w-full px-2 xs2:px-0 xs2:justify-center xl:justify-end xl:pr-2">
              {/* Cryptocurrency Dropdown */}
              <div className="self-end xs2:mr-2">
                <CryptocurrencyDropdown />
              </div>
              {/* ChartType Dropdown */}
              <div className="z-10 self-end my-1 xs2:my-0">
                <ChartTypeDropdown />
              </div>
            </div>
          </div>
          {/*CHARTS COMPONENTS */}
          <div className="flex justify-center">
            <Charts />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
