import { StyleSheet } from 'react-native';

import { Text, View } from '../../Themed';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { VaultProps } from '../../../constants/Vaults';
import { useEffect, useState, useRef } from 'react';
import { getBalance } from '../../../utilities/utils/getBalance';
import { getTotalDeposits } from '../../../utilities/utils/getTotalDeposits';
import { truncatedAddress } from '../../../utilities/utils/truncateAddress';
import { getTokenUSD } from '../../../utilities/utils/getTokenUSD';


interface PrizePoolInfoProps {
  vault: VaultProps,
}


export default function PrizePoolInfo({ vault } : PrizePoolInfoProps) {

  const [prizeBalanace, setPrizeBalance] = useState<string>('0.00')
  const [totalAssets, setTotalAssets] = useState<string>(`0.00`)
  const [tokenRateUSD, setTokenRateUSD] = useState<number | null>(null)

  const prevPrizeBalanace = useRef<string | undefined>(undefined); 
  const prevTotalDeposits  = useRef<string | undefined>(undefined); 

  useEffect(()=>{
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

  useEffect(()=>{
    let getTotalAssetsTimeOut : NodeJS.Timeout
    const getTotalAssets = async () => {
      const totalDeposits = await getTotalDeposits(vault.prizeAsset, vault.decimals)
      if (totalDeposits !== prevTotalDeposits.current) {
        setTotalAssets(totalDeposits!);
        prevTotalDeposits!.current = totalDeposits; // Update the reference variable
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
        <View><Text style={styles.title}>{vault.prizeName}</Text></View>

        <View style={styles.info}>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>Your Balance</Text></View>
            <View style={styles.right}><Text>${prizeBalanaceUSD}</Text><Text style={styles.details}>{prizeBalanace} {vault.depositSymbol}</Text></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>Your Win Chance</Text></View>
            <View style={styles.right}><Text>1 in 1,080</Text></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>Prize Power</Text></View>
            <View style={styles.right}><Text>30,300</Text></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>TVL</Text></View>
            <View style={styles.right}><Text>${totalAssetsUSD}</Text><Text style={styles.details}>{vault.depositSymbol} {totalAssets}</Text></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>7D Prize Pool Contribution</Text></View>
            <View style={styles.right}><Text>1,597</Text><Text style={styles.details}>POOL</Text></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>Deposit Token</Text></View>
            <View style={styles.right}><Text>{vault.depositSymbol}  |</Text><Text style={styles.details}>{truncatedAddress(vault.depositAsset)}</Text><FontAwesome name="external-link" size={16} color='#A489D8'/></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>Prize Token</Text></View>
            <View style={styles.right}><Text>{vault.prizeSymbol}  |</Text><Text style={styles.details}>{truncatedAddress(vault.prizeAsset)}</Text><FontAwesome name="external-link" size={16} color='#A489D8'/></View>
          </View>
          <View style={styles.section}>
            <View style={styles.left}><Text style={styles.caption}>Yield Source</Text></View>
            <View style={styles.right}><Text style={styles.details}>app.aave.com</Text><FontAwesome name="external-link" size={16} color='#A489D8'/></View>
          </View>
        </View>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsWithdraw}>
            <Link href={{pathname: "/withdraw", params: { vault: JSON.stringify(vault)}}}><Text style={styles.withdrawText}>Withdraw</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionsDeposit}>
            <Link href={{pathname: "/deposit", params: { vault: JSON.stringify(vault)}}}><Text style={styles.depositText}>Deposit</Text></Link>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#21064E',
  },
  caption: {
    color: '#D2CEFF'
  },
  details: {
    color: '#BEADFF'
  },
  title: {
    backgroundColor: '#21064E',
    fontSize: 30,
    fontWeight: 'bold'
  },
  actions: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20
  },
  actionsDeposit:{
    width: '30%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5,
    paddingTop: 10, 
    paddingBottom: 10,
  },
  actionsWithdraw:{
    width: '30%',
    backgroundColor: '#4A3270',
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
  info: {
    backgroundColor: '#21064E',
    width: '100%',
    gap: 5
  },
  section: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    backgroundColor: '#21064E',
  },
  right: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
});