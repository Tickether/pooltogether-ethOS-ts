import { StyleSheet } from 'react-native';

import { Text, View } from '../../Themed';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function PrizePoolInfo() {

  // display two vaults with d1eposit button
  // https://gov.pooltogether.com/t/v5-private-beta-launch-information/3021
  return (
    <View style={styles.container}>
        <View></View>

        <View></View>
        
        <View style={styles.actions}>
          <TouchableOpacity>
            <Link href="/withdraw"><Text>Withdraw</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/deposit"><Text>Deposit</Text></Link>
          </TouchableOpacity>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifytitleContent: 'center',
  },
  version: {
 
  },
  title: {
   
  },
  actions: {
    
  },
});