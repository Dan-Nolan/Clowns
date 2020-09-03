async function main() {
  const ClownToken = await ethers.getContractFactory("ClownToken");
  const contract = await ClownToken.attach("0x6A9b144589022a898df8ae80504afD63eFa69476");

  await contract.transfer("0xfd9d910a08720b110888189bbfd200612511839a", ethers.utils.parseEther("5000000"));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
