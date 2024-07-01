import React from "react";
import { IconSearch } from "../icons";
import { useCityWeather } from "../contexts/CityWeatherContext";

const CityInput = () => {
    const {
        city,
        setCity,
        isLoading,
        refetchCity,
        error,
      } = useCityWeather();
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value);

  return (
    <span className="flex flex-row gap-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            value={city}
            onChange={handleChange}
            className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            placeholder="Enter city name"
          />
          <button
            onClick={() => refetchCity()}
            disabled={city === ""}
            className="border-black border-2 disabled:bg-[#FFA6D6] bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-12 h-12"
          >
            <IconSearch className="w-6 h-6" />
          </button>
          {error && <p>Error: {error && error.message ? error.message : 'Something wrong happened'}</p>}
        </>
      )}
    </span>
  );
};

export default CityInput;
