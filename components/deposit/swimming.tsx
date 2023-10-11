import { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
import { VaultProps } from '../../constants/Vaults';
import { Link } from 'expo-router';

interface SwimmingProps {
    vault: VaultProps,
    amount: string,
    hash: string,
}

export default function Swimming({ vault, amount, hash } : SwimmingProps) {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [isConfirming, setConfirming] = useState<boolean | null>(null)
    
    return (
        <Modal 
            visible={openModal} 
            animationType='slide' 
            transparent={true}
            onRequestClose={() => {
                setOpenModal(!openModal);
            }}
        >
            <View style={styles.container}>
                <Text style={styles.caption}>Swimming</Text>
                <Text style={styles.info}>You deposted {amount} {vault.depositSymbol}</Text>
                {isConfirming == null || isConfirming == true && (
                    <View style={styles.image}></View>
                )}
                {isConfirming == false && (
                    <View style={styles.image}></View>
                )}                
                <TouchableOpacity style={styles.account}>
                    <Link href={{pathname: "/account"}}><Text style={styles.viewAccount}>View Account</Text></Link>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      caption: {
        
      },
      info: {
        
      },
      image:{
        
      },
      account: {
        
      },
      viewAccount: {
        
      },
});