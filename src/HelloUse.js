// 여기 못함
var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var shelloContract = new web3.eth.Contract([
	{
		"inputs": [],
		"name": "sayHello",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
], "0x2a77beD13a78bc0174b60eaD0eF6FA3F74F930c1"
);// <--- ganache@8345의 배포후 얻은 컨트랙 주소를 복사-붙여넣는다
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
