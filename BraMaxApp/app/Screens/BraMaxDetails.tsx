import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';

const BraMaxDetails = () => {
  const navigation = useNavigation();
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.greenCard]}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('SimpleArithmetic')}>
            <Text style={styles.buttonText}>Simple Arithmetic</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spaceBetweenCards}>
          <View style={[styles.card, styles.redCard]}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('WordPuzzle')}>
              <Text style={styles.buttonText}>Word Puzzle</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('SpatialKnowledge')}>
              <Text style={styles.buttonText}>Spatial Knowledge</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.datePickerContainer}>
        <View style={styles.datePicker}>
          <Text style={styles.datePickerLabel}>Date From:</Text>
          <DatePicker
            style={styles.datePickerInput}
            date={dateFrom}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => setDateFrom(date)}
          />
        </View>
        <View style={styles.datePicker}>
          <Text style={styles.datePickerLabel}>Date To:</Text>
          <DatePicker
            style={styles.datePickerInput}
            date={dateTo}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => setDateTo(date)}
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={[styles.smallButton, styles.blueButton]} onPress={() => handleButtonPress('Search')}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.smallButton, styles.clearButton]} onPress={() => handleButtonPress('ClearSearch')}>
          <Text style={styles.buttonText}>Clear Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  spaceBetweenCards: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120, // Adjust height for better visibility
  },
  button: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18, // Increased font size for better visibility
    color: '#fff',
    fontWeight: 'bold', // Made font bold for emphasis
  },
  greenCard: {
    backgroundColor: '#4CAF50',
  },
  redCard: {
    backgroundColor: '#E57373',
  },
  blueButton: {
    backgroundColor: '#007AFF',
    flex: 1,
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: '#FF6F61',
    flex: 1,
    marginHorizontal: 5,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  datePicker: {
    flex: 1,
    marginHorizontal: 5,
  },
  datePickerInput: {
    width: '100%',
    paddingVertical: 10,
  },
  datePickerLabel: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  smallButton: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
});

export default BraMaxDetails;
