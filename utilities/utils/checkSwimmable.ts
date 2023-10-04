import { allowedSwimSesh } from "./allowedSwimSesh"
import { parseUnits } from 'viem'

export const checkSwimmable = async (contract: string, decimals: number, amount: string) => {
    const allowance = await allowedSwimSesh(contract, decimals)
    const allowed = parseUnits(allowance, decimals)
    const amount_ = parseUnits(amount, decimals)
    if (allowed >= amount_) {
        return true
    } else {
        return false
    }

}