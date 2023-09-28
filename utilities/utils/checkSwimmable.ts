import { allowedSwimSesh } from "./allowedSwimSesh"
import { parseUnits } from 'viem'

export const checkSwimmable = async (contract: string, decimals: number, amount: bigint) => {
    const allowance = await allowedSwimSesh(contract, decimals)
    const allowed = parseUnits(allowance, decimals)
    if (amount >= allowed) {
        return true
    } else {
        return false
    }

}