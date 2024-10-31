import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.name}</Text>
      <Text style={styles.amount}>Amount: ${transaction.amount}</Text>
      <Text style={styles.date}>Date: {transaction.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  amount: { fontSize: 18, color: '#6200ee', marginBottom: 10 },
  date: { fontSize: 16, color: 'grey' },
});
