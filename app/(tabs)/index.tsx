import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import LearnInfo from '../../components/prizes/LearnInfo';
import NextDraw from '../../components/prizes/NextDraw';
import PoolEstimates from '../../components/prizes/PoolEstimates';
import PoolWinners from '../../components/prizes/PoolWinners';

export default function PrizesScreen() {
  //landing page for basic highlights and Call to action
  return (
    <View style={styles.container}>
      {/**learn*/}
      <LearnInfo/>       
      {/** time to draw*/}
      <NextDraw/>
      {/** price est*/}
      <PoolEstimates/>
      {/** price pool winners*/}
      <PoolWinners/>
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
