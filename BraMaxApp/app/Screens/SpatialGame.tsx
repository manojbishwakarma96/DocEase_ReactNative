import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const SpatialGame = () => {
  const handleButtonPress = (gameAction) => {
    Alert.alert(`You pressed: ${gameAction}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spatial Game</Text>
      <Text style={styles.description}>
        Test your spatial awareness with fun challenges!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.startButton]}
          onPress={() => handleButtonPress('Start Game')}
        >
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.instructionsButton]}
          onPress={() => handleButtonPress('Instructions')}
        >
          <Text style={styles.buttonText}>Instructions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SpatialGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', // Light cyan background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b', // Dark teal color
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#004d40', // Darker teal color
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#007AFF', // Blue color for start button
  },
  instructionsButton: {
    backgroundColor: '#FF6F61', // Coral color for instructions button
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
