export const erc20ABI = [
    {
        inputs: [{ name: "owner", type: "address" }],
        name: 'balanceOf',
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: "owner", type: "address" }, { name: "spender", type: "address" }],
        name: 'allowance',
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ name: "spender", type: "address" }, { name: "value", type: "uint256" }],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;