import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import LearnInfo from '../../components/vaults/LearnInfo';
import VaultInfo from '../../components/vaults/VaultInfo';

export default function VaultsScreen() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      {/**Learn INfo */}
      <LearnInfo/>
      {/**Vault filter */}
      
      {/**Map Vault INfo */}
      <VaultInfo name='Prize' symbol='' image='' address='0x0'/>

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
