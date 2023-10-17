import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import { Text, View, } from '../Themed';
import { useEffect, useState } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';
import { VaultProps } from '../../constants/Vaults';
import { getTokenUSD } from '../../utilities/utils/getTokenUSD';


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
  const [tokenRateUSD, setTokenRateUSD] = useState<number | null>(null)


  
 useEffect(()=>{
  const getBalances = async () => {
    const AssetBalance = await getBalance(vault.depositAsset, vault.decimals)
    setAssetBalance(AssetBalance!)
    const PrizeBalance = await getBalance(vault.prizeAsset, vault.decimals)
    setPrizeBalance((PrizeBalance!))
  }
  getBalances()
 })
 
 console.log(amountNotValidMessage)

 const MaxBid = () => {
  setAmount(assetBalanace)
 }

 useEffect(()=> {
    const getTokenRateUSD = async () => {
      const TokenRateUSD =await getTokenUSD(vault.network, vault.depositAsset)
      setTokenRateUSD(TokenRateUSD!)
    }
  getTokenRateUSD()
  },[])

  const amountUSD = (tokenRateUSD! * Number(amount)).toFixed(2)

  
 

  
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
                  inputMode="numeric"
                  //keyboardType="numeric"
                  value={amount! ? amount : ''}
                  onChangeText={setAmount}
                  //keyboardAppearance='handled'
                  //keyboardDismissMode="none"
                />
                <Text style={styles.bottomText}>${amount! ? amountUSD : '0.000000'}{/**pass number of tokens thru cypro price coversion*/}</Text>
                {
                  balanceMessage! && (
                    <Text style={styles.error}>{balanceMessage}</Text>
                  )
                }
                {
                  amountNotValidMessage! && amount! && (
                    <Text style={styles.error}>{amountNotValidMessage}</Text>
                  )
                }
                {
                  tooManyDecimalsMessage! && !balanceMessage && (
                    <Text style={styles.error}>{tooManyDecimalsMessage}</Text>
                  )
                }
              </View>
              <View style={styles.balance}>
                <Text style={styles.topText}>{vault.depositSymbol}</Text>
                <View style={styles.maxBalance}>
                  <Text style={styles.bottomText}>Balance: {assetBalanace}</Text><TouchableOpacity style={styles.max} onPress={()=> MaxBid()}><Text style={styles.bottomText}>Max</Text></TouchableOpacity>
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
                  value={amount! ? amount : ''}
                  onChangeText={setAmount}
                />
                <Text style={styles.bottomText}>${amount! ? amountUSD : '0.000000'}{/**pass number of tokens thru cypro price coversion*/}</Text>
              </View>
              <View style={styles.balance}>
                <Text style={styles.topText}>{vault.prizeSymbol}</Text>
                <Text style={styles.bottomText}>Balance: {prizeBalanace}</Text>
              </View>
            </View>
          </View>
        ) 
        :(
          <View style={styles.reviewed}>
            <View style={styles.deposit}>
              <View style={styles.amount}>
                <Text style={styles.topText}>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
              </View>
              <View style={styles.balance}>
                <Text style={styles.topText}>{vault.depositSymbol}</Text>
              </View>
            </View>
            <View style={styles.prize}>
              <View style={styles.amount}>
                <Text style={styles.topText}>{amount!}{/**pass number of tokens thru cypro price coversion*/}</Text>
              </View>
              <View style={styles.balance}>
                <Text style={styles.topText}>{vault.prizeSymbol}</Text>
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
    width: '100%',
    backgroundColor: '#4C249F',
  },
  review: {
    backgroundColor: '#4C249F',
    width: '100%',
    gap: 5,
    alignItems: 'center',
    
  },
  reviewed: {
    backgroundColor: '#4C249F',
    width: '100%',
    gap: 5,
    alignItems: 'center',
  },
  deposit: {
    backgroundColor: '#5D38A9',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 10, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  prize: {
    backgroundColor: '#5D38A9',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 10, 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  amount: {
    backgroundColor: '#5D38A9',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 5
  
  },
  input: {
    fontSize: 23,
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#D7C6FB',
    fontSize: 17
  },
  topText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  balance: {
    backgroundColor: '#5D38A9',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 3
  },
  maxBalance:{
    flexDirection: 'row',
    backgroundColor: '#5D38A9',
    gap: 5
  },
  max: {
    
  },
  error: {
    color: '#EBA7B4'
  }
  
  
});
