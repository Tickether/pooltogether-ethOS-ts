import { StyleSheet, SafeAreaView } from 'react-native';

import { Text, View } from '../../components/Themed';
import LearnInfo from '../../components/vaults/LearnInfo';
import VaultInfo from '../../components/vaults/VaultInfo';
import { defaultVaults } from '../../constants/Vaults';

export default function VaultsScreen() {
  const vaultsArray = Object.values(defaultVaults);

  // display two vaults with deposit button
  return (
    <SafeAreaView style={styles.container}>
      {/**Learn INfo */}
      <LearnInfo/>

      {/**Vault filter */}
      
      {/**Map Vault INfo */}
      {
        vaultsArray.map((vault)=> {
          return <VaultInfo key={vault.depositAsset} vault={vault} />
        })
      }
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 30,
    backgroundColor: '#21064E',
  },
});
