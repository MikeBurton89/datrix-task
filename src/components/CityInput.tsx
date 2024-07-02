import React from "react";
import { IconSearch, Loader } from "../icons";
import { useCityWeather } from "../contexts/CityWeatherContext";

const CityInput = () => {
  const { city, setCity, setSelectedCity, isLoading, refetchCity, error } =
    useCityWeather();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleFetchCity = () => {
    setSelectedCity(undefined);
    refetchCity();
  };

  const renderInput = () => (
    <input
      value={city}
      onChange={handleChange}
      className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
      placeholder="Enter city name or address..."
    />
  );

  const renderButton = () => (
    <button
      onClick={handleFetchCity}
      disabled={!city || isLoading}
      className="border-black border-2 disabled:bg-[#FFA6D6] bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-12 h-12 flex items-center justify-center"
    >
      {isLoading ? (
        <Loader className="w-6 h-6 animate-spin" />
      ) : (
        <IconSearch className="w-6 h-6" />
      )}
    </button>
  );

  const renderError = () =>
    error && (
      <p>Error: {error.message ? error.message : "Something wrong happened"}</p>
    );

  return (
    <span className="flex flex-row gap-2">
      {
        <>
          {renderInput()}
          {renderButton()}
          {renderError()}
        </>
      }
    </span>
  );
};

export default CityInput;
