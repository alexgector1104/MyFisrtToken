const hre = require("hardhat");

async function main() {
  
  const MyFisrtToken = await hre.ethers.getContractFactory("MyFisrtToken");
  const myFisrtToken = await MyFisrtToken.deploy(
    //construntor params
    '1'
  );

  await myFisrtToken.deployed();

  console.log(`Token Contract is deployed to: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
