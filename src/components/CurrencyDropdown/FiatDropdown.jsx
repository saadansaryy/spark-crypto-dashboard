import React from 'react'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../../state/index";


export default function FiatDropdown() {
   //Dispatch--> To trigger a state change
  const dispatch = useDispatch();
  const {updateCurrency} = bindActionCreators(actionCreators,dispatch)

  return (
    //Currency selector dropdown
      <select className='dark:bg-gray-700 dark:text-gray-50 w-full h-full text-base xs:text-[1.2rem] px-2 mr-1 cursor-pointer rounded-md font-semibold font-mono focus:text-blue-500 focus:outline-none' onChange={updateCurrency}>
        <option value="usd" className='text-black dark:text-gray-50'>USD</option>
        <option value="eur" className='text-black dark:text-gray-50'>EUR</option>
        <option value="inr" className='text-black dark:text-gray-50'>INR</option>
      </select>
  )
}
