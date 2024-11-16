//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./DeployHelpers.s.sol";
import { DeployMockHumanOracle } from "./DeployMockHumanOracle.s.sol";
import { DeployHumanOracle } from "./DeployHumanOracle.s.sol";
import { DeployHumanOracleWithVault } from "./DeployHumanOracleWithVault.s.sol";
import { DeployWorldIDRegister } from "./DeployWorldIDRegister.s.sol";
import { DeployHumanOracleWithWorldIdRegister } from "./DeployHumanOracleWithWorldIdRegister.s.sol";

contract DeployScript is ScaffoldETHDeploy {
  function run() external {
    // DeployMockHumanOracle deployMockHumanOracle = new DeployMockHumanOracle();
    // deployMockHumanOracle.run();

    // DeployHumanOracle deployHumanOracle = new DeployHumanOracle();
    // deployHumanOracle.run();

    // DeployHumanOracleWithVault deployHumanOracleWithVault = new DeployHumanOracleWithVault();
    // deployHumanOracleWithVault.run();

    DeployHumanOracleWithWorldIdRegister deployHumanOracleWithWorldIdRegister = new DeployHumanOracleWithWorldIdRegister();
    deployHumanOracleWithWorldIdRegister.run();

    // DeployWorldIDRegister worldIDregister = new DeployWorldIDRegister();
    // worldIDregister.run();

    // deploy more contracts here
    // DeployMyContract deployMyContract = new DeployMyContract();
    // deployMyContract.run();
  }
}
