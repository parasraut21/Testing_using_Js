// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Even {
    function checkEven(uint256 a) public pure returns (uint256) {
        require(a % 2 == 0, "a is odd");
        return a;
    }
}
