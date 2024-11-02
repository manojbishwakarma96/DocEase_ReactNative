import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DailyChallenge = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Screens/BraMaxDetails'); // Replace 'BraMaxDetails' with the name of your target screen
  };

  const adviceList = [
    "Embrace challenges as opportunities for growth.",
    "Stay positive and focus on solutions, not problems.",
    "Break tasks into smaller, manageable steps.",
    "Seek support from friends, family, or mentors.",
    "Practice self-care to maintain your mental health.",
    "Stay flexible and adapt to changing circumstances.",
    "Set realistic goals and celebrate small victories.",
    "Remember that it's okay to ask for help.",
    "Reflect on past challenges you've overcome to inspire yourself.",
    "Keep a journal to express your thoughts and feelings."
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Challenge</Text>
      <ScrollView style={styles.adviceContainer}>
        <Text style={styles.adviceTitle}>Tips to Overcome Hard Situations:</Text>
        {adviceList.map((advice, index) => (
          <Text key={index} style={styles.adviceText}>
            - {advice}
          </Text>
        ))}
      </ScrollView>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  adviceContainer: {
    width: '100%',
    marginBottom: 20,
  },
  adviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  adviceText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
