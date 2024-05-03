
var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
//web3.eth.personal.unlockAccount("0x6819f8376ef2da6A01082c7F45E51FF15Fc69cDa","password",1000).then(console.log('unlocked!'));
var shelloContract = new web3.eth.Contract([
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		]);
shelloContract
    .deploy({
        data: '6080604052348015600e575f80fd5b5061014e8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063ef5fb05b1461002d575b5f80fd5b61003561004b565b60405161004291906100f8565b60405180910390f35b60606040518060400160405280600b81526020017f48656c6c6f20576f726c64000000000000000000000000000000000000000000815250905090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f6100ca82610088565b6100d48185610092565b93506100e48185602086016100a2565b6100ed816100b0565b840191505092915050565b5f6020820190508181035f83015261011081846100c0565b90509291505056fea26469706673582212208520fa4ee35e82ceb46a04a6c3d80061be3083322e0316688f239ad20424472a64736f6c63430008190033',  <--- (X) 여기에 위 바이트 코드 (A)를 복사해서 붙여 넣는다.
    })
    .send({
        from: '0x2a77beD13a78bc0174b60eaD0eF6FA3F74F930c1',// <--- (Z) 여기에 위 주소 (C)를 복사해서 여기에 붙여 넣는다
        gas: '4700000'
    }, function (error, transactionHash){ 
        console.log(error, transactionHash); 
    })
    .on('transactionHash', function(error,transactionHash) {  //이 코드는 테스트 용도로 넣는다. 꼭 필요한 코드는 아니다.
        console.log("hash-- "+transactionHash);
    })
    .on('receipt', function(receipt) {
        console.log('receipt:: '+receipt.contractAddress);
    })
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address)
    });
