import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '../Themed';
import { VaultProps } from '../../constants/Vaults';
import { approveSwimSesh } from '../../utilities/utils/approveSwimSesh';
import { useEffect, useState } from 'react';
import { goSwimming } from '../../utilities/utils/goSwimming';
import { checkSwimmable } from '../../utilities/utils/checkSwimmable';

interface DepositSwapProps {
  vault: VaultProps,
  amount: string
  reviewed: boolean | null // 'reviewed' prop
  setReview: (reviewed: boolean | null) => void // 'setReview' prop
  balanceMessage: string | null
  amountNotValidMessage: string | null // 'amountNotValidMessage' prop
  tooManyDecimalsMessage: string | null // 'tooManyDecimalsMessage' prop
}

export default function DepositSwap({ vault, amount, reviewed, setReview, balanceMessage, amountNotValidMessage, tooManyDecimalsMessage } : DepositSwapProps) {
  //edit setting to as seen a cabana.fi
  const [hash, setHash] = useState<string | null>(null)
  const [swimmable, setSwimmable] = useState<boolean>(false)

  const goingSwimming = async () => {
    const txn = await goSwimming(vault.prizeAsset, amount, vault.decimals)
    setHash(txn)
  }


  useEffect(()=>{
    
    const checkSwimming = async () => {
      setReview(null)
      const canSwim = await checkSwimmable(vault.prizeAsset, vault.decimals, amount)
      if(canSwim){setReview(false)}
      setSwimmable(canSwim)
    } 
    checkSwimming()
  },[amount])
  //console.log(swimmable)
  return (
    <View style={styles.container}>
      {
        amount == '0' || amount == '' || balanceMessage ||  amountNotValidMessage || tooManyDecimalsMessage
        ?(
            <View style={styles.enter}>
              <Text>
                Enter an amount
              </Text>
            </View>
        ) 
        :(
          <View style={styles.swimmable}>
            {
              !swimmable 
              ?(
                <View style={styles.approve}>
                  <View style={styles.approveAmount}>
                    <TouchableOpacity
                      style={styles.approveAmountAction}
                      onPress={()=> approveSwimSesh(vault.depositAsset, vault.prizeAsset, amount, vault.decimals)}//fix amount with prop
                    >
                      <Text style={styles.approveText}>Approve exact amount of {vault.depositSymbol}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.approveUnlimited}>
                    <TouchableOpacity
                      style={styles.approveUnlimitedAction}
                      onPress={()=> approveSwimSesh(vault.depositAsset, vault.prizeAsset, '999999999999', vault.decimals)}// static unlimted approvall
                    >
                      <Text style={styles.unlimtedText}>Approve unlimited amount of {vault.depositSymbol}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) 
              :(
                <View style={styles.actions}>
                  
                  {reviewed == false && (
                    <View style={styles.review}>
                      <TouchableOpacity
                        style={styles.reviewAction}
                        onPress={()=> setReview(true)}
                      >
                        <Text style={styles.depositText}>Review Deposit</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {reviewed && (
                    <View style={styles.deposit}>
                      <TouchableOpacity
                        style={styles.depositAction}
                        onPress={()=>{ goingSwimming()}}
                      >
                        <Text style={styles.depositText}>Deposit</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  
                </View>
              )
            }
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
    alignItems: 'center'
  },
  approve: {
    backgroundColor: '#4C249F',
    width: '100%',
    gap: 10
  },
  approveAmount: {
    backgroundColor: '#4C249F',
    width: '100%',
  },
  approveUnlimited: {
    backgroundColor: '#4C249F',
    width: '100%',
  },
  review: {
    backgroundColor: '#4C249F',
    width: '100%'
  },
  deposit: {
    backgroundColor: '#4C249F',
    width: '100%',
    
  },
  actions:{
    width: '100%',
  },
  swimmable:{
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
  
  depositAction: {
    width: '100%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  approveAmountAction: {
    width: '100%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  approveUnlimitedAction: {
    width: '100%',
    backgroundColor: '#4A3270',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  approveText:{
    color: '#36147D',
  },
  depositText:{
    color: '#36147D',
  },
  unlimtedText:{
    color: '#DECEFF',
  },
});
