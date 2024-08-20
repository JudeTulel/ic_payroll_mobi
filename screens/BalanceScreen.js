import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function BalanceScreen() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Fetch ckBTC balance from API
    axios.get('http://apiendpoint/balance')
      .then(response => setBalance(response.data.balance))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your ckBTC Balance</Text>
      <Text style={styles.balance}>{balance} ckBTC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
