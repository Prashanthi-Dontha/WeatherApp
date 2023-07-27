import React, { useContext, useState } from "react";
import Moment from "react-moment";

import { iconUrl } from "../Resources/WeatherData";
import { resourcedata } from "../App";

function WeatherCard() {
  const [enteredCity, setEnteredCity] = useState("");
  const { weather, setUnits, units, city, setCity } = useContext(resourcedata);
  const tempUnits = units === "metric" ? "°C" : "°F";
  const windUnits = units === "metric" ? "m/s" : "mi/h";

  const start_rise = weather.sunrise;
  var sunrise_hrs = new Date(start_rise).getHours() - 12;
  var sunrise_mins = new Date(start_rise).getMinutes();

  var time_sunrise =
    (sunrise_hrs.toString().length < 2
      ? sunrise_hrs.toString().padStart(2, "0")
      : sunrise_hrs) +
    ":" +
    (sunrise_mins.toString().length < 2
      ? sunrise_mins.toString().padStart(2, "0")
      : sunrise_mins);

  const start_set = weather.sunset;
  var sunset_hrs = new Date(start_set).getHours() - 12;
  var sunset_mins = new Date(start_set).getMinutes();

  var time_sunset =
    (sunset_hrs.toString().length < 2
      ? sunset_hrs.toString().padStart(2, "0")
      : sunset_hrs) +
    ":" +
    (sunset_mins.toString().length < 2
      ? sunset_mins.toString().padStart(2, "0")
      : sunset_mins);

  return (
    <div className="flex flex-col justify-center items-center pt-2">
      <br />
      <div className="relative flex flex-col content-center 2xs:justify-center md:justify-center items-center pt-2 pb-2 3xs:min-w-[280px] 3xs:max-w-[300px] 3xs:min-h-[380px] 2xs:min-h-[70vh] 2xs:min-w-[90vw] md:min-h-[60vh] md:min-w-[60vw] xl:min-h-[40vh] 2xl:max-h-[50vh] 2xl:min-h-[40vh] 2xl:w-[40vw] xl:max-h-[50vh] xl:w-[40vw] lg:min-w-[40vw] lg:min-h-[30vh] lg:max-h-[60vh] rounded-md overflow-hidden shadow-xl bg-white">
        {weather ? (
          <>
            <h1 className="font-poppinsBold text-lg 3xs: text-blue-900">
              {weather.name}, {weather.country}
            </h1>

            <p className="font-poppinsRegular text-xs 3xs: text-blue-950">
              {weather.country === "IN" ? <Moment format="LLLL"></Moment> : ""}
            </p>

            <img
              src={iconUrl(weather.icon)}
              alt="icon"
              className="rounded-full drop-shadow-md "
            />

            <h1 className="font-poppinsBold text-3xl 3xs: text-indigo-900">
              {Math.round(weather.temp)} {tempUnits}
            </h1>

            <h1 className="font-poppinsRegular text-sm 3xs: text-blue-950">
              {weather.description}
            </h1>

            <div className="w-[100%] grid grid-cols-2 grid-rows-3 3xs:absolute 3xs:bottom-0 2xs:relative 2xs:mt-9 text-center pb-1  ">
              <div className="shadow p-1 ">
                <p className="font-poppinsRegular text-xs flex justify-center items-center leading-6 3xs: text-blue-950">
                  Sunrise
                  <img
                    src="../assets/images/005-sun.png"
                    alt="sun"
                    className="ml-1 w-[18px]"
                  />
                </p>
                <p className="font-poppinsBold text-xs 3xs: text-blue-950">
                  {time_sunrise}
                </p>
              </div>
              <div className="shadow p-1">
                <p className="font-poppinsRegular text-xs flex justify-center items-center leading-6 3xs: text-blue-950">
                  Sunset
                  <img
                    src="../assets/images/002-cloudy.png"
                    alt="sunset"
                    className="ml-1 w-[18px]"
                  />
                </p>
                <p className="font-poppinsBold text-xs 3xs: text-blue-950">
                  {time_sunset}
                </p>
              </div>
              <div className="shadow p-1">
                <p className="font-poppinsRegular text-xs flex justify-center items-center leading-6 3xs: text-blue-950">
                  Feels like
                  <img
                    src="../assets/images/008-thermometer.png"
                    alt="feels-like"
                    className="ml-1 w-[18px]"
                  />
                </p>
                <p className="font-poppinsBold text-xs 3xs: text-blue-950">
                  {Math.round(weather.feels_like)} {tempUnits}
                </p>
              </div>
              <div className="shadow p-1">
                <p className="font-poppinsRegular text-xs flex justify-center items-center leading-6 3xs: text-blue-950">
                  Humidity
                  <img
                    src="../assets/images/007-humidity.png"
                    alt="humidity"
                    className="ml-1 w-[18px]"
                  />
                </p>
                <p className="font-poppinsBold text-xs 3xs: text-blue-950">
                  {weather.humidity}%
                </p>
              </div>
              <div className="shadow p-1">
                <p className="font-poppinsRegular text-xs flex justify-center items-center leading-6 3xs: text-blue-950">
                  Wind
                  <img
                    src="../assets/images/001-wind.png"
                    alt="wind"
                    className="ml-1 w-[18px]"
                  />
                </p>
                <p className="font-poppinsBold text-xs 3xs: text-blue-950">
                  {weather.speed} {windUnits}
                </p>
              </div>
              <div className="shadow p-1">
                <p className="font-poppinsRegular text-xs flex justify-center items-center leading-6 3xs: text-blue-950">
                  Pressure
                  <img
                    src="../assets/images/009-barometer.png"
                    alt="pressure"
                    className="ml-1 w-[18px]"
                  />
                </p>
                <p className="font-poppinsBold text-xs 3xs: text-blue-950">
                  {(weather.pressure * 0.1).toFixed(1)} kPa
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="flex items-center justify-center">Data not found</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
