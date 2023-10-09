import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function LearnRisk() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FontAwesome name='info-circle' size={16} color='#FAB2B6'/><Text style={styles.title}>Learn about the risks:</Text>
      </View>
      <View style={styles.down}>
        <Text>PoolTogether is a permissionless protocol. Prize vaults can be deployed by anyone. Make sure you know what you are depositing into.</Text>
        <Link href='https://cabana.fi/terms'>
          <Text style={styles.link}>Learn more about this prize vault.</Text>
        </Link>
      </View>
      
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D38A9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 10, 
    padding: 20,
    gap: 15
  },
  top: {
    backgroundColor: '#5D38A9',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: '#DECEFA',
  },
  title: {
    color: '#DECEFA',
    fontWeight: 'bold'
  },
  down: {
    backgroundColor: '#5D38A9',
  },
  link:{
    color: '#B18CFF'
  }
});