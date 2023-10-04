import { getBalance } from "./getBalance"

export const checkBalance = async (contract: string, symbol: string, decimals: number, amount: string) => {
    const balance = await getBalance(contract, decimals)
    if (Number(balance) < Number(amount)) {
        return `Not enough ${symbol} in wallet`
    }
}