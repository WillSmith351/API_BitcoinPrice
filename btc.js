#!/usr/bin/env node

const axios = require('axios');

async function main() {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

        let currency;

        if (process.argv[2]) {
            currency = process.argv[2].toUpperCase();
        }
        else {
            currency = 'USD'
        }


        if (!response.data.bpi[currency]) {
            throw new Error('Devise inconnue')
        }

        const updatedAt = response.data.time.updated;
        const rate = response.data.bpi[currency].rate;

        console.log(`1 BTC = ${rate} ${currency} (${updatedAt})`)
    }
    catch (err) {
        console.error(err.toString());
    }
}

main()