const BASE_URL = 'https://backend-clima-local.onrender.com';

export const fetchWeatherByCoords = async (lat, lon) => {
  const res = await fetch(`${BASE_URL}/weather/coords?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error('Erro ao buscar clima');
  return res.json();
};

export const saveLocationToDB = async (lat, lon) => {
  const res = await fetch(`${BASE_URL}/location/save`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lat, lon }),
  });
  if (!res.ok) throw new Error('Erro ao salvar localização');
};

export const fetchLocationHistory = async () => {
  const res = await fetch(`${BASE_URL}/location/history`);
  if (!res.ok) throw new Error('Erro ao buscar histórico');
  return res.json();
};
