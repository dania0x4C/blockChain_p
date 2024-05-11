
pragma solidity ^0.8.0;
contract Counter {
    uint256 counter = 0;
    function add() public {
        counter++;
    }
    function subtract() public {
        counter--;
    }
    function getCounter() public view returns (uint256) {// view는 읽기만 하게 만듬
        return counter;
    }
}
