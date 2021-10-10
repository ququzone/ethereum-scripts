import * as ethers from 'ethers';
import {ERC20_ABI} from '../contract/abi';

const provider = new ethers.providers.WebSocketProvider(
  'wss://babel-api.mainnet.iotex.io/'
);

const main = async () => {
  const contract = new ethers.Contract(
    '0xa00744882684c3e4747faefd68d283ea44099d03',
    ERC20_ABI,
    provider
  );
  contract.on('Transfer', (from, to, value, log) => {
    console.log(`${from} transfer ${value} to ${to} at ${log.transactionHash}`);
  });
};

main();
