import { encodeFunctionData, isHex } from 'viem'
import { poolABI } from '../abis/poolABI'
import { getAddress } from './getAddress'
import * as ExpoWalletsdk from 'expo-walletsdk'
import { parseUnits } from 'viem'


export const goSwimming = async (contract: string, amount: string, decimals: number) => {
    const owner = getAddress()
    const data = encodeFunctionData({
        abi: poolABI,
        functionName: 'deposit',
        args: [(parseUnits(amount, decimals)), (`0x${owner.slice(2)}`)  ]
    })
    if (ExpoWalletsdk.hasSystemWallet()){
        const transaction = {
            to: contract, // Receipient aka Target Contract
            value: '0', // Value in wei aka non Payable
            data: data, // Target Function w/ Encode 
            chainId: 10, 
            chainRPCUrl: 'https://mainnet.optimism.io'
        };
        try {
            const res = ExpoWalletsdk.sendTransaction(transaction);
            if (isHex(res)) {
                const txHash = res
                return txHash
            } else {
                const message = res
                return message
            }
            //console.log(txHash)
            //console.log(isHex(txHash))
            //return isHex(txHash) ? txHash : null
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No system wallet found")
    }
}