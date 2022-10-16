const ethers = require("ethers");
const fs = require("fs");

async function main() {
  // Ganache Address: http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "10f088495b2366969580442a8da07fe3d95ac15a9b5001c0f5a9d39e3daada92",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log(`Deploying contract, please wait... \n`);
  const contract = await contractFactory.deploy();
  await contract.deployTransaction.wait(1);

  // retrieving fav num
  const currentFavoriteNumber = await contract.retrieve();
  console.log(`Current Favoite Number: ${currentFavoriteNumber.toString()}`);

  // storing a new variable as fav num
  // usually best practice to pass variables to contract functions as strings.
  const transactionResponse = await contract.store("7");
  const transactionReceipt = await transactionResponse.wait(1);

  // retrieving fav num
  const updatedFavoriteNumber = await contract.retrieve();
  console.log(`Updated Favorite Number: ${updatedFavoriteNumber.toString()}`)
}

main().then(() =>
  process.exit(0).catch((error) => {
    console.error(error);
    process.exit(1);
  })
);
