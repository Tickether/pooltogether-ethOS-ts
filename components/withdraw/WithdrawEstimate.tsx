import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../Themed';

export default function WithdrawEstimate() {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Estimated Network Fees</Text>
      </View>
      <View style={styles.fee}>
        <Text>Withdrawal</Text>
        <Text>$0.09</Text>
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
  title: {

  },
  fee: {

  }
});
