var Web3 = require('web3');
var web3 = new Web3('http://localhost:12345');
var sum = 0

for (i=0) in range(10):
    sum += web3.eth.getBalance(web3.eth.getAccounts())  

    
