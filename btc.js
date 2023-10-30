#!/usr/bin/env node

const axios = require('axios');

async function main(){

    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');

    const updatedAt = response.data.time.updated
    const rate = response.data.bpi['EUR'].rate

    console.log(`1 BTC = ${rate} EUR (${updatedAt})`)
}

main()