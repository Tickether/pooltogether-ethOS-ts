import { erc20ABI } from '../abis/erc20ABI'
import { publicClient } from './viemClient'
import { formatUnits } from 'viem'


export const getBalance = async (contract: string, owner: string, decimals: number) =>{
    const balanceOf = await publicClient.readContract({
        address: `0x${contract.slice(2)}`,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args:[(`0x${owner.slice(2)}`)],
    })

    const balance = Number(formatUnits(balanceOf, decimals))

    return balance.toFixed(2)
}