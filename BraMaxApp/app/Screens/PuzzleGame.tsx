import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PuzzleGame = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Sxreens/ChessGame'); // Replace 'NextScreen' with the name of your target screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puzzle Game</Text>
      <Text style={styles.description}>
        Solve puzzles to test your skills and have fun!
      </Text>
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
