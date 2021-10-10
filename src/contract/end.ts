import * as ethers from 'ethers';
import {AUCTION_ABI} from './abi';

const provider = ethers.getDefaultProvider('kovan', process.env.INFURA_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY || '', provider);

const end = async () => {
  const contract = new ethers.Contract(
    '0x044Bc5A48B8daBc2197eA33b5076572275E7aCCd',
    AUCTION_ABI,
    signer
  );

  const overrides = {
    gasLimit: 1000000,
    gasPrice: '1000000000',
    value: ethers.utils.parseEther('0'),
  };

  const tx = await contract.end(
    [
      '0x9c6a9e68bcac01afb53feffbf819c1b30c56bc62',
      '0x8984a423ce4bc23e97c1795ea11a56abecb1ee56',
      '0x347ba66e4d8bb18601ba03e2b32ceb22c8a8cbd8',
      '0xf09b8dda559292111af945e91717da39eef34ade',
      '0x8def74f25f5429831044c64c057121e3322133f0',
    ],
    overrides
  );
  console.log(tx);
};

end();
