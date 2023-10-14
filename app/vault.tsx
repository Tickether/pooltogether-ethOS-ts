import { StyleSheet, SafeAreaView } from 'react-native';

import { Text, View } from '../components/Themed';
import LearnInfo from '../components/vaults/LearnInfo';
import PrizePoolInfo from '../components/vaults/vault/PrizePoolInfo';
import PrizeDocs from '../components/vaults/vault/PrizeDocs';
import { VaultProps } from '../constants/Vaults';
import { useLocalSearchParams } from 'expo-router';
/*
interface VaultModalProps {
  vault: VaultProps,
}
*/

export default function VaultModal() {
  
  const params = useLocalSearchParams();
  const { vault } = params;
  const vault_: VaultProps = JSON.parse(vault.toLocaleString())

  return (
    <SafeAreaView style={styles.container}>
      <LearnInfo/>
      
      <PrizePoolInfo vault={vault_}/> 

      <PrizeDocs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    gap: 20,
    backgroundColor: '#21064E',
  },
});