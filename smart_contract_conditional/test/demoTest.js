
const Even = artifacts.require("Even");

contract("Even", () => {
  it("Should check whether a is even or not", async () => {
    const even = await Even.deployed();
    try {
      const result = await even.checkEven(4);         // this is beacuse of try catch block we have in .sol file
      assert(result.toNumber() === 4);
    } catch (e) {
      assert(false, "a is odd");
    }
  });
});