const Migrations = artifacts.require("Even");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};