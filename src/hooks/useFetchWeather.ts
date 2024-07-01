import { useQuery } from "@tanstack/react-query";
import fetchWeatherData from "../api/fetchWeatherData";

export const useFetchWeather = (latitude?: string, longitude?: string) => {
    return useQuery({
        queryKey: ["weather", latitude, longitude],
        queryFn: () => fetchWeatherData(latitude, longitude),
        enabled: false
    });
}