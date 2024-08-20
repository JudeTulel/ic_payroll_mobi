import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import TransactionItem from '../components/TransactionItem';

export default function DeductionsScreen() {
  const [deductions, setDeductions] = useState([]);

  useEffect(() => {
    // Fetch recent deductions from API
    axios.get('http://apiendpoint/deductions')
      .then(response => setDeductions(response.data.deductions))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Deductions</Text>
      <FlatList
        data={deductions}
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
