
var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));

var _abiArray=[
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
]; //<--- (Y) 위 (B)를 복사-붙여넣기

var _bin = "60806040525f80553480156011575f80fd5b506101af8061001f5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c80634f2be91f146100435780636deebae31461004d5780638ada066e14610057575b5f80fd5b61004b610075565b005b61005561008d565b005b61005f6100a5565b60405161006c91906100c5565b60405180910390f35b5f808154809291906100869061010b565b9190505550565b5f8081548092919061009e90610152565b9190505550565b5f8054905090565b5f819050919050565b6100bf816100ad565b82525050565b5f6020820190506100d85f8301846100b6565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610115826100ad565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610147576101466100de565b5b600182019050919050565b5f61015c826100ad565b91505f820361016e5761016d6100de565b5b60018203905091905056fea26469706673582212207b0d15c8677147e70d1382cc8d53fd1f261802e2a728280f6c4d9e482eae700e64736f6c63430008190033"// ...생략...736f6c63430008010033;   <--- (X) 위 (A)를 복사-붙여넣기

var _contract = new web3.eth.Contract(_abiArray);
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0xA505503A0ef308e7e11000d6fC5b737ac215BC01", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
