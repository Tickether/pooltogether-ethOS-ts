import { Platform, StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import DepositSwap from '../components/deposit/DepositSwap';
import DepositDex from '../components/deposit/DepositDex';
import DepositEstimate from '../components/deposit/DepositEstimate';
import { VaultProps } from '../constants/Vaults';
import { useLocalSearchParams } from 'expo-router';

interface DepositProps {

}
interface VaultInfoProps {
  vaultInfo: VaultProps,
}

export default function DepositModal() {
  //edit setting to as seen a cabana.fi

  const params = useLocalSearchParams();
  const { vault } = params;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Deposit to {`Prize USDC`} on Optimism</Text>
      </View>
      <DepositDex vault={JSON.parse(vault.toLocaleString())}/>
      <DepositEstimate/>
      <DepositSwap/>
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

  }
});
