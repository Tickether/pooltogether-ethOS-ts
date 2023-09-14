import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../Themed';

interface VaultInfoProps {
  name: string,
  address: string,
}

export default function VaultInfo({name, address} : VaultInfoProps) {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      
      <View style={styles.mid}>

      </View>
      <View style={styles.down}>
        <View>
          <View></View>
          <View></View>
        </View>
        <View>
          <View></View>
          <View></View>
        </View>
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
  caption: {

  },
  filter: {

  },
  mid: {

  },
  down: {

  },
});

/*
<View style={styles.top}>
        <View style={styles.caption}>
          []
          <Text>{name}..s</Text>
        </View>
        <View style={styles.filter}></View>
      </View>
*/