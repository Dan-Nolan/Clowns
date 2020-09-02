const { assert } = require("chai");

describe("CLOWN TOKEN TESTS", function() {
  let contract;
  beforeEach(async () => {
    const ClownToken = await ethers.getContractFactory("ClownToken");
    contract = await ClownToken.deploy(ethers.utils.parseEther("1000"));
  });

  it("should give me 1000 clown tokens", async function() {
    const signer = ethers.provider.getSigner(0);
    const address = await signer.getAddress();
    const balance = await contract.balanceOf(address);

    assert.equal(
      balance.toString(),
      ethers.utils.parseEther("1000")
    );
  });

  describe('after sending tokens to a friend', () => {
    beforeEach(async () => {
      const signer = ethers.provider.getSigner(1);
      const address = await signer.getAddress();
      await contract.transfer(address, ethers.utils.parseEther("100"));
    });

    it("should leave me with 900 clown tokens", async function() {
      const signer = ethers.provider.getSigner(0);
      const address = await signer.getAddress();
      const balance = await contract.balanceOf(address);

      assert.equal(
        balance.toString(),
        ethers.utils.parseEther("900")
      );
    });

    it("should give my friend 100 clown tokens", async function() {
      const signer = ethers.provider.getSigner(1);
      const address = await signer.getAddress();
      const balance = await contract.balanceOf(address);

      assert.equal(
        balance.toString(),
        ethers.utils.parseEther("100")
      );
    });

    describe("after giving a friend the approval to spend", () => {
      beforeEach(async () => {
        const signer0 = ethers.provider.getSigner(0);
        const address0 = await signer0.getAddress();
        const signer1 = ethers.provider.getSigner(1);
        const address1 = await signer1.getAddress();

        await contract.connect(signer0).approve(
          address1,
          ethers.utils.parseEther("300")
        );

        await contract.connect(signer1).transferFrom(
          address0,
          address1,
          ethers.utils.parseEther("250")
        );
      });

      it('should give my friend 350 total tokens', async () => {
        const signer = ethers.provider.getSigner(1);
        const address = await signer.getAddress();
        const balance = await contract.balanceOf(address);

        assert.equal(
          balance.toString(),
          ethers.utils.parseEther("350")
        );
      });

      it('should give my friend allowance of 50 still', async () => {
        const signer0 = ethers.provider.getSigner(0);
        const address0 = await signer0.getAddress();
        const signer1 = ethers.provider.getSigner(1);
        const address1 = await signer1.getAddress();

        const allowance = await contract.allowance(address0, address1);

        assert.equal(
          allowance.toString(),
          ethers.utils.parseEther("50")
        );
      });
    });
  });
});
