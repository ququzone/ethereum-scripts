import * as ethers from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://data-seed-prebsc-1-s1.binance.org:8545'
);

const end = async () => {
  const tx = await provider.getTransaction(
    '0xef25ef332559326e5cdd179d1d69488a08ad112b29466eeb07225a39ea32d013'
  );

  //const block = await provider.getBlockWithTransactions(7298683);

  const unsignedTx = ethers.utils.serializeTransaction(tx);
  console.log(unsignedTx);
};

end();
