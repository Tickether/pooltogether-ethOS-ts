export const poolABI = [
    {
        inputs: [{ name: "_assets", type: "uint256" }, { name: "_receiver", type: "address" }, { name: "_owner", type: "address" }],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ name: "_shares", type: "uint256" }, { name: "_receiver", type: "address" }, { name: "_owner", type: "address" }],
        name: 'redeem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ name: "_assets", type: "uint256" }, { name: "_receiver", type: "address" }],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
] as const;