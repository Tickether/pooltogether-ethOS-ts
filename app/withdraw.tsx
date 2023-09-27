import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import WithdrawSwap from '../components/withdraw/WithdrawSwap';
import WithdrawDex from '../components/withdraw/WithdrawDex';
import WithdrawEstimate from '../components/withdraw/WithdrawEstimate';
import { useLocalSearchParams } from 'expo-router';

export default function WithdrawModal() {
  //edit setting to as seen a cabana.fi

  const params = useLocalSearchParams();
  const { vault } = params;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Withdraw from {`Prize USDC`} on Optimism</Text>
      </View>

      <WithdrawDex vault={JSON.parse(vault.toLocaleString())}/>
      
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
