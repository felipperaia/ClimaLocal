import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ForecastItem = ({ day }) => {
  const date = new Date(day.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'numeric' });

  return (
    <View style={styles.item}>
      <Text style={styles.date}>{date}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `https://openweathermap.org/img/wn/${day.weather[0].icon}.png` }}
      />
      <Text style={styles.temp}>{Math.round(day.temp.day)}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dfdfdf',
    padding: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 80,
  },
  date: { fontSize: 12, marginBottom: 4 },
  icon: { width: 40, height: 40 },
  temp: { fontSize: 16, fontWeight: 'bold' }
});

export default ForecastItem;
