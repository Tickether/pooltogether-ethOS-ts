import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View } from '..//Themed';
import { useState } from 'react';


export default function WithdrawDex() {
  // currency conversion util
  // balance of deposit
  // balance of prize
  const [amount, setAmount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.prize}>
        <View style={styles.amount}>
          <TextInput
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
          />
          <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
        </View>
        <View style={styles.balance}>
          <Text>{`PTUSDC`}</Text>
          <Text>Balance: {`0`}<TouchableOpacity><Text>Max</Text></TouchableOpacity></Text>
        </View>
      </View>
      <View style={styles.withdraw}>
        <View style={styles.amount}>
          <TextInput
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
          />
          <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
        </View>
        <View style={styles.balance}>
          <Text>{`USDC`}</Text>
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
  prize: {
    flexDirection: 'row'
  },
  withdraw: {
    flexDirection: 'row'
  },
  amount: {
  
  },
  input: {
    borderWidth: 1,
  },
  balance: {
  
  }
});
