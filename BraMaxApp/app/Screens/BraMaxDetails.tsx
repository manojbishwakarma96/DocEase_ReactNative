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
        <View style={{ marginTop: '5%' }}>
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
            style={{ width: '100%' }}
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
            style={{ width: '100%' }}
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
        <TouchableOpacity style={[styles.smallButton, styles.blueButton]} onPress={() => handleButtonPress('ClearSearch')}>
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
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '20%',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  button: {
    flex: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  greenCard: {
    backgroundColor: '#8BC34A', // Light green
  },
  redCard: {
    backgroundColor: '#EF9A9A', // Light red
  },
  blueButton: {
    backgroundColor: '#007AFF', // Blue color for the "Clear Search" button
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  datePicker: {
    flex: 1,
    marginRight: 10,
  },
  datePickerLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default BraMaxDetails;
