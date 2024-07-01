import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiFog,
  WiDayShowers,
  WiDayRain,
  WiDaySnow,
  WiDayThunderstorm,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiSnowflakeCold,
} from "weather-icons-react";

export const weatherIconMap: Record<number, JSX.Element> = {
  0: <WiDaySunny size="10rem" color="black" />, // Clear sky
  1: <WiDayCloudy size="10rem" color="black" />, // Mainly clear
  2: <WiCloud size="10rem" color="black" />, // Partly cloudy
  3: <WiCloud size="10rem" color="black" />, // Overcast
  45: <WiFog size="10rem" color="black" />, // Fog
  48: <WiFog size="10rem" color="black" />, // Depositing rime fog
  51: <WiDayShowers size="10rem" color="black" />, // Drizzle: Light
  53: <WiDayShowers size="10rem" color="black" />, // Drizzle: Moderate
  55: <WiDayShowers size="10rem" color="black" />, // Drizzle: Dense intensity
  56: <WiDayShowers size="10rem" color="black" />, // Freezing Drizzle: Light
  57: <WiDayShowers size="10rem" color="black" />, // Freezing Drizzle: Dense intensity
  61: <WiRain size="10rem" color="black" />, // Rain: Slight
  63: <WiRain size="10rem" color="black" />, // Rain: Moderate
  65: <WiRain size="10rem" color="black" />, // Rain: Heavy intensity
  66: <WiDayRain size="10rem" color="black" />, // Freezing Rain: Light
  67: <WiDayRain size="10rem" color="black" />, // Freezing Rain: Heavy intensity
  71: <WiSnow size="10rem" color="black" />, // Snow fall: Slight
  73: <WiSnow size="10rem" color="black" />, // Snow fall: Moderate
  75: <WiSnow size="10rem" color="black" />, // Snow fall: Heavy intensity
  77: <WiSnowflakeCold size="10rem" color="black" />, // Snow grains
  80: <WiDayShowers size="10rem" color="black" />, // Rain showers: Slight
  81: <WiDayShowers size="10rem" color="black" />, // Rain showers: Moderate
  82: <WiDayShowers size="10rem" color="black" />, // Rain showers: Violent
  85: <WiDaySnow size="10rem" color="black" />, // Snow showers slight
  86: <WiDaySnow size="10rem" color="black" />, // Snow showers heavy
  95: <WiDayThunderstorm size="10rem" color="black" />, // Thunderstorm: Slight or moderate
  96: <WiThunderstorm size="10rem" color="black" />, // Thunderstorm with slight hail
  99: <WiThunderstorm size="10rem" color="black" />, // Thunderstorm with heavy hail
};

export const formatDate = (date: string) => {
  // format 2024-07-01T21:00 to 01 July 2024 21:00
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return dateObj.toLocaleDateString("en-GB", options);
};
