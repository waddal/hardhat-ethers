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
    "10f088495b2366969580442a8da07fe3d95ac15a9b5001c0f5a9d39e3daada92",
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
  
  // we can add overrides to this deploy method. gasPrice, gasLimit.. similar to metamask options
  // const contract = await contractFactory.deploy({gasPrice: 999999999});
  // console.log("Deployment transaction response: ", contract.deployTransaction);

  // wait for x-amount of blocks to be confirmed before deploying. in this case 1.
  // const transactionReceipt = await contract.deployTransaction.wait(1);
  // console.log("Transaction receipt: ", transactionReceipt);
  // const nonce = wallet.getTransactionCount();
  // const tx = {
  //   // nonce: used in wallets and signers to sign transactions. in mining - a number used to solve the problem.
  //   nonce: nonce,
  //   gasPrice: 20000000000,
  //   gasLimit: 1000000,
  //   to: null,
  //   value: 0,
  //   data: "0x608060405234801561001057600080fd5b506107a0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631c5220c2146100675780632e64cec114610083578063471f7cdf146100a1578063502aa3b5146100bf5780636057361d146100f05780638bab8dd51461010c575b600080fd5b610081600480360381019061007c9190610440565b61013c565b005b61008b6101cc565b6040516100989190610589565b60405180910390f35b6100a96101d5565b6040516100b69190610589565b60405180910390f35b6100d960048036038101906100d4919061049c565b6101db565b6040516100e7929190610559565b60405180910390f35b61010a6004803603810190610105919061049c565b610297565b005b610126600480360381019061012191906103f7565b6102a1565b6040516101339190610589565b60405180910390f35b6001604051806040016040528084815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906101989291906102cf565b50602082015181600101555050806002836040516101b69190610542565b9081526020016040518091039020819055505050565b60008054905090565b60005481565b600181815481106101eb57600080fd5b906000526020600020906002020160009150905080600001805461020e9061066d565b80601f016020809104026020016040519081016040528092919081815260200182805461023a9061066d565b80156102875780601f1061025c57610100808354040283529160200191610287565b820191906000526020600020905b81548152906001019060200180831161026a57829003601f168201915b5050505050908060010154905082565b8060008190555050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b8280546102db9061066d565b90600052602060002090601f0160209004810192826102fd5760008555610344565b82601f1061031657805160ff1916838001178555610344565b82800160010185558215610344579182015b82811115610343578251825591602001919060010190610328565b5b5090506103519190610355565b5090565b5b8082111561036e576000816000905550600101610356565b5090565b6000610385610380846105c9565b6105a4565b9050828152602081018484840111156103a1576103a0610733565b5b6103ac84828561062b565b509392505050565b600082601f8301126103c9576103c861072e565b5b81356103d9848260208601610372565b91505092915050565b6000813590506103f181610753565b92915050565b60006020828403121561040d5761040c61073d565b5b600082013567ffffffffffffffff81111561042b5761042a610738565b5b610437848285016103b4565b91505092915050565b600080604083850312156104575761045661073d565b5b600083013567ffffffffffffffff81111561047557610474610738565b5b610481858286016103b4565b9250506020610492858286016103e2565b9150509250929050565b6000602082840312156104b2576104b161073d565b5b60006104c0848285016103e2565b91505092915050565b60006104d4826105fa565b6104de8185610605565b93506104ee81856020860161063a565b6104f781610742565b840191505092915050565b600061050d826105fa565b6105178185610616565b935061052781856020860161063a565b80840191505092915050565b61053c81610621565b82525050565b600061054e8284610502565b915081905092915050565b6000604082019050818103600083015261057381856104c9565b90506105826020830184610533565b9392505050565b600060208201905061059e6000830184610533565b92915050565b60006105ae6105bf565b90506105ba828261069f565b919050565b6000604051905090565b600067ffffffffffffffff8211156105e4576105e36106ff565b5b6105ed82610742565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b8381101561065857808201518184015260208101905061063d565b83811115610667576000848401525b50505050565b6000600282049050600182168061068557607f821691505b60208210811415610699576106986106d0565b5b50919050565b6106a882610742565b810181811067ffffffffffffffff821117156106c7576106c66106ff565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61075c81610621565b811461076757600080fd5b5056fea2646970667358221220da7dc40bfa45fdbaa4192d248d165495e8e4eb1ac51246f5946dd06cf6bd2b4a64736f6c63430008070033",
  //   chainId: 1337,
  // };
  // const sentTxResponse = await wallet.sendTransaction(tx);
  // await sentTxResponse.wait(1);
  // console.log(sentTxResponse);
}

main().then(() =>
  process.exit(0).catch((error) => {
    console.error(error);
    process.exit(1);
  })
);