import { getBalance } from "./getBalance"

export const checkBalance = async (contract: string, decimals: number, amount: string) => {
    const balance = await getBalance(contract, decimals)
    if (Number(balance) >= Number(amount)) {
        return true
    } else {
        return false
    }
}