import { ethers } from "hardhat";

async function main() {
  
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(
    //construntor params
  );

  await token.deployed();

  console.log(`Token Contract is deployed to: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
