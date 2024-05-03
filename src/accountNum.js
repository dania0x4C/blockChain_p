var Web3 = require('web3');
var web3 = new Web3('http://localhost:12345');
web3.eth.getAccounts().then(ac => { console.log(ac[0]); })
web3.eth.getAccounts().then(ac => { console.log(ac[1]); })
web3.eth.getAccounts().then(ac => { console.log(ac[2]); })
web3.eth.getBalance('0x1B7A18023f6c45f16b4B39784FEd963Aa7d9009a').then(console.log);
web3.eth.getBalance('0x3Debe783DB0d5c4360e8fB7f3623BbdD3b37C76C').then(console.log);
