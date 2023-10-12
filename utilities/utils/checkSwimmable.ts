import { allowedSwimSesh } from "./allowedSwimSesh"
import { parseUnits } from 'viem'
import { amountNotValid } from "./amountNotValid"

export const checkSwimmable = async (targetContract: string, spendContract: string, decimals: number, amount: string) => {
    let allowance 
    let allowed
    let amount_ 
    if (!amountNotValid(amount)) {
        allowance = await allowedSwimSesh(targetContract, spendContract, decimals)
        allowed = parseUnits(allowance, decimals)
        amount_ = parseUnits(amount, decimals)
        
    }
    if (allowed! >= amount_!) {
        return true
    } else {
        return false
    }
}