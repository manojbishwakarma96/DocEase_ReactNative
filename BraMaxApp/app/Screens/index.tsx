import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleLogout = () => {
    // Clear any session-related state here if necessary
    Alert.alert('Logout', 'You have been logged out successfully.');
    navigation.navigate('SignInScreen'); // Navigate back to the login screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText} onPress={() => handleButtonPress('BraMaxDetails')}>BraMax Details</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText} onPress={() => handleButtonPress('DailyChallenge')}>Daily Challenge</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText} onPress={() => handleButtonPress('PuzzleGame')}>Brain Games</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText} onPress={() => handleButtonPress('SpatialGame')}>Spatial Game</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText} onPress={() => handleButtonPress('ChessGame')}>Chess Game</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 20,
    paddingVertical: 25,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  cardText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
