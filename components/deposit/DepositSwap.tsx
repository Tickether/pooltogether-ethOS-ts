import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '../Themed';
import { VaultProps } from '../../constants/Vaults';
import { approveSwimSesh } from '../../utilities/utils/approveSwimSesh';
import { useState } from 'react';
import { goSwimming } from '../../utilities/utils/goSwimming';

interface DepositSwapProps {
  vault: VaultProps,
  amount: string;
}

export default function DepositSwap({ vault, amount } : DepositSwapProps) {
  //edit setting to as seen a cabana.fi
  const [reviewed, setReview] = useState<boolean>(false)
  return (
    <View style={styles.container}>
        <View style={styles.enter}>
          <Text>
            Enter an amount
          </Text>
        </View>

        <View style={styles.approve}>
          <TouchableOpacity
            onPress={()=> approveSwimSesh(vault.depositAsset, vault.prizeAsset, amount, vault.decimals)}//fix amount with prop
          >
            <Text>Approve exact amount of {vault.depositSymbol}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> approveSwimSesh(vault.depositAsset, vault.prizeAsset, '999999999999', vault.decimals)}// static unlimted approvall
          >
            <Text>Approve unlimited amount of {vault.depositSymbol}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.review}>
          <TouchableOpacity
            onPress={()=> setReview(true)}
          >
            <Text>Review Deposit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.deposit}>
          <TouchableOpacity
            onPress={()=>{ goSwimming(vault.prizeAsset, amount, vault.decimals)}}
          >
            <Text>Deposit</Text>
          </TouchableOpacity>
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
  enter: {

  },
  approve: {

  },
  review: {

  },
  deposit: {

  }
});
