import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from './src/Screens/AddInformation';
// import ExpensesScreen from './src/Screens/ExpensesScreen';
// import ProfileScreen from './src/Screens/ProfileScreen';
// import AddMoney from './src/Screens/AddMoney';
// import NotificationsScreen from './src/Screens/Chart';
// import CurrentSavings from './src/Screens/AddBankInfo';
// import AddAccount from './src/Screens/AddAccount';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileInfoScreen from './src/screens/Profile/ProfileInfoScreen';
import GoalsScreen from './src/screens/Profile/GoalsScreen';
import PermissionsScreen from './src/screens/Profile/PermissionsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function Savings() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Savings" component={NotificationsScreen} />
//       <Stack.Screen name="Add Information" component={HomeScreen} />
//       <Stack.Screen name="Current Bank Info" component={CurrentSavings} />
//     </Stack.Navigator>
//   );
// }

// function Expenses() {
//   return (
//     <Stack.Navigator>
//       <Tab.Screen name="Expenses" component={ExpensesScreen} />
//     </Stack.Navigator>
//   );
// }

// function Investments() {
//   return (
//     <Stack.Navigator>
//       <Tab.Screen name="Add Money" component={AddMoney} />
//       <Tab.Screen name='Add Account Information' component={AddAccount}/>
//     </Stack.Navigator>
//   );
// }

// function Notifications() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Chart" component={NotificationsScreen} />
//     </Stack.Navigator>
//   );
// }

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
      {/* <Tab.Screen name="Savings" component={Savings} />
      <Tab.Screen name="Expenses" component={Expenses} />
      <Tab.Screen name="Add Money" component={Investments} />
      <Tab.Screen name="Notifications" component={Notifications} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}