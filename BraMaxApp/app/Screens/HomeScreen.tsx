// Index.js

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import { AppRegistry } from 'react-native';

// Define 'MyBraMaxHomeNavBar' component
const MyBraMaxHomeNavBar = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Screens/BraMaxDetails'); // Navigate to 'BraMaxDetails' screen
  };

  return (
    <TouchableOpacity style={styles.navButton} onPress={handleButtonPress}>
      <Text style={styles.navButtonText}>My BraMax Home</Text>
    </TouchableOpacity>
  );
};

// Define 'Index' component
const Index = () => {
  const navigation = useNavigation();

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <MyBraMaxHomeNavBar />
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Screens/DailyChallenge')}>
        <Text style={styles.buttonText}>Daily Challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Screens/PuzzleGame')}>
        <Text style={styles.buttonText}>Brain Games</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Screens/SpatialGame')}>
        <Text style={styles.buttonText}>SpatialGame</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Screens/ChessGame')}>
        <Text style={styles.buttonText}>ChessGame</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowButton} onPress={() => handleButtonPress('Screens/BraMaxDetails')}>
        <Icon name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Index;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  navButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  arrowButton: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
