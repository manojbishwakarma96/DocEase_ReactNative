import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BraMaxDetails from '@/app/Screens/BraMaxDetails';


const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="BraMaxDetails" component={BraMaxDetails} />
  </Tab.Navigator>
);

export default TabNavigator;
