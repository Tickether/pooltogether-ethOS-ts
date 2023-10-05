export const amountNotValid = (amount: string) =>{
    const pattern = /^\d+(\.\d*)?$/;
    const checkPattern = pattern.test(amount);
    if (!checkPattern) {
        return 'Enter a valid number'
    } else {
        return null;
    }
}