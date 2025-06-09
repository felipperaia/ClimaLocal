import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = ({ data }) => {
  const { location, weather } = data;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{location || weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
      <Text style={styles.desc}>{weather.weather[0].description}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
      />
      <View style={styles.details}>
        <Text>Humidade: {weather.main.humidity}%</Text>
        <Text>Vento: {weather.wind.speed} km/h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10
  },
  city: { fontSize: 24, fontWeight: 'bold' },
  temp: { fontSize: 48, fontWeight: 'bold' },
  desc: { fontSize: 18, fontStyle: 'italic' },
  icon: { width: 150, height: 150 },
  details: { marginTop: 10 }
});

export default WeatherCard;
