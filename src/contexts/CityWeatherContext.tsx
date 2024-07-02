import React, { createContext, useContext, useEffect, useState } from "react";
import { CityDetails, WeatherDetails } from "../types";
import { useFetchCity } from "../hooks/useFetchCity";
import { useFetchWeather } from "../hooks/useFetchWeather";

interface CityWeatherContextProps {
  city: string;
  cities: CityDetails[];
  setCity: (city: string) => void;
  selectedCity?: CityDetails;
  setSelectedCity: (city: CityDetails | undefined) => void;
  handleSelectCity: (city: CityDetails) => void;
  weatherData?: WeatherDetails;
  isLoading: boolean;
  weatherIsLoading: boolean;
  error?: any;
  weatherError?: any;
  refetchCity: () => void;
  refetchWeather: () => void;
}

const CityWeatherContext = createContext<CityWeatherContextProps | undefined>(undefined);

export const CityWeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState<CityDetails | undefined>();
  const { data: cities, error, isLoading, refetch } = useFetchCity(city);
  const {
    data: weatherData,
    error: weatherError,
    isLoading: weatherIsLoading,
    refetch: weatherRefetch,
  } = useFetchWeather(selectedCity?.lat, selectedCity?.lon);

  useEffect(() => {
    if (selectedCity) {
      weatherRefetch();
    }
  }, [selectedCity, weatherRefetch]);

  const handleSelectCity = (city: CityDetails) => {
    setSelectedCity(city);
  };

  return (
    <CityWeatherContext.Provider
      value={{
        cities,
        city,
        setCity,
        selectedCity,
        setSelectedCity,
        handleSelectCity,
        weatherData,
        isLoading,
        weatherIsLoading,
        error,
        weatherError,
        refetchCity: refetch,
        refetchWeather: weatherRefetch,
      }}
    >
      {children}
    </CityWeatherContext.Provider>
  );
};

export const useCityWeather = () => {
  const context = useContext(CityWeatherContext);
  if (!context) {
    throw new Error("useCityWeather must be used within a CityWeatherProvider");
  }
  return context;
};
