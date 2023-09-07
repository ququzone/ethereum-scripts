import * as ethers from 'ethers';
import * as data from './output.json';

const provider = new ethers.providers.JsonRpcProvider(
  'https://babel-api.testnet.iotex.io'
);

const main = async () => {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY || '', provider);

  const tx = await signer.sendTransaction({
    data: data.contract,
  });

  const receipt = await tx.wait();
  const contract = receipt.contractAddress;
  console.log(`deployed contract address: ${contract}`);

  const verify = await signer.call({
    to: contract,
    data: '0x',
  });
  console.log(`verify result: ${verify}`);
};

main();
