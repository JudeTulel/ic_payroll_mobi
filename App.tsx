import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BalanceScreen from './screens/BalanceScreen';
import DeductionsScreen from './screens/DeductionsScreen';
import PaymentsScreen from './screens/PaymentsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Balance" component={BalanceScreen} />
        <Tab.Screen name="Deductions" component={DeductionsScreen} />
        <Tab.Screen name="Payments" component={PaymentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
