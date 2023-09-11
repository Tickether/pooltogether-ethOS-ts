import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';

export default function PoolWinners() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pool Winners</Text>
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

  },
  separator: {

  },
});