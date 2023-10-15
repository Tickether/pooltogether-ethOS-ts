import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../Themed';
import CountDown from 'react-native-countdown-component';
import { Link } from 'expo-router';

export default function NextDraw() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Deposit for a chance to win daily</Text>
      </View>
      <View style={styles.countdown}>
        {/**countdown */}
        <View>
          <Text style={styles.caption}>NEXT DRAW IN</Text>
        </View>
        <View style={styles.timer}>
          <CountDown
            until={10}
            size={20}
          />
        </View>
      </View>
      <View style={styles.deposit}>
        <TouchableOpacity style={styles.depositAction}>
          <Link href="/vaults"><Text style={styles.depositText}>Deposit to Win</Text></Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#21064E',
    width: '100%',
    gap: 20
  },
  title: {
    backgroundColor: '#21064E',
    fontSize: 23,
    fontWeight: 'bold'
  },
  countdown: {
    backgroundColor: '#21064E',
    width: '100%',
    gap: 5
  },
  caption: {
    backgroundColor: '#21064E',
    width: '100%',
    textAlign: 'center',
    fontSize: 17
  },
  timer: {
    backgroundColor: '#21064E',
    width: '100%',
  },
  deposit: {
    backgroundColor: '#21064E',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 20
  },
  depositAction: {
    width: '36%',
    backgroundColor: '#35F0D0',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5D38A9',
    borderRadius: 5,
    paddingTop: 10, 
    paddingBottom: 10,
  },
  depositText: {
    color: '#36147D',
  },
});