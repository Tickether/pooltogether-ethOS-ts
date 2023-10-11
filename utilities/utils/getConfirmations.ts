import { publicClient } from './viemClient'

export const getConfirmations = async (hash: `0x${string}`) =>{
    const confirmations = await publicClient.getTransactionConfirmations({hash})
    return Number(confirmations)
}