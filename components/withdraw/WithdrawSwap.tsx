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
  const [hash, setHash] = useState<string | null>(null)
  //const [swimmable, setSwimmable] = useState<boolean>(false)

  const leavingPool = async () => {
    const txn = await leavePool(vault.prizeAsset, amount, vault.decimals)
    setHash(txn)
  }

  return (
    <View style={styles.container}>
      {
        amount == '0' || amount == '' || balanceMessage||  amountNotValidMessage || tooManyDecimalsMessage
        ?(
          <View style={styles.enter}>
            <Text>
              Enter an amount
            </Text>
          </View>
        ) 
        :(
          <View style={styles.actions}>
            {!reviewed && (
              <View style={styles.review}>
                <TouchableOpacity
                  style={styles.reviewAction}
                  onPress={()=> setReview(true)}
                >
                  <Text style={styles.withdrawText}>Review Withdraw</Text>
                </TouchableOpacity>
              </View>
            )}
            {reviewed && (
              <View style={styles.withdraw}>
                <TouchableOpacity
                  style={styles.withdrawAction}
                  onPress={()=>{ leavingPool()}}
                >
                  <Text style={styles.withdrawText}>Withdraw</Text>
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
    width: '100%',
    backgroundColor: '#4C249F',
  },
  enter: {
    backgroundColor: '#552EA4',
    width: '100%',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  actions:{
    width: '100%',
  },
  review: {
    width: '100%',
    
  },
  reviewAction: {
    width: '100%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  withdraw: {
    width: '100%',
  },
  withdrawAction: {
    width: '100%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  withdrawText:{
    color: '#36147D',
  },

});
