import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyBraMaxHomeNavBar from './Screens/Navbar/MyBraMaxHomeNavBar';
import DailyChallenge from './Screens/DailyChallenge';
import BrainGames from './Screens/DesignSummary/BrainGames';
import ProgressTracking from './Screens/DesignSummary/ProgressTracking';
import CustomizedTrainingProgram from './Screens/DesignSummary/CustomizedTrainingProgram';
import BraMaxDetails from './Screens/BraMaxDetails';
import Index from '.';
import SignInScreen from '.';
import SignUpScreen from './Screens/SignUpScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome" // Ensure Welcome is the initial route
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false, // No header for WelcomeScreen
          }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{
            header: () => <MyBraMaxHomeNavBar />, // Custom header for Index
          }}
        />
        <Stack.Screen name="DailyChallenge" component={DailyChallenge} />
        <Stack.Screen name="BrainGames" component={BrainGames} />
        <Stack.Screen name="ProgressTracking" component={ProgressTracking} />
        <Stack.Screen name="CustomizedTrainingProgram" component={CustomizedTrainingProgram} />
        <Stack.Screen name="BraMaxDetails" component={BraMaxDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
