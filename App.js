import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './src/screens/ProfileScreen';
import ProfileInfoScreen from './src/screens/Profile/ProfileInfoScreen';
import GoalsScreen from './src/screens/Profile/GoalsScreen';
import PermissionsScreen from './src/screens/Profile/PermissionsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Profile() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Personal Info" component={ProfileInfoScreen} />
      <Stack.Screen name="Goals" component={GoalsScreen} />
      <Stack.Screen name="Permissions" component={PermissionsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}