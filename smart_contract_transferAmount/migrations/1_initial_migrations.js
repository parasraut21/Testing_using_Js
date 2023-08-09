const Migrations = artifacts.require("TransferAmount");

module.exports = function (deployer,_network,accounts) {
  deployer.deploy(Migrations,accounts[0]);
};
