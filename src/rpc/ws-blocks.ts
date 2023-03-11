import * as ethers from 'ethers';

const provider = new ethers.providers.WebSocketProvider(
  'wss://babel-api.testnet.iotex.io/ws'
);

const main = async () => {
  provider.on('block', async blocknr => {
    console.log(blocknr);
  });
};

main();
