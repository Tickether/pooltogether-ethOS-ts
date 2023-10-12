import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';
import { ErrorPool } from '../../constants/Icons';


interface SunErrorProps {
    message: string,
    setAmount: (amount: string | null) => void,
    setReview: (reviewed: boolean | null) => void,
    openError: boolean,
    setOpenError: (openError: boolean) => void 
}

export default function SunError({ message, setAmount, setReview, openError, setOpenError } : SunErrorProps) {
    
    return (
        <Modal
            visible={openError} 
            animationType='slide' 
            transparent={true}
            onRequestClose={() => {
                setOpenError(!openError);
            }}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.caption}>Uh oh!</Text>
                    <Text style={styles.info}>Something went wrong... {message}</Text>
                    <ErrorPool/>  
                    <TouchableOpacity 
                        style={styles.try}
                        onPress={() => {
                            setOpenError(!openError)
                            setAmount(null)
                            setReview(null)
                        }}
                    >
                        <Text style={styles.tryAgain}>Try Again</Text>
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
    color: '#EA8686',
    fontSize: 23,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  try: {
    width: '100%',
    backgroundColor: '#5D38A9',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6C4BB1',
    borderRadius: 10, 
    paddingTop: 10, 
    paddingBottom: 10,
  },
  tryAgain: {
    color: '#DECEFF',
    fontSize: 17,
    fontWeight: '600'
  },
});