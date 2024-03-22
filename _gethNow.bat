set _dir=C:\Users\ljm31\OneDrive\바탕 화면\학교 자료\24년도 1학기 수업자료\블록체인\eth
set _log=C:\Users\ljm31\OneDrive\바탕 화면\학교 자료\24년도 1학기 수업자료\블록체인\eth\my.log
geth --identity "jslNode" ^
--syncmode snap ^
--allow-insecure-unlock ^
--http --http.addr "localhost" --http.port "8445" --http.corsdomain "*" ^
--http.api "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" ^
--ws --ws.addr="localhost" --ws.port "8446" --ws.origins="" ^
--datadir $_dir ^
--port "38445" ^
--networkid 33