import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.medium }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary.replace(/<[^>]*>/g, '')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  image: { width: '100%', height: 300, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 10 },
  summary: { fontSize: 16, color: '#fff', marginTop: 10 },
});

export default DetailsScreen;
