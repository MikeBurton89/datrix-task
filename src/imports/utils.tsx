import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiFog,
  WiDayShowers,
  WiRain,
  WiDayRain,
  WiSnow,
  WiSnowflakeCold,
  WiDaySnow,
  WiDayThunderstorm,
  WiThunderstorm,
} from "weather-icons-react";

/**
 * A mapping of weather icons based on their corresponding weather codes, that comes from the weather api
 */
export const weatherIconMap: Record<number, { description: string, icon: JSX.Element }> = {
  0: { description: "Clear sky", icon: <WiDaySunny size="10rem" color="black" /> },
  1: { description: "Mainly clear", icon: <WiDayCloudy size="10rem" color="black" /> },
  2: { description: "Partly cloudy", icon: <WiCloud size="10rem" color="black" /> },
  3: { description: "Overcast", icon: <WiCloud size="10rem" color="black" /> },
  45: { description: "Fog", icon: <WiFog size="10rem" color="black" /> },
  48: { description: "Depositing rime fog", icon: <WiFog size="10rem" color="black" /> },
  51: { description: "Drizzle: Light", icon: <WiDayShowers size="10rem" color="black" /> },
  53: { description: "Drizzle: Moderate", icon: <WiDayShowers size="10rem" color="black" /> },
  55: { description: "Drizzle: Dense intensity", icon: <WiDayShowers size="10rem" color="black" /> },
  56: { description: "Freezing Drizzle: Light", icon: <WiDayShowers size="10rem" color="black" /> },
  57: { description: "Freezing Drizzle: Dense intensity", icon: <WiDayShowers size="10rem" color="black" /> },
  61: { description: "Rain: Slight", icon: <WiRain size="10rem" color="black" /> },
  63: { description: "Rain: Moderate", icon: <WiRain size="10rem" color="black" /> },
  65: { description: "Rain: Heavy intensity", icon: <WiRain size="10rem" color="black" /> },
  66: { description: "Freezing Rain: Light", icon: <WiDayRain size="10rem" color="black" /> },
  67: { description: "Freezing Rain: Heavy intensity", icon: <WiDayRain size="10rem" color="black" /> },
  71: { description: "Snow fall: Slight", icon: <WiSnow size="10rem" color="black" /> },
  73: { description: "Snow fall: Moderate", icon: <WiSnow size="10rem" color="black" /> },
  75: { description: "Snow fall: Heavy intensity", icon: <WiSnow size="10rem" color="black" /> },
  77: { description: "Snow grains", icon: <WiSnowflakeCold size="10rem" color="black" /> },
  80: { description: "Rain showers: Slight", icon: <WiDayShowers size="10rem" color="black" /> },
  81: { description: "Rain showers: Moderate", icon: <WiDayShowers size="10rem" color="black" /> },
  82: { description: "Rain showers: Violent", icon: <WiDayShowers size="10rem" color="black" /> },
  85: { description: "Snow showers slight", icon: <WiDaySnow size="10rem" color="black" /> },
  86: { description: "Snow showers heavy", icon: <WiDaySnow size="10rem" color="black" /> },
  95: { description: "Thunderstorm: Slight or moderate", icon: <WiDayThunderstorm size="10rem" color="black" /> },
  96: { description: "Thunderstorm with slight hail", icon: <WiThunderstorm size="10rem" color="black" /> },
  99: { description: "Thunderstorm with heavy hail", icon: <WiThunderstorm size="10rem" color="black" /> },
};


/**
 * Formats a date string into a localized date and time string.
 * @param date - The date string to format.
 * @returns The formatted date and time string.
 */
export const formatDate = (date: string) => {
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
