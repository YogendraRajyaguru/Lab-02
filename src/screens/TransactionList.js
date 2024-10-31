import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Lunch', amount: 15, date: '2023-10-25' },
  { id: '2', name: 'Coffee', amount: 5, date: '2023-10-24' },
  { id: '3', name: 'Groceries', amount: 50, date: '2023-10-23' },
];

export default function TransactionList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  amount: { fontSize: 16, color: '#6200ee', marginVertical: 5 },
  date: { fontSize: 14, color: 'grey' },
});
