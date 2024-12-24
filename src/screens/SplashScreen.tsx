import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash.jpg')} style={styles.image} />
      <Text style={styles.text}>Welcome to MovieFlix</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  image: { width: 200, height: 200, marginBottom: 20 },
  text: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});

export default SplashScreen;
