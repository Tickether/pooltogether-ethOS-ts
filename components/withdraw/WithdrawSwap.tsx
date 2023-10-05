import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '../Themed';
import { VaultProps } from '../../constants/Vaults';
import { leavePool } from '../../utilities/utils/leavePool';
import { useState } from 'react';

interface WithdrawSwapProps {
  vault: VaultProps,
  amount: string;
  reviewed: boolean | null // 'reviewed' prop
  setReview: (reviewed: boolean | null) => void // 'setReview' prop
  balanceMessage: string | null
  amountNotValidMessage: string | null // 'amountNotValidMessage' prop
  tooManyDecimalsMessage: string | null // 'tooManyDecimalsMessage' prop
}

export default function WithdrawSwap({ vault, amount, reviewed, setReview, balanceMessage, amountNotValidMessage, tooManyDecimalsMessage } : WithdrawSwapProps) {
  //edit setting to as seen a cabana.fi
  //const [reviewed, setReview] = useState<boolean>(false)
  //const [swimmable, setSwimmable] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      {
        amount == '0' || amount == ''  
        ?(
          <View>
            <View style={styles.enter}>
              <Text>
                Enter an amount
              </Text>
            </View>
          </View>
        ) 
        :(
          <View>
            {!reviewed && (
              <View style={styles.review}>
                <TouchableOpacity
                  onPress={()=> setReview(true)}
                >
                  <Text>Review Withdraw</Text>
                </TouchableOpacity>
              </View>
            )}
            {reviewed && (
              <View style={styles.withdraw}>
                <TouchableOpacity
                  onPress={()=>{ leavePool(vault.prizeAsset, amount, vault.decimals)}}
                >
                  <Text>Withdraw</Text>
                </TouchableOpacity>
              </View>
            )}
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
  enter: {

  },
  review: {

  },
  withdraw: {

  }
});
