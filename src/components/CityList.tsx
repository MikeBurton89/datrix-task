import { useCityWeather } from "../contexts/CityWeatherContext";

const CityList = () => {
  const {
    cities,
    handleSelectCity,
  } = useCityWeather();

  return (
    <div className="overflow-auto scrollbar flex flex-col gap-4">
      {cities && cities.length === 0 && (
        <div className="w-full h-fit border-black border-2 rounded-md bg-white">
          <article className="w-full h-full">
            <div className="px-6 py-5 text-left h-full">
              <p className="text-base mb-4">
                I am sorry, we only cover Earth cities, we still don't have data
                about Mars cities...
              </p>
            </div>
          </article>
        </div>
      )}
      {cities &&
        cities.length > 0 &&
        cities.map((city) => (
          <div
            onClick={() => handleSelectCity(city)}
            className="w-full h-fit cursor-pointer border-black border-2 rounded-md bg-white"
          >
            <article className="w-full h-full">
              <div className="px-6 py-5 text-left h-full">
                <p className="text-base mb-4">{city.addresstype}</p>
                <h1 className="text-[32px] mb-4">{city.name}</h1>
                <p className="text-xs mb-4 line-clamp-4">{city.display_name}</p>
              </div>
            </article>
          </div>
        ))}
    </div>
  );
};

export default CityList;
