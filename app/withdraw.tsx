import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import WithdrawSwap from '../components/withdraw/WithdrawSwap';
import WithdrawDex from '../components/withdraw/WithdrawDex';
import WithdrawEstimate from '../components/withdraw/WithdrawEstimate';

export default function WithdrawModal() {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Withdraw from {`Prize USDC`} on Optimism</Text>
      </View>

      <WithdrawDex/>
      
      <WithdrawEstimate/>
      
      <WithdrawSwap/>
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
    
  }
});
