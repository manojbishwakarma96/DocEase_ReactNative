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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: '15%',
  },
  spaceBetweenCards: {
    marginTop: '5%',
    width: '100%',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  greenCard: {
    backgroundColor: '#4CAF50', // Slightly darker green
  },
  redCard: {
    backgroundColor: '#E57373', // Slightly darker red
  },
  blueButton: {
    backgroundColor: '#007AFF', // Bright blue
  },
  clearButton: {
    backgroundColor: '#FF6F61', // Coral for contrast with blue
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
    marginRight: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  smallButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
});

export default BraMaxDetails;
