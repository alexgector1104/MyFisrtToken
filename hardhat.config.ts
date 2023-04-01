require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const GOERLI_API_KEY = "7GrB6EItQJvBze51yHWBx0mHpM8jEY0w";
const MUMBAI_API_KEY = "BulCaczA8_MGcz34wlxGZNPVslXQOgRi";
const SETPOL_API_KEY = "Jt62jFDCQg9BOxFDkEthMgfaTw-0w3Wk";

module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli:{
      url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 5
    },
    mumbai:{
      url: `https://eth-mainnet.g.alchemy.com/v2/${MUMBAI_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 80001
    },
    setpol:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${SETPOL_API_KEY}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 11155111
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s3.binance.org:8545`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 97
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  },
};