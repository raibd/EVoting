

document.addEventListener('DOMContentLoaded', async function () {
    // Hard-code the Ethereum address you want to connect to
    const ethereumAddress = '0x0E2748D27cD516fa44Ba8e96f8FA8e90590A458D';

    // Create a web3 instance with the specified provider
    window.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/your-infura-api-key'));

    // Set the default account to the hardcoded address
    web3.eth.defaultAccount = ethereumAddress;

    // Your further web3.js initialization goes here

    const defaultAccount = web3.eth.defaultAccount;
    console.log('Default Account:', defaultAccount);

    // Display Connected Account
    const connectedAccountElement = document.getElementById('connectedAccount');
    connectedAccountElement.innerText = 'Connected Account: ' + web3.eth.defaultAccount;

});



