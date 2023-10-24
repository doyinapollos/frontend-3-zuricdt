import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function NavBar({ onSearch }) {
  return (
    <nav className="hidden w-[100%] h-[80px] bg-green-700 lg:flex justify-center items-center ">
      <div className="w-[40%] text-[12px] lg:w-[80%] lg:text-[14px] h-full flex justify-between items-center ">
        <div className="w-[20%] h-full text-white font-bold flex justify-center items-center ">
          <p> @frontend - 3 </p>{" "}
        </div>{" "}
        <ul className="w-[60%] full flex justify-around items-center text-white ">
          <ii> Home </ii> <ii> About Me </ii> <ii> Portfolio </ii>{" "}
          <ii> Service </ii> <ii> Contact Me </ii> <ii> Pages </ii>{" "}
        </ul>{" "}
        <button className="w-[120px] h-[35px] rounded-[10px] bg-white text-green-800 flex justify-center items-center ">
          Download CV{" "}
        </button>{" "}
      </div>{" "}
      <div className="text-[12px] ml-[10px] lg:text-[14px] lg:ml-[0px] w-[20%] p-[10px] h-full flex justify-between items-center ">
        <div className="w-[50%] full flex justify-start items-center ">
          <Profile />
        </div>
        <LogoutButton />
      </div>{" "}
    </nav>
  );
}

export default NavBar;
