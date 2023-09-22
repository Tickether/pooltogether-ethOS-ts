import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '..//Themed';

export default function WithdrawDex() {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
      <View style={styles.prize}>
        <View style={styles.amount}>
          <Text>1</Text>
          <Text>1</Text>
        </View>
        <View style={styles.balance}>
          <Text>{`PTUSDC`}</Text>
          <Text>Balance: {`0`}<TouchableOpacity><Text>Max</Text></TouchableOpacity></Text>
        </View>
      </View>
      <View style={styles.withdraw}>
        <View style={styles.amount}>
          <Text>1</Text>
          <Text>1</Text>
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
  
  },
  withdraw: {
  
  },
  amount: {
  
  }
  ,
  balance: {
  
  }
});
