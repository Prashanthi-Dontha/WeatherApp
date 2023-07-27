const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherInfo = (searchParams) => {
  const key = process.env.REACT_APP_API_KEY;
  const url = new URL(BASE_URL);
  url.search = new URLSearchParams({ ...searchParams, appid: key });
  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

const getWeatherInfo1 = (searchParams) => {
  const key = process.env.REACT_APP_API_KEY;
  const url = new URL(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchParams.city}&units=${searchParams.units}&appid=${key}`
  );
  console.log(url);
  return fetch(url).then((res) => res.json());
};
const formattedWeatherDetails = (data) => {
  console.log(data);
  const {
    coord: { lat, lon },
    wind: { speed },
    dt,
    main: { feels_like, humidity, pressure, temp },
    name,
    sys: { country, sunrise, sunset },
    weather,
  } = data;
  const { main: description, icon } = weather[0];

  return {
    lat,
    lon,
    speed,
    dt,
    feels_like,
    humidity,
    pressure,
    temp,
    country,
    name,
    sunrise,
    sunset,
    description,
    icon,
  };
};
const getWeatherData = async (searchParams) => {
  const formattedWeatherData = await getWeatherInfo(searchParams).then(
    formattedWeatherDetails
  );
  return formattedWeatherData;
};
const getWeatherData1 = async (searchParams) => {
  console.log(searchParams);
  try {
    const formattedWeatherData1 = await getWeatherInfo1(searchParams).then(
      formattedWeatherDetails
    );
    return formattedWeatherData1;
  } catch (error) {
    console.log(error);
  }
};
const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getWeatherInfo;
export { getWeatherData, getWeatherData1, iconUrl, getWeatherInfo1 };
