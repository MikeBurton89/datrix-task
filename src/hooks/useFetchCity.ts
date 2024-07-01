import { useQuery } from "@tanstack/react-query";
import fetchCity from "../api/fetchCity";

export const useFetchCity = (city: string) => {
  return useQuery({
    queryKey: ["city", city],
    queryFn: () => fetchCity(city),
    enabled: false
  });
};
