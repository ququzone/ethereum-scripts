import * as ethers from 'ethers';

const main = async () => {
  const node = ethers.utils.HDNode.fromMnemonic(process.env.mnemonic || '');

  console.log(node.derivePath("m/44'/60'/0'/0/0").address);
};

main();
