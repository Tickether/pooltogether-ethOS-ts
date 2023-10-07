import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View, } from '../Themed';
import { useEffect, useState } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';
import { VaultProps } from '../../constants/Vaults';


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
          <View style={styles.review}>
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
                <Text style={styles.topText}>{vault.depositSymbol}</Text>
                <View style={styles.maxBalance}>
                  <Text>Balance: {assetBalanace}</Text><TouchableOpacity style={styles.max} onPress={()=> MaxBid()}><Text>Max</Text></TouchableOpacity>
                </View>
                
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
                <Text style={styles.topText}>{vault.prizeSymbol}</Text>
                <Text>Balance: {prizeBalanace}</Text>
              </View>
            </View>
          </View>
        ) 
        :(
          <View style={styles.reviewed}>
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
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  deposit: {
    marginBottom: 20,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  balance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prize: {
    marginBottom: 20,
  },
});
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'orange'
  },
  review: {
    width: '100%',
    gap: 5,
    alignItems: 'center'
  },
  reviewed: {
    width: '100%',
  },
  deposit: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prize: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 5
  
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    color: 'white'
  },
  bottomText: {

  },
  dexWrapper: {

  },
  topText: {
    fontSize: 18
  },
  balance: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 3
  },
  maxBalance:{
    flexDirection: 'row'
  },
  max: {
    backgroundColor: 'red'
  }
  
  
});
