import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

interface VaultInfoProps {
  name: string,
  symbol: string,
  image: string
  address: string,
}

export default function VaultInfo({name, symbol, image, address} : VaultInfoProps) {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      
      <View style={styles.top}>

        <View style={styles.caption}>
          <Link href="/vault">
            {image}
            <Text>{name}</Text>
            <Text>{symbol}</Text>
          </Link>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity>
            <Link href="/withdraw"><Text>Withdraw</Text></Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/deposit"><Text>Deposit</Text></Link>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.down}>
        <View style={styles.power}>
          <View>
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

  },
  caption: {

  },
  actions: {

  },
  down: {

  },
  power: {

  },
  total: {

  },
});
