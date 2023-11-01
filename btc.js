#!/usr/bin/env node

const axios = require('axios');

async function main() {
    const currency = process.argv[2] 
    ? process.argv[2].tuUpperCase()
    () : 'USD'

    try {
        const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const { data } = await axios.get(endpoint);
        const updatedAt = data.time.updated;
        const rate = data.bpi[currency].rate;

        if (!data.bpi[currency]) {
            throw new Error('Devise inconnue')
        }

        console.log(`1 BTC = ${rate} ${currency} (${updatedAt})`)
    }
    catch (err) {
        console.error(err.toString());
    }
}

main()