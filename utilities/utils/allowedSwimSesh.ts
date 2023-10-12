import { formatUnits } from 'viem'
import { erc20ABI } from '../abis/erc20ABI'
import { getAddress } from './getAddress'
import { publicClient } from './viemClient'

export const allowedSwimSesh = async (targetContract: string, spendContract: string, decimals: number) => {
    try {
        const owner = getAddress()
        const allowance = await publicClient.readContract({
            address: `0x${targetContract.slice(2)}`,
            abi: erc20ABI,
            functionName: 'allowance',
            args:[(`0x${owner.slice(2)}`), (`0x${spendContract.slice(2)}`)],
        })

        const allowed = Number(formatUnits(BigInt(String(allowance)), decimals))

        return allowed.toFixed(2)
    } catch (error) {
        console.log(error)   
    }
}