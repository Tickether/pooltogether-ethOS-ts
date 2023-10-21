import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function LearnInfo() {

  // display two vaults with d1eposit button
  // https://gov.pooltogether.com/t/v5-private-beta-launch-information/3021
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.version}>SAVE & WIN!</Text>
      </View>
      <View>
        <Text style={styles.title}>Learn more on the gov forum</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome
          name="external-link"
          size={16}
          color='#A489D8'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#371D60',
    borderWidth: 1,
    borderColor: '#371D60',
    borderRadius: 7,
    gap: 6,
    padding: 15,
  },
  version: {
    backgroundColor: '#371D60',
    color: '#DC2626',
    borderWidth: 1,
    borderColor: '#DC2626',
    borderRadius: 5,
    padding: 7
   
  },
  title: {
    backgroundColor: '#371D60',
    color: '#A489D8',
  },
  icon: {
    backgroundColor: '#371D60',
  },
});