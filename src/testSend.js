miner.setEtherbase(eth.accounts[0])
web3.eth.sendTransaction({from: eth.accounts[0], to: "0x672807a8c0f72a52d759942e86cfe33264e73934", value: 111})
console.log('Balance in Wei: ',  eth.getBalance(eth.accounts[0]));
console.log('blocknumber: ', eth.blockNumber);
console.log('before mining: ', JSON.stringify(txpool.inspect));
miner.start(1);admin.sleepBlocks(1);miner.stop();
console.log('after mining: ', JSON.stringify(txpool.inspect));
console.log('Balance in Wei: ',  eth.getBalance(eth.accounts[0]));
console.log('blocknumber: ', eth.blockNumber);
