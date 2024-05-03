var Web3 = require('web3');
web3=new Web3(new Web3.providers.HttpProvider('http://localhost:8345'))
web3.eth.getChainId().then(console.log);
web3.eth.getAccounts(console.log);
web3.eth.getCoinbase().then(console.log);
web3.eth.getBlockNumber().then(console.log);
web3.eth.getBalance('0x5d079E50462ABc57Fe98c1fA44280cB7908229fF').then(console.log);
web3.eth.getNodeInfo().then(console.log);
