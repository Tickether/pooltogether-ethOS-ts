import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View, } from '../Themed';
import { useEffect, useState } from 'react';
import { getAddress } from '../../utilities/utils/getAddress';
import { getBalance } from '../../utilities/utils/getBalance';
import { VaultProps } from '../../constants/Vaults';


interface VaultInfoProps {
  vault: VaultProps,
}


export default function DepositDex({ vault } : VaultInfoProps) {
  // currency conversion util
  const [amount, setAmount] = useState<string | null>(null);
  const [assetBalanace, setAssetBalance] = useState<string>('0')
  const [prizeBalanace, setPrizeBalance] = useState<string>('0')
  
 useEffect(()=>{
  const getBalances = async () => {
    const AssetBalance = await getBalance(vault.depositAsset, (getAddress()), vault.decimals)
    setAssetBalance(AssetBalance)
    const PrizeBalance = await getBalance(vault.prizeAsset, (getAddress()), vault.decimals)
    setPrizeBalance((PrizeBalance))
  }
  getBalances()
 })

 const MaxBid = () => {
  setAmount(assetBalanace)
 }
  
 

  
  return (
    <View style={styles.container}>
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
        </View>
        <View style={styles.balance}>
          <Text>{vault.depositSymbol}</Text>
          <Text>Balance: {assetBalanace}<TouchableOpacity><Text>Max</Text></TouchableOpacity></Text>
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
