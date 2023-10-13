import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function PoolWeeklyOdds() {

  // display two vaults with d1eposit button
  // https://gov.pooltogether.com/t/v5-private-beta-launch-information/3021
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Weekly Prize Odds</Text>
        <Text style={styles.odds}>{'1'} in {'278'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#21064E',
  },
  title: {
    fontSize: 17
  },
  odds: {
    fontSize: 17
  },
});