import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { FontAwesome } from '@expo/vector-icons';

interface PoolDepositsProps{
  totalSavings: string
}
export default function PoolDeposits({ totalSavings } : PoolDepositsProps) {

  // display two vaults with d1eposit button
  // https://gov.pooltogether.com/t/v5-private-beta-launch-information/3021
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Your Deposits</Text>
        <Text style={styles.amount}>${totalSavings}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    alignItems: 'center',
    backgroundColor: '#21064E',
    
  },
  title: {
    fontSize: 17
  },
  amount: {
    fontSize: 30,
    fontWeight: '900'
  },
});