import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import WeatherCard from "./Components/WeatherCard";
// import getWeatherInfo from "./Resources/WeatherInfo";
import { getWeatherData, getWeatherData1 } from "./Resources/WeatherData";
import SearchBar from "./Components/SearchBar";

export const resourcedata = createContext(null);
function App() {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [userNote, setUserNote] = useState("");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    //Get user's current location ie., geolocation latitude and longitude
    const geoLocationAPI = navigator.geolocation;
    const getUserLocation = () => {
      if (geoLocationAPI) {
        geoLocationAPI.getCurrentPosition(showPosition, showError);
      } else {
        const msg = "Geolocation is not supported by this browser";
        setUserNote(msg);
      }
    };
    const showPosition = (position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    };
    const showError = (error) => {
      var errormsg;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errormsg = "User denied the request for Geolocation.";
          setUserNote(errormsg);
          break;
        case error.POSITION_UNAVAILABLE:
          errormsg = "Location information is unavailable.";
          setUserNote(errormsg);

          break;
        case error.TIMEOUT:
          errormsg = "The request to get user location timed out.";
          setUserNote(errormsg);

          break;
        case error.UNKNOWN_ERROR:
          errormsg = "An unknown error occurred.";
          setUserNote(errormsg);

          break;
        default:
          break;
      }
    };
    getUserLocation();
    if (lat && lon && city === "") {
      const fetchWeather = async () => {
        const data = await getWeatherData({ lat, lon, units }).then((res) =>
          setWeather(res)
        );
      };
      fetchWeather();
    } else if (city !== "") {
      const fetchWeather = async () => {
        const data = await getWeatherData1({ city, units }).then((res) =>
          setWeather(res)
        );
      };
      fetchWeather();
    }
  }, [lat, lon, city, units]);
  console.log(city);
  return (
    <div className="select-none bg-teal-100 min-h-screen h-[100vh] min-w-full">
      <Header />

      <div>
        <resourcedata.Provider
          value={{ weather, city, setCity, units, setUnits }}
        >
          <SearchBar />
          {weather ? (
            <WeatherCard />
          ) : (
            <div className="flex justify-center items-center pt-[30vh]">
              No Data Found
            </div>
          )}
        </resourcedata.Provider>
      </div>
    </div>
  );
}

export default App;
