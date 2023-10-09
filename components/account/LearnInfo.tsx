import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function LearnInfo() {

  // display two vaults with d1eposit button
  // https://gov.pooltogether.com/t/v5-private-beta-launch-information/3021
  return (
    <View style={styles.container}>
      <View style={styles.version}>
        <Text>BETA</Text>
      </View>
      <View style={styles.title}>
        <Text>Learn more on the gov forum</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome
          name="external-link"
          size={16}
          color='white'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21064E',
  },
  version: {
 
  },
  title: {
   
  },
  icon: {
    
  },
});