import { erc20ABI } from '../abis/erc20ABI'
import { publicClient } from './viemClient'


export const getBalance = async (contract: string, owner: string) =>{
    const balanceOf = await publicClient.readContract({
        address: `0x${contract.slice(2)}`,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args:[(`0x${owner.slice(2)}`)]
    })
    return balanceOf
}