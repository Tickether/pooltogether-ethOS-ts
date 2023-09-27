import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View } from '..//Themed';
import { useEffect, useState } from 'react';
import { VaultProps } from '../../constants/Vaults';
import { getBalance } from '../../utilities/utils/getBalance';
import { getAddress } from '../../utilities/utils/getAddress';

interface VaultInfoProps {
  vault: VaultProps,
}

export default function WithdrawDex({ vault } : VaultInfoProps) {
  // currency conversion util
  // balance of deposit
  // balance of prize
  const [amount, setAmount] = useState<number>(0);
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


  return (
    <View style={styles.container}>
      <View style={styles.prize}>
        <View style={styles.amount}>
          <TextInput
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
          />
          <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
        </View>
        <View style={styles.balance}>
          <Text>{vault.prizeSymbol}</Text>
          <Text>Balance: {prizeBalanace}<TouchableOpacity><Text>Max</Text></TouchableOpacity></Text>
        </View>
      </View>
      <View style={styles.withdraw}>
        <View style={styles.amount}>
          <TextInput
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
          />
          <Text>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
        </View>
        <View style={styles.balance}>
          <Text>{vault.depositSymbol}</Text>
          <Text>Balance: {assetBalanace}</Text>
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
  prize: {
    flexDirection: 'row'
  },
  withdraw: {
    flexDirection: 'row'
  },
  amount: {
  
  },
  input: {
    borderWidth: 1,
  },
  balance: {
  
  }
});
