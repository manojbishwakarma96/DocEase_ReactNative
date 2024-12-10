import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PuzzleGame = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('ChessGame'); // Corrected the screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puzzle Game</Text>
      <Text style={styles.description}>
        Solve puzzles to test your skills and have fun!
      </Text>
      <Image 
        source={require('../../assets/images/puzzle.png')} // Adjusted the path
        style={styles.brainImage} 
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Start Next Challenge</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PuzzleGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  brainImage: {
    width: '100%', // Make the image responsive
    height: 200, // Set a fixed height for the image
    marginVertical: 20, // Space between image and button
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
