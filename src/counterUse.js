
var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var abi =[
	{
		"inputs": [],
		"name": "add",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "subtract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var addr = "0x12e22CadCA38D21B953297597D13abf7160fb149";// <--- (Z) 위 (C)를 복사-붙여넣기
var counter = new web3.eth.Contract(abi,addr);
counter.methods.getCounter().call().then(function(str) {console.log(str);});
//counter.methods.subtract().send({from:"0xA505503A0ef308e7e11000d6fC5b737ac215BC01",gas:100000});
counter.methods.add().send({from:"0xA505503A0ef308e7e11000d6fC5b737ac215BC01",gas:100000});
counter.methods.add().send({from:"0xA505503A0ef308e7e11000d6fC5b737ac215BC01",gas:100000});
counter.methods.getCounter().call().then(function(str) {console.log(str);});
