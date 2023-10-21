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
    network: string
}
const PrizeUDSC : VaultProps =  {
    depositSymbol: 'USDC.e',
    depositAsset: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    prizeName: 'Prize USDC.e - Aave',
    prizeSymbol: 'pUSDC.e',
    prizeAsset: '0xE3B3a464ee575E8E25D2508918383b89c832f275',
    decimals: 6,
    network: 'optimistic-ethereum'
    
}
const PrizeWETH : VaultProps =  {
    depositSymbol: 'WETH',
    depositAsset: '0x4200000000000000000000000000000000000006',
    prizeName: 'Prize WETH - Aave',
    prizeSymbol: 'pWETH',
    prizeAsset: '0x29Cb69D4780B53c1e5CD4D2B817142D2e9890715',
    decimals: 18,
    network: 'optimistic-ethereum'

}
const PrizeDAI : VaultProps =  {
    depositSymbol: 'DAI',
    depositAsset: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    prizeName: 'Prize DAI - Aave',
    prizeSymbol: 'pDAI',
    prizeAsset: '0xCe8293f586091d48A0cE761bBf85D5bCAa1B8d2b',
    decimals: 18,
    network: 'optimistic-ethereum'

}

export const defaultVaults = {
    PrizeUDSC : PrizeUDSC,
    PrizeWETH : PrizeWETH,
    PrizeDAI : PrizeDAI,
}