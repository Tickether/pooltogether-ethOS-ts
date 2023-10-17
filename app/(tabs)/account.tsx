import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';

import LearnInfo from '../../components/account/LearnInfo';
import PoolDeposits from '../../components/account/PoolDeposits';
import PoolWinnings from '../../components/account/PoolWinnings';
import VaultInfo from '../../components/account/VaultInfo';
import { defaultVaults } from '../../constants/Vaults';
import PoolWeeklyOdds from '../../components/account/PoolWeeklyOdds';
import { useEffect, useState, useRef } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';
import { getTokenUSD } from '../../utilities/utils/getTokenUSD';
import Carousel from 'react-native-reanimated-carousel';


export default function AccountScreen() {

  // calculate price power and balance : pref from utils fuction
  const vaultsArray = Object.values(defaultVaults);
  const width = Dimensions.get('window').width;

  const [totalSavings, setTotalSaving] = useState<string | null>(null)

  const [prizeBalanaces, setPrizeBalances] = useState<string[] | null>(null)
  const [prizeBalanacesUSD, setPrizeBalanacesUSD] = useState<string[] | null>(null)
  const [tokenRatesUSD, setTokenRatesUSD] = useState<number[] | null>(null)
  
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
      getBalancesTimeOut = setTimeout(getBalances, 6000);
    }
    getBalances()
    return () => clearTimeout(getBalancesTimeOut);
  },[])
  //console.log(prizeBalanaces?.length)
  

  
  useEffect(()=> {
    let getTokenRatesUSDTimeOut : NodeJS.Timeout
    const getTokenRatesUSD = async () => {
      const TokenRatesUSD: number[] = [];
      for (let i = 0; i < vaultsArray.length; i++) {
        const vault = vaultsArray![i];
        const TokenRateUSD =await getTokenUSD(vault.network, vault.depositAsset)
        TokenRatesUSD.push(TokenRateUSD!)
      }
      let PrevTokenRatesUSD = prevTokenRatesUSD!.current
      if (TokenRatesUSD !== PrevTokenRatesUSD ) {
        setTokenRatesUSD(TokenRatesUSD!)
        PrevTokenRatesUSD = TokenRatesUSD
      }
      getTokenRatesUSDTimeOut = setTimeout(getTokenRatesUSD, 60000);
    }
    getTokenRatesUSD()
    return () => clearTimeout(getTokenRatesUSDTimeOut);
  },[])

  
  useEffect(()=>{
    const getTokenRatesUSD = () => {
      const PrizeBalanacesUSD: string[] = []; 
      if (prizeBalanaces !== null && tokenRatesUSD !== null) {
        for (let i = 0; i < prizeBalanaces.length; i++) {
          const PrizeBalanace = prizeBalanaces[i]
          const TokenRateUSD = tokenRatesUSD[i]
          const prizeBalanaceUSD = (TokenRateUSD! * Number(PrizeBalanace)).toFixed(2)
          PrizeBalanacesUSD.push(prizeBalanaceUSD)
        }
        setPrizeBalanacesUSD(PrizeBalanacesUSD)
        const total = Number(PrizeBalanacesUSD.reduce((acc, currentValue) => acc + parseFloat(currentValue), 0)).toFixed(2)

        setTotalSaving((total))
      }
    }
    getTokenRatesUSD()
  },[prizeBalanaces, tokenRatesUSD])
  console.log(prizeBalanacesUSD)
  

  

  return (
    <SafeAreaView style={styles.container}>
      <LearnInfo/>
      {/**Total Savings */}
      <PoolDeposits totalSavings={totalSavings!}/>
      {/**Map Vault INfo */}
      {
        prizeBalanaces !== null && prizeBalanacesUSD !== null && (
        <>
          <Carousel
            loop
            width={width}
            height={width / 2}
            data={vaultsArray}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <VaultInfo key={vaultsArray[index].depositAsset} vault={vaultsArray[index]} prizeBalanace={prizeBalanaces![index]} prizeBalanaceUSD={prizeBalanacesUSD![index]}/>
            )}
          />
        </>
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
