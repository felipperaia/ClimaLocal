import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { fetchLocationHistory } from '../utils/api';

const HistoryScreen = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocationHistory()
      .then(setLocations)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Localizações</Text>
      <MapView style={styles.map}
        initialRegion={{
          latitude: locations[0]?.lat || 0,
          longitude: locations[0]?.lon || 0,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        {locations.map((loc, i) => (
          <Marker key={i} coordinate={{ latitude: loc.lat, longitude: loc.lon }} />
        ))}
        <Polyline
          coordinates={locations.map(loc => ({ latitude: loc.lat, longitude: loc.lon }))}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            📍 {item.lat.toFixed(4)}, {item.lon.toFixed(4)} - {new Date(item.timestamp).toLocaleString()}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  map: {
    width: Dimensions.get('window').width - 20,
    height: 200,
    marginBottom: 10,
  },
  item: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  }
});

export default HistoryScreen;
