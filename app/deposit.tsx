import { SafeAreaView, StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import DepositSwap from '../components/deposit/DepositSwap';
import DepositDex from '../components/deposit/DepositDex';
import DepositEstimate from '../components/deposit/DepositEstimate';
import { VaultProps } from '../constants/Vaults';
import { useLocalSearchParams } from 'expo-router';

import { useEffect, useState } from 'react';
import { checkBalance } from '../utilities/utils/checkBalance';
import { amountNotValid } from '../utilities/utils/amountNotValid';
import { tooManyDecimals } from '../utilities/utils/tooManyDecimals';
import LearnRisk from '../components/deposit/LearnRisk';

export default function DepositModal() {
  //edit setting to as seen a cabana.fi

  const params = useLocalSearchParams();
  const { vault } = params;
  const vault_: VaultProps = JSON.parse(vault.toLocaleString())

  const [amount, setAmount] = useState<string | null>(null)
  const [reviewed, setReview] = useState<boolean | null>(null)
  const [balanceMessage, setBalanceMessage] = useState<string | null>(null)
  const [amountNotValidMessage, setAmountNotValidMessage] = useState<string| null>(null)
  const [tooManyDecimalsMessage, setTooManyDecimalsMessage] = useState<string| null>(null)

  useEffect(()=>{
    const balanceCheck = async() => {
      const balancedMessage = await checkBalance(vault_.depositAsset, vault_.depositSymbol, vault_.decimals, amount!)
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
        <Text style={styles.title}>Deposit to {vault_.prizeName} on Optimism</Text>
      </View>
      <DepositDex vault={vault_} amount={amount!} setAmount={setAmount} reviewed={reviewed} balanceMessage={balanceMessage} amountNotValidMessage={amountNotValidMessage} tooManyDecimalsMessage={tooManyDecimalsMessage} />
      {
        amount == null
        ?(
          <LearnRisk/>
        )
        :(
          <DepositEstimate amount={amount!}/>
        )
      }
      
      <DepositSwap vault={vault_} amount={amount!} reviewed={reviewed} setAmount={setAmount} setReview={setReview} balanceMessage={balanceMessage} amountNotValidMessage={amountNotValidMessage} tooManyDecimalsMessage={tooManyDecimalsMessage} />
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
  },
});
