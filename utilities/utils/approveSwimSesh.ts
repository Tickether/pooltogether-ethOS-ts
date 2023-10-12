import { encodeFunctionData, isHex } from 'viem'
import { erc20ABI } from '../abis/erc20ABI'
import * as ExpoWalletsdk from 'expo-walletsdk'
import { parseUnits } from 'viem'

export const approveSwimSesh = (targetContract: string, spendContract: string, amount: string, decimals: number) => {
    
    const data = encodeFunctionData({
        abi: erc20ABI,
        functionName: 'approve',
        args: [(`0x${spendContract.slice(2)}`), (parseUnits(amount, decimals)) ]
    })
    if (ExpoWalletsdk.hasSystemWallet()){
        const transaction = {
            to: targetContract, // Receipient aka Target Contract
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
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log("No system wallet found")
    }
}