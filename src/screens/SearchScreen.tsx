import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';

type Movie = {
  show: {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
  };
};

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item.show} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E50914', padding: 10 },
  searchBar: { backgroundColor: '#fff', padding: 10, borderRadius: 10, color: '#000', marginBottom: 10 },
});

export default SearchScreen;
