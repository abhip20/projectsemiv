
const hre = require("hardhat");

async function main() {


  const TextZ = await hre.ethers.getContractFactory("TextZ");
  const textZ = await TextZ.deploy();
  await textZ.deployed();

  console.log(
    `Contract Address: ${textZ.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
