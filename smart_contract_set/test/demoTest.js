const Demo = artifacts.require("Demo");

contract("Demo", () => {
  it("Should set the value of item variable in smart contract", async () => {
    const demo = await Demo.deployed();
    await demo.set("Hello");
    const result = await demo.get();
    assert(result === "Hello");
  });
});