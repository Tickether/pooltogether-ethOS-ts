import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import WithdrawSwap from '../components/withdraw/WithdrawSwap';
import WithdrawDex from '../components/withdraw/WithdrawDex';
import WithdrawEstimate from '../components/withdraw/WithdrawEstimate';
import { useLocalSearchParams } from 'expo-router';

import { useEffect, useState } from 'react';

export default function WithdrawModal() {
  //edit setting to as seen a cabana.fi

  const params = useLocalSearchParams();
  const { vault } = params;

  const [amount, setAmount] = useState('0')
  const [reviewed, setReview] = useState<boolean | null>(null)


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Withdraw from {`Prize USDC`} on Optimism</Text>
      </View>

      <WithdrawDex vault={JSON.parse(vault.toLocaleString())} amount={amount} setAmount={setAmount} reviewed={reviewed}  />
      
      <WithdrawEstimate/>
      
      <WithdrawSwap vault={JSON.parse(vault.toLocaleString())} amount={amount} reviewed={reviewed} setReview={setReview} />
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
