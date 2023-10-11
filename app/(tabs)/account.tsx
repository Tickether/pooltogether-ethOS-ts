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
    padding: 20,
    gap: 30,
    backgroundColor: '#21064E',
  },
});
