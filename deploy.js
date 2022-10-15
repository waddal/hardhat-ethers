const ethers = require("ethers");
const fs = require("fs");

async function main() {
  // compile them in our code
  // compile code separately
  // Ganache Address: http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "207db485a29e5c6dc6c9ee90ab056531943a6c7b2ad641ebfdf3c54067e0de49",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log(`Deploying contract, please wait...`);
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main().then(() =>
  process.exit(0).catch((error) => {
    console.error(error);
    process.exit(1);
  })
);
