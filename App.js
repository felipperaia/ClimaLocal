import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.header}>🌤️ Clima Local - Win98 Style</Text>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#bfbfbf', paddingTop: 40 },
  header: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#000080',
    color: 'white',
    padding: 8,
    borderBottomWidth: 2,
    borderColor: '#000'
  }
});
