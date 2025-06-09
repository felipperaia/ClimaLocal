export const fetchWeatherByCoords = async (lat, lon) => {
  const res = await fetch(`https://backend-clima-local.onrender.com/weather/coords?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error('Failed to fetch weather');
  return res.json();
};

export const fetchWeatherByCity = async (city) => {
  const res = await fetch(`https://backend-clima-local.onrender.com/weather?city=${encodeURIComponent(city)}`);
  if (!res.ok) throw new Error('Failed to fetch weather');
  return res.json();
};
