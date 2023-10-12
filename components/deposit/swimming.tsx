import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { View, Text } from '../Themed';
import { VaultProps } from '../../constants/Vaults';
import { router } from 'expo-router';
import { SuccessPool } from '../../constants/Icons';
import { FontAwesome } from '@expo/vector-icons';
import { ExternalLink } from '../ExternalLink';

interface SwimmingProps {
    vault: VaultProps,
    amount: string,
    hash: string,
    openModal: boolean,
    setOpenModal: (openModal: boolean) => void 
}

export default function Swimming({ vault, amount, hash, openModal, setOpenModal } : SwimmingProps) {
    

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
                    <Text style={styles.caption}>Swimming!</Text>
                    <Text style={styles.info}>You deposited {amount} {vault.depositSymbol}</Text>
                    <SuccessPool/>    
                    <ExternalLink href={``}>
                        <View style={styles.link}>
                            <View><Text style={styles.linkText}>View on etherscan</Text></View>
                            <View style={styles.linkImage}>
                                <FontAwesome
                                    name="external-link"
                                    size={16}
                                    color='#35F0D0'
                                />
                            </View>
                        </View>
                    </ExternalLink>     
                    <TouchableOpacity 
                        style={styles.account}
                        onPress={() => {
                            setOpenModal(!openModal)
                            router.push('/account')
                        }}
                    >
                        <Text style={styles.viewAccount}>View Account</Text>
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
        padding: 20,
        gap: 20,
      },
      caption: {
        color: '#35F0D0',
        fontSize: 23,
        fontWeight: 'bold'
      },
      info: {
        fontSize: 17,
        fontWeight: 'bold'
      },
      link:{
        backgroundColor: '#4C249F',
        flexDirection: 'row',
        gap: 5
      },
      linkText: {
        backgroundColor: '#4C249F',
        color: '#35F0D0',
        textAlign: 'center'
      },
      linkImage: {
        backgroundColor: '#4C249F',
      },
      account: {
        width: '100%',
        backgroundColor: '#5D38A9',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#6C4BB1',
        borderRadius: 10, 
        paddingTop: 10, 
        paddingBottom: 10,
      },
      viewAccount: {
        color: '#DECEFF',
        fontSize: 17,
        fontWeight: '600'
      },
});