async function main() {
  const wallet = await hre.ethers.getContractFactory("wallet");
  const walet = await wallet.deploy();

  await walet.deployed();

  console.log(`wallet contract is deployed to address ${walet.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
