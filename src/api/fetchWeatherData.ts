import axios from "axios";

const fetchWeatherData = async (latitude?: string, longitude?: string) => {
  try {
    if (!latitude || !longitude)
      throw new Error("Latitude and longitude are required");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&
current_weather=true`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default fetchWeatherData;
