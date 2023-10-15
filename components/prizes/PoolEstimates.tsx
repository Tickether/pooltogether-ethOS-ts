import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { OptimismLogo } from '../../constants/Icons';
import { ExternalLink } from '../ExternalLink';
import { FontAwesome } from '@expo/vector-icons';

export default function PoolEstimates() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>

      <View style={styles.caption}>
        <OptimismLogo />
        <Text style={styles.title}>Optimism Prize Pool</Text>
        <Text>🏆</Text>
      </View>

      <View style={styles.prizes}>
        <View style={styles.estimates}>
          <Text>Est. Prize Value</Text>
          <Text>Estimated Frequency</Text>
        </View>
        <View style={styles.estimate}>
          <Text style={styles.prize}>$960</Text>
          <Text style={styles.frequency}>1 prize yearly</Text>
        </View>
        <View style={styles.estimate}>
          <Text style={styles.prize}>$156</Text>
          <Text style={styles.frequency}>2 prizes monthly</Text>
        </View>
        <View style={styles.estimate}>
          <Text style={styles.prize}>$11</Text>
          <Text style={styles.frequency}>2 prizes daily</Text>
        </View>
        <View style={styles.estimate}>
          <Text style={styles.prize}>$0.73</Text>
          <Text style={styles.frequency}>64 prizes daily</Text>
        </View>
      </View>

      <ExternalLink href=''>
        <View style={styles.link}>    
          <Text style={styles.linkText}>Learn more about how prizes work</Text>
          <FontAwesome name="external-link" size={16} color='#A489D8'/>
        </View>
      </ExternalLink>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#21064E',
    width: '100%',
    gap: 15
  },
  caption: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    gap: 3
  },
  title: {
    flexDirection: 'row',
    gap: 3
  },
  prizes: {
    backgroundColor: '#21064E',
    width: '100%',
    gap: 3
  },
  estimates: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingLeft: 15, 
    paddingRight: 15,
  },
  estimatesText: {

  },
  estimate: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 36, 
    paddingRight: 36,
  },
  prize: {
    color: '#35F0D0',
  },
  frequency: {
    color: '#DECEFF'
  },
  link: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  linkText: {
    color: '#DECEFF'
  },
});