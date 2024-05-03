# 블록체인 사적망 환경설정
{
  "config": {
    "chainId": 412,# chain의 아이디 - 5이상의 충돌나지 않는 수 사용
    "homesteadBlock": 0,# homesteadBlock의 시작 블록을 의미
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0
  },
  "nonce": "0x0000000000000033",# PoW에 따라 서명된 횟수(데이터를 블록체인으로 저장하면 해싱을 해야하는데 같은 값을 해싱하면 똑같은 값이 나온다 그래서 값에 nonce값을 추가해서 해싱을 시키고 값을 해싱해주어 값이 계속 다르게 나오게 만들어준다.)
  "timestamp": "0x0",# 시간 조절로 난이도 조절
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "gasLimit": "0x8000000",# 거래가능한  gas값의 한도 지정
  "difficulty": "0x100",# 마이밍 자체 난이도
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x3333333333333333333333333333333333333333",
  "alloc": {}
}

geth --datadir .\eth init _genesis.json
