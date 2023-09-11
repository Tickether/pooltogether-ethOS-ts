import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';

export default function DailyDrawNotice() {

  // display two vaults with deposit button
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Draw Notice</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});