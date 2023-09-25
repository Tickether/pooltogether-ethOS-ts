import * as ExpoWalletsdk from 'expo-walletsdk'


export const getAddress = () => {
    if (ExpoWalletsdk.hasSystemWallet()){
        const address = ExpoWalletsdk.getAddress()
        return address
    }
}