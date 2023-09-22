import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../Themed';

export default function DepositEstimate() {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
      <View style={styles.chance}>
        <View style={styles.title}>
            <Text>Estimated Network Fees</Text>
        </View>
        <View style={styles.odds}>
            <Text>-</Text>
        </View>
      </View>
      <View style={styles.fees}>
        <View style={styles.title}>
            <Text>Estimated Network Fees</Text>
        </View>
        <View style={styles.fee}>
            <View>
                <Text>Approval</Text>
                <Text>$0.01</Text>
            </View>
            <View>
                <Text>Deposit</Text>
                <Text>$0.13</Text>
            </View>
            <View>
                <Text>Withdrawal</Text>
                <Text>$0.09</Text>
            </View>
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
  title: {

  },
  chance: {

  },
  odds: {

  },
  fees: {

  },
  fee: {

  }
});
