import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../Themed';

export default function WithdrawEstimate() {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Estimated Network Fees</Text>
      </View>
      <View style={styles.fees}>
        <Text style={styles.transaction}>Withdrawal</Text>
        <Text style={styles.fee}>$0.09</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#4C249F',
    gap: 10
  },
  title: {
    backgroundColor: '#4C249F',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DECEFF'
  },
  fees: {
    backgroundColor: '#4C249F',
    flexDirection: 'row',
    gap: 20
  },
  transaction: {
    color: '#DECEFF'
  },
  fee: {
    fontWeight: 'bold',
  },
});
