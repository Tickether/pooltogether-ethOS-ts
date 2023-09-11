import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../Themed';
import { OptimismLogo } from '../../constants/Icons';

export default function PoolEstimates() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <OptimismLogo />
        <Text>Optimism Prize Pool</Text>
        <Text>🏆</Text>
      </View>
      <View style={styles.prizes}>
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
  title: {
    flexDirection: 'row',
    gap: 3
  },
  prizes: {

  },
});