import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Logo3 from "../../assets/ethereum.png";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";

function NavBar() {
  //Dispatch--> To trigger a state change
  const dispatch = useDispatch();
  const { updateDarkMode } = bindActionCreators(actionCreators, dispatch);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    //Toggling between Dark and Light Mode
    <div className={darkMode ? "dark" : ""}>
      <div className="sticky top-0 z-50 first-line:">
        <ul className="relative py-2 bg-gray-100 shadow-lg dark:shadow-gray-600 dark:shadow-lg flex justify-between items-center dark:bg-gray-900">
          <li className="dark:text-black">
            {/* Logo of the Cryptocurrency Dashboard */}
            <img
              src={Logo3}
              style={{ height: "3rem" }}
              alt=""
              loading="lazy"
              className="dark:text-white relative mx-auto shadow-2xl shadow-blue-800 dark:shadow-white rounded-full"
            />

            {/* Name of the Cryptocurrency Dashboard */}
            <span className=" italic text-blue-500 dark:text-white font-extrabold px-8">
              SPARK
            </span>
          </li>

          {/* Toggle button to switch between light and dark mode */}
          <li
            className="my-5 mx-20 dark:text-white border-2 border-black dark:border-white h-10 w-10 flex justify-center items-center rounded-lg shadow-inner shadow-slate-900 dark:shadow-white cursor-pointer"
            onClick={() => updateDarkMode(!darkMode)}
          >
            <BsFillMoonStarsFill className="text-xl animate-pulse dark:animate-bounce" />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
