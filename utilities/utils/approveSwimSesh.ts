import { encodeFunctionData } from 'viem'
import { erc20ABI } from '../abis/erc20ABI'
import * as ExpoWalletsdk from 'expo-walletsdk'

export const approveSwimSesh = (contract: string, amount: bigint) => {
    const data = encodeFunctionData({
        abi: erc20ABI,
        functionName: 'approve',
        args: [(`0x${contract.slice(2)}`), (amount) ]
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