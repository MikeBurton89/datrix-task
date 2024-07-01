import React from "react";
import CityInput from "./components/CityInput";
import CityList from "./components/CityList";
import WeatherCard from "./components/WeatherCard";
import { CityWeatherProvider, useCityWeather } from "./contexts/CityWeatherContext";

const LayoutContent = () => {
  const {
    weatherData,
  } = useCityWeather();

  return (
    <div className="p-4 grid grid-flow-col grid-rows-10/90 w-full h-[100dvh] items-base justify-normal">
      <span className="p-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Yet another weather app...</h1>
      </span>
      <div className="grid grid-flow-row grid-cols-20/80 w-full gap-4">
        <div className="p-4 w-full bg-yellow-200 flex flex-col justify-start gap-4 overflow-hidden">
          <h2 className="text-2xl font-bold">Search your city</h2>
          <CityInput

          />
          <CityList  />
        </div>
        <div className="p-4 grid bg-cyan-200 grid-rows-10/90 w-full h-full items-stretch justify-center">
          <div className="w-full flex flex-row justify-center items-stretch">
            <h2 className="text-2xl font-bold">Weather in your city</h2>
          </div>
          {weatherData && (
            <WeatherCard  />
          )}
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <CityWeatherProvider>
      <LayoutContent />
    </CityWeatherProvider>
  );
};

export default Layout;
