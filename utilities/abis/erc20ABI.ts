export const erc20ABI = [
    {
        inputs: [{ name: "owner", type: "address" }],
        name: 'balanceOf',
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: 'view',
        type: 'function',
    },
] as const;