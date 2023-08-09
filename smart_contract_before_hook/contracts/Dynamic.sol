// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;



contract Dynamic {
    int256[] arr;

    function multiply(int256 id, int256 item) public {
        arr.push(id * item);
    }

    function get(uint256 id) public view returns (int256) {
        return arr[id];
    }

    function length() public view returns (uint256) {
        return arr.length;
    }
}