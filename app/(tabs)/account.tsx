import { StyleSheet, SafeAreaView } from 'react-native';

import { Text, View } from '../../components/Themed';
import LearnInfo from '../../components/account/LearnInfo';
import PoolDeposits from '../../components/account/PoolDeposits';
import PoolWinnings from '../../components/account/PoolWinnings';
import { useState } from 'react';
import VaultInfo from '../../components/account/VaultInfo';
import { defaultVaults } from '../../constants/Vaults';
import PoolWeeklyOdds from '../../components/account/PoolWeeklyOdds';

export default function AccountScreen() {
  const vaultsArray = Object.values(defaultVaults);
  //const [totalSavings, setTotalSaving] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <LearnInfo/>

      <PoolDeposits/>
      {/**Map Vault INfo */}
      {
        vaultsArray.map((vault)=> {
          return <VaultInfo key={vault.depositAsset} vault={vault} />
        })
      }
      <PoolWeeklyOdds/>
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
