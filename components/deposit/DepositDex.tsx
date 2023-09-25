import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View, } from '../Themed';
import { useState } from 'react';

export default function DepositDex() {
  // currency conversion util
  const [amount, setAmount] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <View style={styles.deposit}>
        <View style={styles.amount}>
          <TextInput 
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            value={amount!}
            onChangeText={setAmount}
          />
          <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
        </View>
        <View style={styles.balance}>
          <Text>{`USDC`}</Text>
          <Text>Balance: {`0`}<TouchableOpacity><Text>Max</Text></TouchableOpacity></Text>
        </View>
      </View>
      <View style={styles.prize}>
        <View style={styles.amount}>
          <TextInput 
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            value={amount!}
            onChangeText={setAmount}
          />
          <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
        </View>
        <View style={styles.balance}>
          <Text>{`PTUSDC`}</Text>
          <Text>Balance: {`0`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deposit: {
    
   flexDirection: 'row'
  },
  prize: {
    flexDirection: 'row'
  },
  amount: {
    flexDirection: 'column',
    backgroundColor: 'red',
    justifyContent: 'flex-start'
  
  },
  input: {
    borderWidth: 1,
  },
  balance: {
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'flex-end'
  }
});
