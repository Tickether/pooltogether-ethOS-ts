import { publicClient } from './viemClient'

export const getConfirmed = async (hash: `0x${string}`) =>{
    try {
        const transaction = await publicClient.waitForTransactionReceipt( 
            { hash: hash }
        )
        if (transaction.status == 'success') {
            console.log('yess')
            return true
        } else {
            return false
        }  
    } catch (error) {
        console.log(error)   
    }
}