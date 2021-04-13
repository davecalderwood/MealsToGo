import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './src/infrastructure/theme';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight
  }
});
