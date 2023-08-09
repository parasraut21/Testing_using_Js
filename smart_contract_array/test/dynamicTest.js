const Dynamic = artifacts.require("Dynamic");

contract("Dynamic", () => {
  let dynamic = null;

  before(async () => {
    dynamic = await Dynamic.deployed();
  });

  it("Should multiply and insert the element to the array", async () => {
    await dynamic.multiply(10, 2);
    const element = await dynamic.get(0);

    assert(element.toNumber() === 20);
  });
  it("Should get an element from arr array", async () => {
    await dynamic.multiply(20, 2);
    const element = await dynamic.get(1);
    assert(element.toNumber() === 40);
  });
  it("Should return the length of arr", async () => {
    const length = await dynamic.length();
    assert(length.toNumber() == 2);
  });
});