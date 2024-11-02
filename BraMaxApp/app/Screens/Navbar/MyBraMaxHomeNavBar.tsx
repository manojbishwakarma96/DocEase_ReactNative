// MyBraMaxHomeNavBar.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyBraMaxHomeNavBar = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Index'); // Navigate to 'Index' screen
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton} onPress={handleButtonPress}>
        <Text style={styles.navButtonText}>My BraMax Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#007AFF',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navButton: {
    paddingHorizontal: 10,
  },
  navButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyBraMaxHomeNavBar;
