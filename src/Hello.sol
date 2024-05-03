pragma solidity ^0.8.0;
// contract(계약) - 자바의 class
// 파일이랑 contractName이 같으면 좋음
contract Hello {
    //public은 가시성, pure: 블록체인을 수정하지 않는다
    function sayHello() pure public returns(string memory) {
        return "Hello World";
    }
}
