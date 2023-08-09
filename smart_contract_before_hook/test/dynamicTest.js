const Array = artifacts.require("Dynamic");
contract("Dynamic", () => {
  let array = null;

  before(async () => {
    array = await Array.deployed();
  });

  it("Should insert an element into an array arr", async () => {
    await array.insert(10);
    const element = await array.arr(0);

    assert(element.toNumber() === 10);
  });
  it("Should get an element from arr array", async () => {
    await array.insert(20);
    const element = await array.arr(0);
    assert(element.toNumber() === 20);
  });
  it("Should return the length of arr", async () => {
    const length = await array.length();
    assert(length.toNumber() == 10);
  });

  it("Should get all the elements of arr", async () => {
    const arr = await array.getAll();
    const elements = arr.map((element) => element.toNumber());
    assert.deepEqual(elements, [20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});