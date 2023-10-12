import { erc20ABI } from '../abis/erc20ABI'
import { getAddress } from './getAddress'
import { publicClient } from './viemClient'
import { formatUnits } from 'viem'


export const getBalance = async (contract: string, decimals: number) =>{
    try {
        const owner = getAddress()
        const balanceOf = await publicClient.readContract({
            address: `0x${contract.slice(2)}`,
            abi: erc20ABI,
            functionName: 'balanceOf',
            args:[(`0x${owner.slice(2)}`)],
        })

        const balance = Number(formatUnits(BigInt(String(balanceOf)), decimals))

        return balance.toFixed(2)
    } catch (error) {
        console.log(error)   
    }
}