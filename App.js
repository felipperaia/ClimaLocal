import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import { Text, View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clima" component={HomeScreen} />
        <Stack.Screen name="Histórico" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
