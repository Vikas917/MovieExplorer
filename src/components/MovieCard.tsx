import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type MovieProps = {
  movie: {
    name: string;
    image?: { medium: string } | null;
    summary?: string;
  };
};

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <TouchableOpacity onPress={toggleDetails} style={styles.card}>
      {movie.image?.medium ? (
        <Image source={{ uri: movie.image.medium }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.name}</Text>
        {showDetails && movie.summary && (
          <Text style={styles.summary}>{movie.summary}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#181818',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 10,
  },
  placeholder: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 5,
    color: '#ccc',
    fontSize: 14,
  },
});

export default MovieCard;
