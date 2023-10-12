import { amountNotValid } from "./amountNotValid";

export const tooManyDecimals = (amount: string, decimals: number) =>{
    try {
        if (!amountNotValid(amount)) {
            // Split the input string by the dot to get the decimal part
            const splits = amount.split('.');
            if (splits.length === 2) {
                const decimalSplit = splits[1];
        
                // Count the number of decimal places
                const decimalPlaces = decimalSplit.length;
                return decimalPlaces > decimals ? 'Too many decimals' : null
            }
        }
    } catch (error) {
        console.log(error)   
    }
}