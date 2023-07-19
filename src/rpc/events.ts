import * as ethers from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(
  'https://babel-api.mainnet.iotex.io'
);

const main = async () => {
  const abi = ['event Mint(address indexed account, uint256 indexed tokenId)'];

  const contract = new ethers.Contract(
    '0x778E131aA8260C1FF78007cAde5e64820744F320',
    abi,
    provider
  );
  const eventFilter = contract.filters.Mint(
    '0x9e32f48EaE26e329fA7223318a05e002846Fa8eE'
  );

  const result = await contract.queryFilter(eventFilter, 24706500, 24808400);

  for (let i = 0; i < result.length; i++) {
    const event = result[i];
    console.log(`${event.args!.account},${event.args!.tokenId}`);
  }
};

main();
