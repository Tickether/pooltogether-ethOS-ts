import * as ExpoWalletsdk from 'expo-walletsdk'


export const getAddress = () => {
    try {
        if (ExpoWalletsdk.hasSystemWallet()){
            const address = ExpoWalletsdk.getAddress()
            return address
        }
    } catch (error) {
        console.log(error)   
    }
}