import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { VaultProps } from '../../constants/Vaults';
import { useEffect, useState } from 'react';
import { getBalance } from '../../utilities/utils/getBalance';

interface VaultInfoProps {
  vault: VaultProps,
}

export default function VaultInfo({ vault } : VaultInfoProps) {

  // display vault with deposit button
  // calculate price power and balance : pref from utils fuction
  const [prizeBalanace, setPrizeBalance] = useState<string>('0.00')

  useEffect(()=>{
    const getBalance_ = async () => {
      const PrizeBalance = await getBalance(vault.prizeAsset, vault.decimals)
      setPrizeBalance((PrizeBalance))
    }
    getBalance_()
   })
  
  return (
    <View style={styles.container}>
      
      <View style={styles.top}>

        <View style={styles.caption}>
          <Link href="/vault">
            <Text>{vault.prizeName}</Text>
            <Text>{vault.prizeSymbol}</Text>
          </Link>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity>
            <Link href={{pathname: "/withdraw", params: { vault: JSON.stringify(vault)}}}><Text>Withdraw</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href={{pathname: "/deposit", params: { vault: JSON.stringify(vault)}}}><Text>Deposit</Text></Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.down}>
        {
          prizeBalanace != '0.00' && (
            <View style={styles.balance}>
              <View>
                <Text>Balance</Text>
              </View>
              <View>
                <Text>{prizeBalanace} {vault.depositSymbol}</Text>
              </View>
            </View>
          )
        }
        
        <View style={styles.power}>
          <View style={styles.left}>
            <Text>Prize Power</Text>
            <FontAwesome
              name="info-circle"
              size={16}
              color='white'
            />
          </View>
          <View>
            <Text>88.77%</Text>
          </View>
        </View>
        <View style={styles.total}>
          <View>
            <Text>Total Deposits</Text>
          </View>
          <View>
            <Text>$20,000</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  caption: {

  },
  actions: {
    flexDirection: 'row'
  },
  down: {

  },
  balance:{
    flexDirection: 'row'
  },
  power: {
    flexDirection: 'row'
  },
  left: {
    flexDirection: 'row'
  },
  total: {
    flexDirection: 'row'
  },
});
