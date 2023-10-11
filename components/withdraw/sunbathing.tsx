import { useState, useEffect } from 'react';
import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';
import { Link } from 'expo-router';
import { VaultProps } from '../../constants/Vaults';
import { getConfirmations } from '../../utilities/utils/getConfirmations';


interface SunbathingProps {
    vault: VaultProps,
    amount: string,
    hash: string,
    openModal: boolean,
    setOpenModal: (openModal: boolean) => void 
}

export default function Sunbathing({ vault, amount, hash, openModal, setOpenModal } : SunbathingProps) {
    
    const [confirmed, setConfirmed] = useState<boolean | null>(null)
   
    useEffect(()=>{
        const getConfirms = async () =>{
            const confirm = await getConfirmations(`0x${hash.slice(2)}`)
            if (confirm) {
                setConfirmed(true)
            }
        }
        getConfirms
    },[])
    
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
                <View style={styles.modal}>
                    <Text style={styles.caption}>Sunbathing</Text>
                    <Text style={styles.info}>You withdrew {amount} {vault.depositSymbol}</Text>
                    {!confirmed && (
                        <View style={styles.image}><Text>loading...</Text></View>
                    )}
                    {confirmed == false && (
                        <View style={styles.image}><Text>true</Text></View>
                    )}    
                    <TouchableOpacity 
                        style={styles.account}
                        onPress={() => setOpenModal(!openModal)}
                    >
                        <Link href={{pathname: "/account"}}><Text style={styles.viewAccount}>View Account</Text></Link>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    backgroundColor: '#4C249F',
    alignItems: 'center',
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