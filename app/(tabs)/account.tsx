import { StyleSheet, SafeAreaView } from 'react-native';

import { Text, View } from '../../components/Themed';
import LearnInfo from '../../components/account/LearnInfo';
import PoolDeposits from '../../components/account/PoolDeposits';
import PoolWinnings from '../../components/account/PoolWinnings';

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LearnInfo/>

      <PoolDeposits/>

      <PoolWinnings/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
