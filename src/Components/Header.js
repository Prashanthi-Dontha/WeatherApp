import React from "react";

function Header() {
  return (
    <div className=" flex flex-row justify-start items-center min-h-[65px] max-h-[75px] font-poppinsBold shadow-md bg-teal-100">
      <img
        src="../assets/images/weather-symbol.svg"
        alt="logo"
        className=" min-w-[65px] max-w-[75px] pt-3 ml-3"
      />

      <h1 className=" drop-shadow-md text-sky-700">My Weather App</h1>
    </div>
  );
}

export default Header;
