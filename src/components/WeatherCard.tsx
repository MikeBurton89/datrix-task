import { useCityWeather } from "../contexts/CityWeatherContext";
import { formatDate, weatherIconMap } from "../imports/utils";

const WeatherCard = () => {
  const { selectedCity, weatherIsLoading, weatherData, weatherError } =
    useCityWeather();
  const {
    current_weather_units: { temperature: tempUnit },
    current_weather: { temperature, weathercode, time },
  } = weatherData || { current_weather_units: {}, current_weather: {} };

  return (
    <div>
      <div className="w-80 h-fit border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        {weatherData ? (
          <article className="w-full h-full">
            <figure className="w-full mx-auto border-b-2 border-black h-1/2">
              <span className="flex flex-row items-center justify-center">
                {weathercode !== undefined
                  ? weatherIconMap[weathercode].icon
                  : null}
              </span>
            </figure>
            <div className="h-full px-6 py-5 text-left">
              <p className="mb-4 text-base">{selectedCity?.name ?? ""}</p>
              <h1 className="text-[32px] mb-4">{`${
                weathercode !== undefined
                  ? weatherIconMap[weathercode].description
                  : null
              } ${temperature} ${tempUnit}`}</h1>
              <p className="mb-4 text-xs line-clamp-4">
                {formatDate(time ?? "")}{" "}
              </p>
            </div>
          </article>
        ) : null}
        {weatherIsLoading ? (
          <h1 className="text-[32px] mb-4">Loading weather...</h1>
        ) : null}
        {weatherError ? (
          <h1 className="text-[32px] mb-4">
            Welllll, We f***ed up... Sorry, our bad.
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherCard;
