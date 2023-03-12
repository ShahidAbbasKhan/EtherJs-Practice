const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/8a491a4d22c146f3bbc14bd0840beb8a`
);
const getBlockNumber = async () => {
  const blockNum = await provider.getBlockNumber();
  console.log("Block Number is", blockNum);
};
const getBalance = async () => {
  const balance = await provider.getBalance(`shahidniazi.eth`);
  //in Ether format
  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Balance in Ethers Is", balanceEther);
  //in Wei Format(bigNumber)
  const balanceWei = ethers.utils.parseEther(balanceEther);
  console.log("Balance in Wei Is", balanceWei);
  //Wei in string format
  const balanceString = ethers.utils.parseEther(balanceEther).toString();
  console.log("Balance in Wei Is", balanceString);
};
getBlockNumber();
getBalance();
