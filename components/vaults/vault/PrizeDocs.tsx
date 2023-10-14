import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function PrizeDocs() {

  // display two vaults with d1eposit button
  // https://gov.pooltogether.com/t/v5-private-beta-launch-information/3021
  return (
    <View style={styles.container}>
        <View style={styles.caption}>
          <FontAwesome name='info-circle' size={16} color='#FAB2B6'/>
          <Text style={styles.title}>Learn about Prize USDC</Text>
        </View>

        <View style={styles.learn}>
          <View style={styles.info}><Text style={styles.title}>PoolTogether is a permissionless protocol that anyone can use to deploy prize vaults. This prize vault exposes you to smart contract risk from the following contracts:</Text></View>
          <View style={styles.links}>
            <View style={styles.link}><Text style={styles.linkText}>Vault Contract</Text><FontAwesome name="external-link" size={16} color='#A489D8'/></View>
            <View style={styles.link}><Text style={styles.linkText}>Yield Source Contract</Text><FontAwesome name="external-link" size={16} color='#A489D8'/></View>
          </View>
          
          <View style={styles.info}><Text style={styles.title}>This prize vault is in the following vault lists you have selected:</Text></View>
          <View style={styles.link}><Text style={styles.linkText}>PoolTogether Vault List</Text><FontAwesome name="external-link" size={16} color='#A489D8'/></View>
          
          
        </View>
        
        <View style={styles.action}>
          <TouchableOpacity style={styles.actionRead}>
            <Text style={styles.readText}>Read the Docs</Text>
          </TouchableOpacity>
        </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#371D60',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#371D60',
    borderRadius: 10, 
    padding: 20,
    gap: 15
  },
  caption: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: '#DECEFA',
   
  },
  title: {
   color: '#D4CEFF'
  },
  learn: {
    backgroundColor: '#371D60',
    gap: 10
  },
  info: {
    backgroundColor: '#371D60',
  },
  links: {
    backgroundColor: '#371D60',
  },
  link: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  linkText: {
    color: '#ACADFF'
  },
  action: {
    backgroundColor: '#371D60',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  actionRead: {
    width: '36%',
    backgroundColor: '#4A3270',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  readText: {
    color: '#DECEFF',
  },
});