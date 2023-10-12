import { amountNotValid } from "./amountNotValid"
import { getBalance } from "./getBalance"

export const checkBalance = async (contract: string, symbol: string, decimals: number, amount: string) => {
    try {
        if (!amountNotValid(amount)) {
            const balance = await getBalance(contract, decimals)
            if (Number(balance) < Number(amount)) {
                return `Not enough ${symbol} in wallet`
            }
        }
    } catch (error) {
        console.log(error)   
    }
}