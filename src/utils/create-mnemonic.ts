import * as ethers from 'ethers';

const main = async () => {
  const mnemonic = ethers.Wallet.createRandom().mnemonic;

  console.log(`Generated mnemonic phrase: ${mnemonic.phrase}`);

  const node = ethers.utils.HDNode.fromMnemonic(mnemonic.phrase);

  console.log(node.derivePath(mnemonic.path).address);
};

main();
