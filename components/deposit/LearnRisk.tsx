import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function LearnRisk() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FontAwesome name='info-circle'/><Text>Learn about the risks:</Text>
      </View>
      <View style={styles.mid}>
        <Text>PoolTogether prize vaults can be deployed by anyone.<Link href='https://docs.cabana.fi/'><Text>Know what you are depositing into</Text><FontAwesome name='external-link'/></Link></Text>
      </View>
      <View style={styles.down}>
        <Link href='https://cabana.fi/terms'><Text>Terms of Service</Text></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {

  },
  mid: {

  },
  down: {

  },
});