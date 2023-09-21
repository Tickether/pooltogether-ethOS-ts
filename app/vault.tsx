import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import LearnInfo from '../components/vaults/vault/LearnInfo';
import PrizePoolInfo from '../components/vaults/vault/PrizePoolInfo';
import PrizeDocs from '../components/vaults/vault/PrizeDocs';

export default function VaultModal() {
  //edit 
  return (
    <View style={styles.container}>
      <LearnInfo/>
      
      <PrizePoolInfo/> 

      <PrizeDocs/>
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
  }
});