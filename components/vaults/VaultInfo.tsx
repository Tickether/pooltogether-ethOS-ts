import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { VaultProps } from '../../constants/Vaults';
import { useEffect, useState, useRef } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';
import { getTotalDeposits } from '../../utilities/utils/getTotalDeposits';
import { getTokenUSD } from '../../utilities/utils/getTokenUSD';

interface VaultInfoProps {
  vault: VaultProps,
}

export default function VaultInfo({ vault } : VaultInfoProps) {

  // display vault with deposit button
  // calculate price power and balance : pref from utils fuction
  const [prizeBalanace, setPrizeBalance] = useState<string>('0.000000')
  const [totalAssets, setTotalAssets] = useState<string>(`0.00`)
  const [tokenRateUSD, setTokenRateUSD] = useState<number | null>(null)

  const prevPrizeBalanace = useRef<string | undefined>(undefined); 
  const prevTotalAssets  = useRef<string | undefined>(undefined); 

  useEffect(()=> {
    let getBalanceTimeOut : NodeJS.Timeout
    const getBalance_ = async () => {
      
      const PrizeBalance = await getBalance(vault.prizeAsset, vault.decimals)
      if (PrizeBalance !== prevPrizeBalanace.current) {
        setPrizeBalance((PrizeBalance!))
        prevPrizeBalanace!.current = PrizeBalance; // Update the reference variable
      }
      getBalanceTimeOut = setTimeout(getBalance_, 6000);
    }
    getBalance_()
    return () => clearTimeout(getBalanceTimeOut);
  },[])

  useEffect(()=> {
    let getTotalAssetsTimeOut : NodeJS.Timeout
    const getTotalAssets = async () => {
      const TotalAssets = await getTotalDeposits(vault.prizeAsset, vault.decimals)
      if (TotalAssets !== prevTotalAssets.current) {
        setTotalAssets(TotalAssets!);
        prevTotalAssets!.current = TotalAssets; // Update the reference variable
      }
      getTotalAssetsTimeOut = setTimeout(getTotalAssets, 6000);
    }
    getTotalAssets()
    return () => clearTimeout(getTotalAssetsTimeOut);
  },[])

  useEffect(()=> {
    const getTokenRateUSD = async () => {
      const TokenRateUSD =await getTokenUSD(vault.network, vault.depositAsset)
      setTokenRateUSD(TokenRateUSD!)
    }
    getTokenRateUSD()
  },[])

  const prizeBalanaceUSD = (tokenRateUSD! * Number(prizeBalanace)).toFixed(2)
  const totalAssetsUSD = (tokenRateUSD! * Number(totalAssets)).toFixed(2)

  return (
    <View style={styles.container}>
      
      <View style={styles.top}>
          <Link href={{pathname: "/vault", params: { vault: JSON.stringify(vault)}}}>
            <View style={styles.caption}>
              <Text style={styles.name}>{vault.prizeName}</Text>
              <Text style={styles.symbol}>{vault.prizeSymbol}</Text>
            </View>
          </Link>
      </View>

      <View style={styles.mid}>
        {
          prizeBalanace != '0.000000' && (
            <View style={styles.balance}>
              
              <Text style={styles.title}>Your Balance</Text>
            
              <View style={styles.balance}>
                <Text>${prizeBalanaceUSD}</Text>
                <Text style={styles.title}>{prizeBalanace} {vault.depositSymbol}</Text>
              </View>
            
            </View>
          )
        }
        <View style={styles.power}>
          <View style={styles.left}>
            <Text style={styles.title}>Prize Power</Text>
            <FontAwesome
              name="info-circle"
              size={16}
              color='#A3A1FF'
            />
          </View>
          <View style={styles.right}>
            <Text>88.77%</Text>
          </View>
        </View>
        <View style={styles.total}>
         
          <Text style={styles.title}>Total Deposits</Text>
          <View style={styles.total}>
            <Text>${totalAssetsUSD}</Text>
            <Text style={styles.title}>{totalAssets} {vault.depositSymbol}</Text>
          </View>
          
        </View>
      </View>

      <View style={styles.down}>
        {
          prizeBalanace == '0.000000' 
          ?(
            <View style={styles.action}>
              <TouchableOpacity style={styles.actionDeposit}>
                <Link href={{pathname: "/deposit", params: { vault: JSON.stringify(vault)}}}><Text style={styles.depositText}>Deposit</Text></Link>
              </TouchableOpacity>
            </View>
          )
          :(
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionsDeposit}>
                <Link href={{pathname: "/deposit", params: { vault: JSON.stringify(vault)}}}><Text style={styles.depositText}>Deposit</Text></Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionsWithdraw}>
                <Link href={{pathname: "/withdraw", params: { vault: JSON.stringify(vault)}}}><Text style={styles.withdrawText}>Withdraw</Text></Link>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    backgroundColor: '#371D60',
    borderWidth: 1,
    borderColor: '#371D60',
    borderRadius: 5, 
    alignSelf: 'center',
    padding: 20,
    gap: 20,
  },
  top: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  caption: {
    backgroundColor: '#4A3270',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5,
    padding: 10,
    gap: 5
  },
  name: {

  },
  symbol: {
    color: '#A3A1FF',

  },
  action: {
    width: '100%',
  },
  actionDeposit:{
    width: '100%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  depositText:{
    color: '#36147D',
  },
  withdrawText:{
    color: '#DECEFF',
  },
  actions: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    width: '100%',
    
  },
  actionsDeposit:{
    width: '50%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5,
    paddingTop: 10, 
    paddingBottom: 10,
  },
  actionsWithdraw:{
    width: '50%',
    backgroundColor: '#4A3270',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  mid: {
    backgroundColor: '#371D60',
    gap: 3
  },
  title:{
    color: '#A3A1FF',
  },
  down: {
    backgroundColor: '#371D60',
    alignItems: 'center'
  },
  balance:{
    backgroundColor: '#371D60',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5
  },
  power: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3
  },
  right: {
    backgroundColor: '#371D60',
    flexDirection: 'row'
  },
  total: {
    backgroundColor: '#371D60',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 5
  },
});
