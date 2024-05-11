
const _abiBinJson = require('./Timer.json');     // 파일 가져오기
contractName=Object.keys(_abiBinJson.contracts); // ['src/Timer.sol:Timer'] 이 부분을 읽어온다
console.log("- contract name: ", contractName);
_abi=_abiBinJson.contracts[contractName].abi;
_abiArray=JSON.parse(JSON.stringify(_abi));// 3번째줄이 안 읽어져서 parsing 해버림 근데 안 읽어짐
_bin=_abiBinJson.contracts[contractName].bin;
console.log("- ABI: ", _abi);
console.log("- ABIArray: ", _abiArray);
console.log("- Bytecode: ", _bin);
