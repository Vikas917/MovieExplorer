import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import MovieCard from '../components/MovieCard'; // Ensure this path is correct or update it to the correct path
import { useNavigation, NavigationProp } from '@react-navigation/native';

type Movie = {
  show: {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
  };
};

type RootStackParamList = {
  Search: undefined;
  Details: { movie: { id: number; name: string; image: { medium: string }; summary: string } };
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        onFocus={() => navigation.navigate('Search' as never)}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
            <MovieCard movie={item.show} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E50914', padding: 10 },
  searchBar: { backgroundColor: '#fff', padding: 10, borderRadius: 10, color: '#fff', marginBottom: 10 },
});

export default HomeScreen;
