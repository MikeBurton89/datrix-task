import { useCityWeather } from "../contexts/CityWeatherContext";
import { formatDate, weatherIconMap } from "../imports/utils";

const WeatherCard = () => {
  const { selectedCity, weatherIsLoading, weatherData, weatherError } = useCityWeather();
  
  if (weatherIsLoading) {
    return (
      <div className="w-80 h-fit border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        <h1 className="text-[32px] mb-4">Loading weather...</h1>
      </div>
    );
  }

  if (weatherError) {
    return (
      <div className="w-80 h-fit border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        <h1 className="text-[32px] mb-4">
          Welllll, We f***ed up... Sorry, our bad.
        </h1>
      </div>
    );
  }

  if (!weatherData) {
    return null;
  }

  const {
    current_weather_units: { temperature: tempUnit },
    current_weather: { temperature, weathercode, time },
  } = weatherData;

  const weatherIcon = weathercode !== undefined ? weatherIconMap[weathercode].icon : null;
  const weatherDescription = weathercode !== undefined ? weatherIconMap[weathercode].description : null;

  return (
    <div className="w-80 h-fit border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <article className="w-full h-full">
        <figure className="w-full mx-auto border-b-2 border-black h-1/2">
          <span className="flex flex-row items-center justify-center">
            {weatherIcon}
          </span>
        </figure>
        <div className="h-full px-6 py-5 text-left">
          <p className="mb-4 text-base">{selectedCity?.name ?? ""}</p>
          <h1 className="text-[32px] mb-4">
            {`${weatherDescription} ${temperature} ${tempUnit}`}
          </h1>
          <p className="mb-4 text-xs line-clamp-4">
            {formatDate(time ?? "")}
          </p>
        </div>
      </article>
    </div>
  );
};

export default WeatherCard;
