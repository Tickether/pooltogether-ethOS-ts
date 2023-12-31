import { formatUnits } from 'viem'
import { poolABI } from '../abis/poolABI'
import { publicClient } from './viemClient'

export const getTotalDeposits = async (contract: string, decimals: number) => {
    try {
        const totalAssets = await publicClient.readContract({
            address: `0x${contract.slice(2)}`,
            abi: poolABI,
            functionName: 'totalAssets',
        })
        const totalDeposits = Number(formatUnits(BigInt(String(totalAssets)), decimals))
        return totalDeposits.toFixed(6)
    } catch (error) {
        console.log(error)   
    }
}