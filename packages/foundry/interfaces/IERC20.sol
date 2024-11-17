// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Minimal ERC20 interface.
interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}