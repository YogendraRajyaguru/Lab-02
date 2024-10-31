import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', amount: 15 },
  { id: '2', amount: 5 },
  { id: '3', amount: 50 },
];

export default function SummaryScreen() {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Expenses</Text>
      <Text style={styles.amount}>${totalExpenses}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  amount: { fontSize: 28, color: '#6200ee' },
});
