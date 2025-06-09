import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import * as Location from 'expo-location';
import { saveLocation, getLocation } from '../utils/storage';
import { fetchWeatherByCoords } from '../utils/api';
import RetroCard from '../components/RetroCard';
import ForecastItem from '../components/ForecastItem';

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const loadWeather = useCallback(async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      let loc = await getLocation();
      if (!loc) {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Permissão de localização negada');
        }
        const geo = await Location.getCurrentPositionAsync({});
        loc = { lat: geo.coords.latitude, lon: geo.coords.longitude };
        await saveLocation(loc);
      }

      const result = await fetchWeatherByCoords(loc.lat, loc.lon);
      setData(result);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWeather();
  }, [loadWeather]);

  if (loading) return <ActivityIndicator style={styles.loader} size="large" />;

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{errorMsg}</Text>
        <Button title="Tentar novamente" onPress={loadWeather} />
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.centered}>
        <Text>Carregando dados do clima...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <RetroCard data={data} />
      {data.weather.daily && (
        <FlatList
          data={data.weather.daily.slice(1, 6)}
          keyExtractor={(item) => String(item.dt)}
          horizontal
          renderItem={({ item }) => <ForecastItem day={item} />}
        />
      )}
      <Button title="Atualizar" onPress={loadWeather} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  loader: { flex: 1, justifyContent: 'center' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', marginBottom: 10, fontSize: 16 }
});

export default HomeScreen;
