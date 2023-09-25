// vault constants 
// name // symbol
// = deposit asset addy
// = prize asset addy

export interface VaultProps {
    depositSymbol: string
    prizeName: string
    prizeSymbol: string
    decimals: number
    depositAsset : string
    prizeAsset: string
}
const PrizeUDSC : VaultProps =  {
    depositSymbol: 'USDC',
    depositAsset: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    prizeName: 'Prize USDC',
    prizeSymbol: 'PTUSDC',
    prizeAsset: '0x31515cfC4550d9C83E2d86E8a352886d1364E2D9',
    decimals: 6,
    
}
const PrizeWETH : VaultProps =  {
    depositSymbol: 'WETH',
    depositAsset: '0x4200000000000000000000000000000000000006',
    prizeName: 'Prize WETH',
    prizeSymbol: 'PTWETH',
    prizeAsset: '0x1732Ce5486ea47f607550Ccbe499cd0f894E0494',
    decimals: 18,
}

export const defaultVaults = {
    PrizeUDSC : PrizeUDSC,
    PrizeWETH : PrizeWETH
}

    
   