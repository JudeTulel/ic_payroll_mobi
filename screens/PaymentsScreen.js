import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import TransactionItem from '../components/TransactionItem';

export default function PaymentsScreen() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch recent payments from API
    axios.get('http://apiendpoint/payments')
      .then(response => setPayments(response.data.payments))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Payments</Text>
      <FlatList
        data={payments}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});
