import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

interface DepositEstimateProps {
  
  amount: string | null// 'amount' prop
  
}

import { Text, View } from '../Themed';

export default function DepositEstimate({ amount } : DepositEstimateProps) {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
      <View style={styles.chance}>
        <View>
            <Text style={styles.title}>Weekly Chances of Winning</Text>
        </View>
        <View>
            <Text style={styles.odds}>
              {amount != null && amount! != '' && amount! != '0' ? `${amount!} in 901` : '-' }
            </Text>
        </View>
      </View>
      <View style={styles.gas}>
        <View>
            <Text style={styles.title}>Estimated Network Fees</Text>
        </View>
        <View style={styles.fees}>
            <View style={styles.station}>
                <Text style={styles.transaction}>Approval</Text>
                <Text style={styles.fee}>$0.01</Text>
            </View>
            <View style={styles.station}>
                <Text style={styles.transaction}>Deposit</Text>
                <Text style={styles.fee}>$0.13</Text>
            </View>
            <View style={styles.station}>
                <Text style={styles.transaction}>Withdrawal</Text>
                <Text style={styles.fee}>$0.09</Text>
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4C249F',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 25
    
  },
  title: {
    backgroundColor: '#4C249F',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DECEFF',
  },
  chance: {
    backgroundColor: '#4C249F',
    alignItems: 'center'
  },
  odds: {
    backgroundColor: '#4C249F',
  },
  gas: {
    flexDirection: 'column'
  },
  station: {
    backgroundColor: '#4C249F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    paddingLeft: 30,
    paddingRight: 30
  },
  fees: {
    backgroundColor: '#4C249F',
  },
  transaction: {
    color: '#DECEFF',
    fontSize: 17
  },
  fee: {
    fontWeight: 'bold',
    fontSize: 17
  },
});
