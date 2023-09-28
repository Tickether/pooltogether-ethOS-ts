import { encodeFunctionData } from 'viem'
import { poolABI } from '../abis/poolABI'
import { getAddress } from './getAddress'
import * as ExpoWalletsdk from 'expo-walletsdk'


export const leavePool = async (contract: string, amount: bigint) => {
    const owner = getAddress()
    const data = encodeFunctionData({
        abi: poolABI,
        functionName: 'redeem',
        args: [(amount), (`0x${owner.slice(2)}`), (`0x${owner.slice(2)}`)  ]
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
            const txHash = ExpoWalletsdk.sendTransaction(transaction);
            console.log(txHash)
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No system wallet found")
    }
}