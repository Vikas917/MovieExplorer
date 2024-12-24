import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

const Tab = createBottomTabNavigator();

// Splash Screen Component
const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashText}>Welcome to the App!</Text>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

function App(): React.JSX.Element {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Simulate a delay for the splash screen
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles for the splash screen
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark background for splash
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default App;
