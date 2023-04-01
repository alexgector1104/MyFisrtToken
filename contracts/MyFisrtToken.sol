// SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

  constructor(uint256 initialSupply) ERC20 ("MyFirstToken","MFT") {
    _mint(msg.sender, initialSupply * 10 ** 18);
  }
}