import React from "react";
import menuIcon2 from "../assets/svgs/menu-icon2.svg";
import LogoutButton from "./LogoutButton";

function NavBarMobile() {
  const mobileMenu = document.querySelector(".mobileMenu");

  const handleMobileMenu = () => {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  };

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center font-roboto bg-green-600 text-white font-bold lg:hidden ">
      <div className="w-[90%] h-[60px] flex justify-between items-center bg-nvriLagBlue ">
        <p className="font-bold text-white ">@frontend-3</p>
        <button className="w-[120px] h-[25px] rounded-[10px] bg-white text-green-800 flex justify-center items-center ">
          Download CV
        </button>
        <img
          onClick={handleMobileMenu}
          className="cursor-pointer "
          src={menuIcon2}
          alt=""
        />
      </div>{" "}
      <div className="mobileMenu w-[250px] h-[300px] shadow-xl p-6 bg-green-600 font-bold absolute top-[60px] right-[0px] ">
        <ul className="w-[100%] h-[90%] shadow-xl p-4 flex flex-col justify-around items-center text-white ">
          <ii>Home</ii>
          <ii>About Me</ii>
          <ii>Portfolio</ii>
          <ii>Service</ii>
          <ii>Contact Me</ii>
          <ii>Pages</ii>
        </ul>
        <div className="text-[12px] ml-[10px] lg:text-[14px] lg:ml-[0px] w-[100%] h-[10%] flex justify-center items-center ">
          <LogoutButton />
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default NavBarMobile;
