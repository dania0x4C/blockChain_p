pragma solidity ^0.8.0;

contract Greeter {
    string greeting;// 상태변수 끝나도 값이 초기화 안 됨

    constructor() public {
        greeting = 'Hello';
    }

    function setGreeting(string memory _greeting) public {// (함수의 인자 = memory) setGreeting
        greeting = _greeting;
    }

    function greet() view public returns (string memory) {// call 함수 greet
        return greeting;
    }
}
