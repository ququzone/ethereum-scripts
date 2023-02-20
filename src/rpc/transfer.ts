import * as ethers from 'ethers';

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'http://localhost:8545'
  );
  const wallet = new ethers.Wallet(
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    provider
  );

  const tx = await wallet.sendTransaction({
    to: process.env.TO,
    value: ethers.utils.parseEther('10'),
  });

  console.log(`transfer ${process.env.TO} hash: ${tx.hash}`);
};

main();
