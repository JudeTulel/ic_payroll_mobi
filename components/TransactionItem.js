import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ transaction }) {
  const amountStyle = [
    styles.amount,
    { color: transaction.type === 'Received' ? 'green' : 'red' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{transaction.type}</Text>
      <Text style={amountStyle}>{transaction.amount}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});
