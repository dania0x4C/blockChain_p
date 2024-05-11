
var Web3=require('web3');
var _abiBinJson = require('./Timer.json');      //importing a javascript file
var contractAddress = "0xD5Eff8B3cF2C6308DA963cE65799DA89Dc18aFeC" // contract deployed 값
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
contractName=Object.keys(_abiBinJson.contracts); // reading ['src/Timer.sol:Timer']
//console.log("- contract name: ", contractName); //or console.log(contractName[0]);
_abi=_abiBinJson.contracts[contractName].abi;
_abiArray=JSON.parse(JSON.stringify(_abi));  
//_abiArray=JSON.parse(_abi);      // 오류가 발생하면 JSON.stringfy(_abi)를 사용할 것
//_bin=_abiBinJson.contracts[contractName].bin;

// TimerDeployAbiBinFromFile.js를 실행시킨 후 나온 주소값으로 변경
var timer = new web3.eth.Contract(_abiArray, contractAddress); 

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Call from: " + accounts[0]);
    timer.methods.getNow().call().then(function(value) {console.log("Now: ", value);});
    await timer.methods.start().send({from:accounts[0],gas:100000});
    //await 4000;
    timer.methods.timePassed().call().then(function(value) {console.log("Passed: ", value);});
}

doIt()
