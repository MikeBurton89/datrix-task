import { useCityWeather } from "../contexts/CityWeatherContext";

const CityList = () => {
  const { cities, handleSelectCity, isLoading, error } = useCityWeather();

  if (isLoading) {
    return <p>Loading cities...</p>;
  }

  if (error) {
    return <p>Error loading cities...</p>;
  }

  if (cities && cities.length === 0) {
    return (
      <div className="w-full bg-white border-2 border-black rounded-md h-fit">
        <article className="w-full h-full">
          <div className="h-full px-6 py-5 text-left">
            <p className="mb-4 text-base">
              I am sorry, we only cover Earth cities, we still don't have data
              about Mars cities...
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 overflow-auto scrollbar">
      {cities &&
        cities.map((city) => (
          <div
            key={city.name} // Added key prop
            onClick={() => handleSelectCity(city)}
            className="w-full bg-white border-2 border-black rounded-md cursor-pointer h-fit"
          >
            <article className="w-full h-full">
              <div className="h-full px-6 py-5 text-left">
                <p className="mb-4 text-base">{city.addresstype}</p>
                <h1 className="text-[32px] mb-4">{city.name}</h1>
                <p className="mb-4 text-xs line-clamp-4">{city.display_name}</p>
              </div>
            </article>
          </div>
        ))}
    </div>
  );
};

export default CityList;
