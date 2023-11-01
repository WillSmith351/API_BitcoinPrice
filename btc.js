// Fetches the current Bitcoin price in a specified currency using the Coindesk API.

const axios = require('axios');

async function main() {
    // Set the currency based on the user input or default to USD.
    const currency = process.argv[2] ? process.argv[2].toUpperCase() : 'USD';

    try {
        // API endpoint for fetching Bitcoin price data.
        const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const { data } = await axios.get(endpoint);
        const updatedAt = data.time.updated;

        // Check if the requested currency is available.
        if (!data.bpi[currency]) {
            throw new Error('Unknown currency');
        }

        // Retrieve the current Bitcoin rate in the specified currency and log it with the timestamp.
        const rate = data.bpi[currency].rate;
        console.log(`1 BTC = ${rate} ${currency} (${updatedAt})`);
    } catch (err) {
        // Handle any errors that occur during the process and log them to the console.
        console.error(err.toString());
    }
}

// Execute the main function to fetch and display the Bitcoin price.
main();