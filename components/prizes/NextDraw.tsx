import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import CountDown from 'react-native-countdown-component';
import { Link } from 'expo-router';

export default function NextDraw() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Deposit for a chance to win daily</Text>
      </View>
      <View style={styles.countdown}>
        {/**countdown */}
        <View>
          <Text>NEXT DRAW IN</Text>
        </View>
        <View>
          <CountDown
            until={10}
            size={20}
          />
        </View>
      </View>
      <View style={styles.deposit}>
        <TouchableOpacity>
          <Link href="/vaults"><Text>Deposit to Win</Text></Link>
        </TouchableOpacity>
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
  title: {

  },
  countdown: {

  },
  deposit: {

  },
});