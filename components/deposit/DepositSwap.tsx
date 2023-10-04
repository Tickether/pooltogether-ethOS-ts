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
  setReview: (reviewed: boolean | null) => void; // 'setReview' prop
}

export default function DepositSwap({ vault, amount, reviewed, setReview } : DepositSwapProps) {
  //edit setting to as seen a cabana.fi
  //const [reviewed, setReview] = useState<boolean | null>(null)
  const [swimmable, setSwimmable] = useState<boolean>(false)



  useEffect(()=>{
    
    const checkSwimming = async () => {
      setReview(null)
      const canSwim = await checkSwimmable(vault.prizeAsset, vault.decimals, amount)
      if(canSwim){setReview(false)}
      setSwimmable(canSwim)
    } 
    checkSwimming()
  },[amount])
  console.log(swimmable)
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
            {
              !swimmable 
              ?(
                <View>
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
                </View>
              ) 
              :(
                <View>
                  
                  {reviewed == false && (
                    <View style={styles.review}>
                      <TouchableOpacity
                        onPress={()=> setReview(true)}
                      >
                        <Text>Review Deposit</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                  {reviewed && (
                    <View style={styles.deposit}>
                      <TouchableOpacity
                        onPress={()=>{ goSwimming(vault.prizeAsset, amount, vault.decimals)}}
                      >
                        <Text>Deposit</Text>
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
