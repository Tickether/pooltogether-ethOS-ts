import { SafeAreaView, StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import WithdrawSwap from '../components/withdraw/WithdrawSwap';
import WithdrawDex from '../components/withdraw/WithdrawDex';
import WithdrawEstimate from '../components/withdraw/WithdrawEstimate';
import { useLocalSearchParams } from 'expo-router';

import { useEffect, useState } from 'react';
import { checkBalance } from '../utilities/utils/checkBalance';
import { VaultProps } from '../constants/Vaults';
import { amountNotValid } from '../utilities/utils/amountNotValid';
import { tooManyDecimals } from '../utilities/utils/tooManyDecimals';

export default function WithdrawModal() {
  //edit setting to as seen a cabana.fi

  const params = useLocalSearchParams();
  const { vault } = params;
  const vault_ : VaultProps = JSON.parse(vault.toLocaleString())

  const [amount, setAmount] = useState<string | null>(null)
  const [reviewed, setReview] = useState<boolean | null>(null)
  const [balanceMessage, setBalanceMessage] =useState<string| null>(null)
  const [amountNotValidMessage, setAmountNotValidMessage] = useState<string| null>(null)
  const [tooManyDecimalsMessage, setTooManyDecimalsMessage] = useState<string| null>(null)


  useEffect(()=>{
    const balanceCheck = async() => {
      const balancedMessage = await checkBalance(vault_.prizeAsset, vault_.prizeSymbol, vault_.decimals, amount!)
      setBalanceMessage(balancedMessage!)
    }
    balanceCheck()
  },[amount])

  useEffect(()=>{
    const amountNotValidCheck = async() => {
      const amountValidationMessage = amountNotValid(amount!)
      setAmountNotValidMessage(amountValidationMessage!)
    }
    amountNotValidCheck()
  },[amount])

  useEffect(()=>{
    const tooManyDecimalsCheck = () => {
      const tooManyDecimalMessage = tooManyDecimals(amount!, vault_.decimals)
      setTooManyDecimalsMessage(tooManyDecimalMessage!)
    }
    tooManyDecimalsCheck()
  },[amount])

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Withdraw from {vault_.prizeName} on Optimism</Text>
      </View>

      <WithdrawDex vault={vault_} amount={amount!} setAmount={setAmount} reviewed={reviewed}  balanceMessage={balanceMessage} amountNotValidMessage={amountNotValidMessage} tooManyDecimalsMessage={tooManyDecimalsMessage} />
      
      <WithdrawEstimate/>
      
      <WithdrawSwap vault={vault_} amount={amount!} setAmount={setAmount} reviewed={reviewed} setReview={setReview} balanceMessage={balanceMessage} amountNotValidMessage={amountNotValidMessage} tooManyDecimalsMessage={tooManyDecimalsMessage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    gap: 50,
    backgroundColor: '#4C249F',
  },
  title: {
    backgroundColor: '#4C249F',
    fontSize: 20, 
    fontWeight: 'bold',
  }
});
