const Migrations = artifacts.require("Dynamic");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
