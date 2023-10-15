import axios from 'axios'
import {COINGECKO_API} from '@env'

export const getTokenUSD = async ( newtwork: string, address: string ) => {
    try {
        const options = {
            method: 'GET',
            headers: {'X-API-KEY': COINGECKO_API}
        };
        const url = `https://api.coingecko.com/api/v3/simple/token_price/${newtwork}?contract_addresses=${address}&vs_currencies=usd`
        //const url = 'https://api.coingecko.com/api/v3/simple/token_price/optimistic-ethereum?contract_addresses=0x7F5c764cBc14f9669B88837ca1490cCa17c31607&vs_currencies=usd'
        const tokenUSD = await axios.get(url, options)
        console.log(tokenUSD.data)
        const valueInUSD: number = tokenUSD.data[address].usd 
        console.log(valueInUSD)
        return valueInUSD
    } catch (error) {
        console.log(error)
    }
    
}