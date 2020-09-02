//SPDX-License-Identifier: Unlicense
pragma solidity ^0.6.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ClownToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Evil Clowns", "EC") {
        _mint(msg.sender, initialSupply);
    }
}
