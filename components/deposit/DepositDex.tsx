import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View, } from '../Themed';
import { useEffect, useState } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';
import { VaultProps } from '../../constants/Vaults';
import { checkBalance } from '../../utilities/utils/checkBalance';


interface DepositDexProps {
  vault: VaultProps
  amount: string // 'amount' prop
  setAmount: (amount: string) => void // 'setAmount' prop
  reviewed: boolean | null
  balanceMessage: string | null // 'balanceMessage' prop
  amountNotValidMessage: string | null // 'amountNotValidMessage' prop
  tooManyDecimalsMessage: string | null // 'tooManyDecimalsMessage' prop
}


export default function DepositDex({ vault, amount, setAmount, reviewed, balanceMessage, amountNotValidMessage, tooManyDecimalsMessage } : DepositDexProps) {
  // currency conversion util
  const [assetBalanace, setAssetBalance] = useState<string>('0')
  const [prizeBalanace, setPrizeBalance] = useState<string>('0')

  
 useEffect(()=>{
  const getBalances = async () => {
    const AssetBalance = await getBalance(vault.depositAsset, vault.decimals)
    setAssetBalance(AssetBalance)
    const PrizeBalance = await getBalance(vault.prizeAsset, vault.decimals)
    setPrizeBalance((PrizeBalance))
  }
  getBalances()
 })

 
 console.log(amountNotValidMessage)

 const MaxBid = () => {
  setAmount(assetBalanace)
 }
  
 

  
  return (
    <View style={styles.container}>
      {
        !reviewed 
        ?(
          <View>
            <View style={styles.deposit}>
              <View style={styles.amount}>
                <TextInput 
                  style={styles.input}
                  placeholder='0'
                  keyboardType="numeric"
                  value={amount!}
                  onChangeText={setAmount}
                />
                <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
                {
                  balanceMessage! && (
                    <Text>{balanceMessage}</Text>
                  )
                }
                {
                  amountNotValidMessage! && (
                    <Text>{amountNotValidMessage}</Text>
                  )
                }
                {
                  tooManyDecimalsMessage! && !balanceMessage &&(
                    <Text>{tooManyDecimalsMessage}</Text>
                  )
                }
              </View>
              <View style={styles.balance}>
                <Text>{vault.depositSymbol}</Text>
                <Text>Balance: {assetBalanace}<TouchableOpacity><Text>Max</Text></TouchableOpacity></Text>
                {
                  balanceMessage! && (
                    <Text></Text>
                  )
                }
              </View>
            </View>
            <View style={styles.prize}>
              <View style={styles.amount}>
                <TextInput 
                  style={styles.input}
                  placeholder='0'
                  keyboardType="numeric"
                  value={amount!}
                  onChangeText={setAmount}
                />
                <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
              </View>
              <View style={styles.balance}>
                <Text>{vault.prizeSymbol}</Text>
                <Text>Balance: {prizeBalanace}</Text>
              </View>
            </View>
          </View>
        ) 
        :(
          <View>
            <View style={styles.deposit}>
              <View style={styles.amount}>
                <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
              </View>
              <View style={styles.balance}>
                <Text>{vault.depositSymbol}</Text>
              </View>
            </View>
            <View style={styles.prize}>
              <View style={styles.amount}>
                <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
              </View>
              <View style={styles.balance}>
                <Text>{vault.prizeSymbol}</Text>
              </View>
            </View>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deposit: {
    
   flexDirection: 'row'
  },
  prize: {
    flexDirection: 'row'
  },
  amount: {
    flexDirection: 'column',
    backgroundColor: 'red',
    justifyContent: 'flex-start'
  
  },
  input: {
    borderWidth: 1,
  },
  balance: {
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'flex-end'
  }
});
