import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define 'SignInScreen' component
const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Mock credentials
  const mockEmail = 'techfrenzy@gmail.com';
  const mockPassword = 'Tech@123';

  // Handle form submission (login)
  const handleLogin = () => {
    // Simple validation check for email and password
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    // Check if email and password match mock credentials
    if (email === mockEmail && password === mockPassword) {
      console.log('Login successful');
      navigation.navigate('index'); // Navigate to the WelcomeScreen after login
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Sign In</Text>
      <Text style={styles.subtitleText}>Enter your credentials to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => navigation.navigate('SignUpScreen')}  // Navigate to RegisterScreen
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
