
geth --identity "ljm31" --allow-insecure-unlock --unlock 0 --datadir .\eth --ws --ws.port 8446 --ws.origins "*" --http --http.addr "localhost" --http.port "8445" --http.corsdomain "*" --http.api "admin, db, eth, debug, miner, net, shh, txpool, web3" --port "38445" --networkid 33
