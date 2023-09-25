import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import LearnInfo from '../../components/vaults/LearnInfo';
import VaultInfo from '../../components/vaults/VaultInfo';
import { defaultVaults } from '../../constants/Vaults';

export default function VaultsScreen() {
  const vaultsArray = Object.values(defaultVaults);

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      {/**Learn INfo */}
      <LearnInfo/>

      {/**Vault filter */}
      
      {/**Map Vault INfo */}
      {
        vaultsArray.map((vault)=> {
          return <VaultInfo key={vault.depositAsset} vault={vault} />
        })
      }
      

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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
