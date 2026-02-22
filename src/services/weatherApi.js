const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("City not found");
    return res.json();
  } catch (error) {
    throw new Error(error.message || "Error fetching weather data");
  }
};