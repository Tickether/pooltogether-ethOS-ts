import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '../Themed';
import { VaultProps } from '../../constants/Vaults';
import { leavePool } from '../../utilities/utils/leavePool';

interface WithdrawSwapProps {
  vault: VaultProps,
  amount: string;
}

export default function WithdrawSwap({ vault, amount } : WithdrawSwapProps) {
  //edit setting to as seen a cabana.fi
  return (
    <View style={styles.container}>
        <View style={styles.enter}>
          <Text>
            Enter an amount
          </Text>
        </View>
        <View style={styles.review}>
          <TouchableOpacity>
            <Text>Review Withdraw</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.withdraw}>
          <TouchableOpacity
            onPress={()=>{ leavePool(vault.prizeAsset, amount, vault.decimals)}}
          >
            <Text>Withdraw</Text>
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
  review: {

  },
  withdraw: {

  }
});
