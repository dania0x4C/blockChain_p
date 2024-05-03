var Web3 = require('web3');
var web3 = new Web3('http://localhost:8345');
var account0;
async function getAccount0() {
    accounts = await web3.eth.getAccounts(); // 비동기 함수인 getAccounts()가 끝날 때까지 기다림
    account0=accounts[0];
    console.log("local account0: " + account0);
}
getAccount0()
console.log("global account0: " + account0);
