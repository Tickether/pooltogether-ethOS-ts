import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function PoolWinners() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Recent Prize Pool Winners</Text>
      </View>
      
      <View style={styles.draws}>
        <View style={styles.draw}>
          <View style={styles.left}>
            <Text style={styles.drawDate}>Draw #42</Text>
            <FontAwesome name="hourglass-half" size={16} color='#A489D8'/>
          </View>
          <View style={styles.right}>
            <Text style={styles.amount}>$59.35</Text>
            <Text style={styles.drawDate}>today</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#371D60',
    borderWidth: 1,
    borderColor: '#371D60',
    borderRadius: 7,
    gap: 10
  },
  title: {
    backgroundColor: '#371D60',
  },
  draws: {
    backgroundColor: '#371D60',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    gap: 5
  },
  draw: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    gap: 3
  },
  right: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    gap: 3
  },
  amount: {
    fontWeight: 'bold'
  },
  drawDate: {
    color: '#DECEFF',
  },
});