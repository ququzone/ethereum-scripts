import * as ethers from 'ethers';
import * as data from './output.json';

const provider = new ethers.providers.JsonRpcProvider(
  'https://babel-api.testnet.iotex.io'
);

const main = async () => {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY || '', provider);

  let contract = '0x5b3c80eaD459C3De05d1BB6F99D0B9Efaab458c2';
  if (!process.env.SKIP_DEPLOY) {
    console.log('deploy contract ...');
    const tx = await signer.sendTransaction({
      data: data.contract,
    });

    const receipt = await tx.wait();
    contract = receipt.contractAddress;
    console.log(`deployed contract address: ${contract}`);
  }

  console.log('verify proof ...');
  const tx = await signer.sendTransaction({
    to: contract,
    data: data.calldata,
  });
  console.log(`verify proof tx: ${tx.hash}`);
};

main();
