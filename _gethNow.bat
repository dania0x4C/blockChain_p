set _dir=C:\Users\ljm31\OneDrive\���� ȭ��\�б� �ڷ�\24�⵵ 1�б� �����ڷ�\���ü��\eth
set _log=C:\Users\ljm31\OneDrive\���� ȭ��\�б� �ڷ�\24�⵵ 1�б� �����ڷ�\���ü��\eth\my.log
geth --identity "jslNode" ^
--syncmode snap ^
--allow-insecure-unlock ^
--http --http.addr "localhost" --http.port "8445" --http.corsdomain "*" ^
--http.api "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" ^
--ws --ws.addr="localhost" --ws.port "8446" --ws.origins="" ^
--datadir $_dir ^
--port "38445" ^
--networkid 33