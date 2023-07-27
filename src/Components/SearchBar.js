import React, { useContext, useState } from "react";
import { resourcedata } from "../App";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [enteredCity, setEnteredCity] = useState("");
  const { setUnits, units, city, setCity } = useContext(resourcedata);
  function citySearch() {
    setCity(enteredCity);
  }
  return (
    <div className="pt-3">
      <div className="flex justify-center items-center w-[100%]">
        <input
          placeholder="Search city"
          className="p-2 border outline-stone-800 focus:outline-none rounded-md"
          onChange={(e) => setEnteredCity(e.target.value)}
        />
        <button className="ml-1" onClick={citySearch}>
          <FaSearch />
        </button>
        <button
          type="button"
          className="w-5"
          onClick={() => setUnits("metric")}
        >
          °C
        </button>
        <button
          type="button"
          className="w-5"
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
