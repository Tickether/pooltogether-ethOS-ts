import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';

import LearnInfo from '../../components/account/LearnInfo';
import PoolDeposits from '../../components/account/PoolDeposits';
import PoolWinnings from '../../components/account/PoolWinnings';
import VaultInfo from '../../components/account/VaultInfo';
import { VaultProps, defaultVaults } from '../../constants/Vaults';
import PoolWeeklyOdds from '../../components/account/PoolWeeklyOdds';
import { useEffect, useState, useRef } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';
import { getTokenUSD } from '../../utilities/utils/getTokenUSD';
import Carousel from 'react-native-reanimated-carousel';
import { Text } from '../../components/Themed';


export default function AccountScreen() {

  // calculate price power and balance : pref from utils fuction
  const vaultsArray = Object.values(defaultVaults);
  const width = Dimensions.get('window').width;

  const [totalSavings, setTotalSaving] = useState<string | null>(null)

  const [prizeBalanaces, setPrizeBalances] = useState<string[] | null>(null)
  const [prizeBalanacesUSD, setPrizeBalanacesUSD] = useState<string[] | null>(null)
  const [tokenRatesUSD, setTokenRatesUSD] = useState<number[] | null>(null)

  const [activePrizeBalanaces, setActivePrizeBalanaces] = useState<string[] | null>(null)
  const [activeVaults, setActiveVaults] = useState<VaultProps[] | null>(null)
  
  const prevPrizeBalanaces = useRef<string[] | undefined>(undefined); 
  const prevTokenRatesUSD = useRef<number[] | undefined>(undefined); 
  
  useEffect(()=>{
    let getBalancesTimeOut : NodeJS.Timeout
    const getBalances = async () => {
      const PrizeBalances: string[] = [];
      for (let i = 0; i < vaultsArray.length; i++) {
        const vault = vaultsArray[i];
        const PrizeBalance = await getBalance(vault.prizeAsset, vault.decimals)
        PrizeBalances!.push(PrizeBalance!)
      }
      let PrevPrizeBalanaces = prevPrizeBalanaces!.current
      if ((PrizeBalances) !== (PrevPrizeBalanaces)) {
        setPrizeBalances(PrizeBalances)
        PrevPrizeBalanaces = PrizeBalances
      }
      getBalancesTimeOut = setTimeout(getBalances, 3000);
    }
    getBalances()
    return () => clearTimeout(getBalancesTimeOut);
  },[])
  //console.log(prizeBalanaces?.length)
  
  useEffect(()=>{
    let getCheckNotEmpty : NodeJS.Timeout
    const checkNotEmpty = async () => {
      if (prizeBalanaces!) {
        let vaults: VaultProps[] = []
        let balances: string[] = []
        for (let i = 0; i < vaultsArray.length; i++) {
          const vault = vaultsArray![i]
          const balance = prizeBalanaces![i]
          if (balance == '0.000000') {
            let newVaults = vaultsArray!.filter(item => item !== vault)
            let newBalances = prizeBalanaces!.filter(item => item !== balance)
            console.log(newVaults, newBalances)
            vaults = newVaults
            balances = newBalances
          }
          
        }
        setActiveVaults(vaults)
        setActivePrizeBalanaces(balances)
      }
      getCheckNotEmpty = setTimeout(checkNotEmpty, 3000);
    }
    checkNotEmpty()
    return () => clearTimeout(getCheckNotEmpty);
  },[prizeBalanaces])
  
  useEffect(()=> {
    let getTokenRatesUSDTimeOut : NodeJS.Timeout
    const getTokenRatesUSD = async () => {
      if (activeVaults !== null) {
        const TokenRatesUSD: number[] = [];
        for (let i = 0; i < activeVaults!.length; i++) {
          const vault = activeVaults![i];
          const TokenRateUSD =await getTokenUSD(vault.network, vault.depositAsset)
          TokenRatesUSD.push(TokenRateUSD!)
        }
        let PrevTokenRatesUSD = prevTokenRatesUSD!.current
        if (TokenRatesUSD !== PrevTokenRatesUSD ) {
          setTokenRatesUSD(TokenRatesUSD!)
          PrevTokenRatesUSD = TokenRatesUSD
        }
      }
      getTokenRatesUSDTimeOut = setTimeout(getTokenRatesUSD, 30000);
    }
    getTokenRatesUSD()
    return () => clearTimeout(getTokenRatesUSDTimeOut);
  },[activeVaults])
  console.log(tokenRatesUSD)

  
  useEffect(()=>{
    const PrizeBalanacesUSD: string[] = []; 
      if (activePrizeBalanaces !== null && tokenRatesUSD !== null) {
        for (let i = 0; i < activePrizeBalanaces.length; i++) {
          const PrizeBalanace = activePrizeBalanaces![i]
          const TokenRateUSD = tokenRatesUSD![i]
          const prizeBalanaceUSD = (TokenRateUSD! * Number(PrizeBalanace)).toFixed(2)
          PrizeBalanacesUSD.push(prizeBalanaceUSD)
        }
        setPrizeBalanacesUSD(PrizeBalanacesUSD)
        const total = Number(PrizeBalanacesUSD.reduce((acc, currentValue) => acc + parseFloat(currentValue), 0)).toFixed(2)

        setTotalSaving((total))
      }
  },[activePrizeBalanaces, tokenRatesUSD])
  //console.log(prizeBalanacesUSD)
  console.log('prize:', prizeBalanaces)
  console.log('activePrize:', activePrizeBalanaces)
  console.log('activePrizeUSD:', prizeBalanacesUSD)
  console.log('total:', totalSavings)
  

  

  return (
    <SafeAreaView style={styles.container}>
      <LearnInfo/>
      {/**Total Savings */}
      <PoolDeposits totalSavings={totalSavings!}/>
      {/**Map Vault INfo */}
      {
        activeVaults !== null && activePrizeBalanaces !== null && prizeBalanacesUSD !== null
        ?(
          <Carousel
            loop={false}
            width={width}
            height={width / 2}
            data={activeVaults!}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <VaultInfo key={activeVaults![index].depositAsset} vault={activeVaults![index]} prizeBalanace={activePrizeBalanaces![index]} prizeBalanaceUSD={prizeBalanacesUSD![index]}/>
            )}
          />
        )
        :(
          <><Text>No Balance</Text></>
        )
      }
      <PoolWeeklyOdds/>
      {/**Total Winnigs */}
      <PoolWinnings/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    gap: 30,
    backgroundColor: '#21064E',
  },
});
