var Web3 = require('web3');
var web3 = new Web3('http://localhost:12345');
web3.eth.sendTransaction({from: '0x1B7A18023f6c45f16b4B39784FEd963Aa7d9009a', to: '0x3Debe783DB0d5c4360e8fB7f3623BbdD3b37C76C', price: '1122'})
console.log("sending")
web3.eth.getBalance('0x1B7A18023f6c45f16b4B39784FEd963Aa7d9009a').then(console.log);
console.log("Sent to")
web3.eth.getBalance('0x3Debe783DB0d5c4360e8fB7f3623BbdD3b37C76C').then(console.log);
console.log("gasUsedPrice")
web3.eth.getGasPrice().then(console.log);
console.log("gasUsedPriceEther")
//var bal = web3.eth.getGasPrice()
//fromWei(bal, "ether").then(console.log);
console.log('nonce')
web3.eth.getTransactionCount("0x1B7A18023f6c45f16b4B39784FEd963Aa7d9009a").then(console.log);
