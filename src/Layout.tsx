import React from "react";
import CityInput from "./components/CityInput";
import CityList from "./components/CityList";
import WeatherCard from "./components/WeatherCard";
import {
  CityWeatherProvider,
  useCityWeather,
} from "./contexts/CityWeatherContext";

const LayoutContent = () => {
  const { weatherData } = useCityWeather();

  return (
    <div className="p-4 grid grid-flow-col grid-rows-10/90 w-full h-[100dvh] items-base justify-normal">
      <span className="flex flex-row items-center justify-around w-full p-4">
        <h1 className="text-4xl font-bold">Yet another weather app...</h1>
      </span>
      <div className="grid w-full gap-4 lg:grid-flow-row lg:grid-cols-20/80">
        <div className="flex flex-col justify-start w-full gap-4 p-4 overflow-hidden bg-yellow-200 border-2 border-black">
          <h2 className="text-2xl font-bold">Search your city</h2>
          <CityInput />
          <CityList />
        </div>
        <div className="grid justify-center h-full gap-4 p-4 border-2 border-black lg:mr-4 bg-cyan-200 grid-rows-10/90">
          <div className="flex flex-row justify-center ">
            <h2 className="text-2xl font-bold">Current Weather</h2>
          </div>
          {weatherData && <WeatherCard />}
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
