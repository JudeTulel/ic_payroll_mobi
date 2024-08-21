import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import TransactionItem from '../components/TransactionItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMoneyBillTransfer, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

export default function BalanceScreen() {
  const [balance, setBalance] = useState(0);
  const [yearsWorked, setYearsWorked] = useState(5); // Example data
  const [transactions, setTransactions] = useState([
    { id: '1', type: 'Received', amount: '50 ckBTC', date: '10-10-2024' },
    { id: '2', type: 'Withdrawn', amount: '10 ckBTC', date: '10-10-2024' },
    { id: '3', type: 'Withdrawn', amount: '20 ckBTC', date: '10-10-2024' },
    { id: '4', type: 'Received', amount: '50 ckBTC', date: '10-10-2024' },
    { id: '5', type: 'Withdrawn', amount: '10 ckBTC', date: '10-10-2024' },
  ]);
  const [nextPay, setNextPay] = useState('');
  const [nextPayAmount, setNextPayAmount] = useState('100 ckBTC');

  useEffect(() => {
    // Fetch ckBTC balance from API
    // axios.get('http://apiendpoint/balance')
    //   .then(response => setBalance(response.data.balance))
    //   .catch(error => console.error(error));
    setBalance(100); // Example data
    setNextPay('10-10-2024'); // Example data
    setNextPayAmount('100 ckBTC'); // Example data
  }, []);
 
  const handleWithdraw = () => {
    // Handle withdraw action
    console.log('Withdraw button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        textDecorationLine: 'underline',
      }}>Wallet</Text>
      <View style={styles.layer}>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.title}>ckBTC Balance</Text>
            <Text style={styles.balance}>{balance} ckBTC</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Years Worked</Text>
            <Text style={styles.balance}>{yearsWorked} years</Text>
          </View>
        </View>
        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>Recent Transactions</Text>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TransactionItem transaction={item} />
            )}
          />
          </View>
        <View style={{width:'100%',height:'20%',position:'relative',top:'1%',display:'flex',flexDirection:'row',}}>
          <View style={styles.card}>
             <Text style={styles.title}>Next Pay</Text>
             <Text style={styles.balance}>{nextPay}</Text>
          </View>
          <View style={styles.card}>
             <Text style={styles.title}>Amount</Text>
             <Text style={styles.balance}>{nextPayAmount}</Text>
          </View>
      </View>
          <Pressable style={styles.withdrawButton} onPress={handleWithdraw}>
            <FontAwesomeIcon icon={faMoneyBillTransfer} color="white" size={20} />
            <Text style={styles.withdrawButtonText}>Withdraw</Text>
          </Pressable>
      </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E86C7',
    height: '100%',
    width: '100%',
  },
  layer: {
    position: 'absolute',
    top: '8%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    height: '92%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2E86C7',
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  withdrawButton: {
    backgroundColor: '#2E86C7',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  withdrawButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15,
  },
  transactionsContainer: {
    width: '90%',
  },
  transactionsTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#2E86C7',
  },
});
