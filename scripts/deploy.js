async function main() {
  const ClownToken = await ethers.getContractFactory("ClownToken");
  const contract = await ClownToken.deploy(ethers.utils.parseEther("1000"));

  await contract.deployed();

  console.log("Token deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
