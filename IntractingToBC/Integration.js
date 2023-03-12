//contract address 0x76Fd41F5C59A47FbCeED3103Ad71e27CeA590099
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-goerli.g.alchemy.com/v2/C_xbLznsl8H8U-kKrQoeVJYGqMN8sTSn"
);
const contractAddress = "0x76Fd41F5C59A47FbCeED3103Ad71e27CeA590099";
const contractAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

//** READING FROM SMART CONTRACT  **//

const readContractIntegration = async () => {
  const walletContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    provider
  );
  const walletName = await walletContract.name();
  const value = await walletContract.getValue();
  const contractBalance = await walletContract.contractBalance();
  const accountBlance = await walletContract.accountBalance("shahidniazi.eth");
  console.log("Wallet name is : ", walletName);
  console.log("Number value is : ", value.toString());
  const valueInEther = ethers.utils.formatEther(contractBalance);
  const specificValueInEther = ethers.utils.formatEther(accountBlance);
  console.log("Contract balance is : ", valueInEther);
  console.log("Address balance is : ", specificValueInEther);
};
readContractIntegration();

//** WRITTING TO SMART CONTRACT  **//
