import * as ethers from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://babel-api.testnet.iotex.io'
);

const end = async () => {
  for (let i = 0; i < 100; i++) {
    const block = await provider.getBlock(i);
    console.log(block);
  }
};

end();
