import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DailyChallenge = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Screens/BraMaxDetails'); // Replace 'NextScreen' with the name of your target screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Challenge</Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigate}>
        <Text style={styles.buttonText}>Go to Next Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyChallenge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
