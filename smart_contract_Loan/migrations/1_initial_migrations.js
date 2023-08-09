const Migrations = artifacts.require("Loan.sol");

module.exports = function (deployer,_network,accounts) {
  deployer.deploy(Migrations,1000,10,100,accounts[1],accounts[2]);
};
