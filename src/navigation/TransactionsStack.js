import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '../screens/TransactionList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createStackNavigator();

export default function TransactionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#6200ee' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="TransactionList" component={TransactionList} options={{ title: 'All Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Details' }} />
    </Stack.Navigator>
  );
}
