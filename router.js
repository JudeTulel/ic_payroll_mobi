import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/Auth/login';
import BalanceScreen from './screens/BalanceScreen';
import DeductionsScreen from './screens/DeductionsScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import { faWallet, faMoneyBill, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';    

// Create the Stack Navigator
const Stack = createStackNavigator();

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Define the Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === 'Balance') {
            icon = faWallet;
          } else if (route.name === 'Deductions') {
            icon = faMoneyBill;
          } else if (route.name === 'Payments') {
            icon = faHistory;
          }

          return (<FontAwesomeIcon icon={icon} color={color} size={size} />);
        },
        headerShown: false,
      })}>
    <Tab.Screen name="Balance" component={BalanceScreen} />
      <Tab.Screen name="Deductions" component={DeductionsScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
    </Tab.Navigator>
  );
}

// Define the Stack Navigator, nesting the Tab Navigator inside
export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* After login, show the tab navigator */}
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
