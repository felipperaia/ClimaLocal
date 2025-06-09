import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RetroCard = ({ data }) => {
  const { location, weather } = data;
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{location || weather.name}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
      />
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
      <Text style={styles.desc}>{weather.weather[0].description}</Text>
      <View style={styles.details}>
        <Text>🌡️ Sensação térmica: {Math.round(weather.main.feels_like)}°C</Text>
        <Text>💧 Umidade: {weather.main.humidity}%</Text>
        <Text>🌬️ Vento: {weather.wind.speed} km/h</Text>
        <Text>📈 Pressão: {weather.main.pressure} hPa</Text>
        <Text>🌅 Nascer do sol: {sunrise}</Text>
        <Text>🌇 Pôr do sol: {sunset}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c0c0c0',
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#000080' },
  temp: { fontSize: 40, fontWeight: 'bold' },
  desc: { fontSize: 16, fontStyle: 'italic' },
  icon: { width: 100, height: 100 },
  details: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#000',
    paddingTop: 8,
    width: '100%',
  },
});

export default RetroCard;
