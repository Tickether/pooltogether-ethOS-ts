import { publicClient } from './viemClient'

export const getConfirmations = async (hash: `0x${string}`) =>{
    let confirmations = await publicClient.getTransactionConfirmations({hash})
    while (confirmations < 6) {
        confirmations = await publicClient.getTransactionConfirmations({hash})
    }
    return true
}