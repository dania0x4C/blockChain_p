pragma solidity ^0.8.0;
contract Timer {
    uint256 startTime;
    function start() public {
        startTime=block.timestamp;
    }
    function timePassed() public view returns(uint256) {
        return block.timestamp-startTime;
    }
    function getNow() view public returns(uint) {
        return block.timestamp;
    }
}
