import * as ethers from 'ethers';

const y_sum_s = [
  3,
  101,
  20,
  216,
  254,
  222,
  8,
  18,
  241,
  104,
  67,
  5,
  58,
  52,
  215,
  201,
  206,
  249,
  189,
  55,
  172,
  180,
  29,
  47,
  39,
  86,
  156,
  96,
  42,
  175,
  240,
  234,
  41,
];

console.log(Buffer.from(y_sum_s).toString('hex'));
console.log(
  'address: ',
  ethers.utils.computeAddress('0x' + Buffer.from(y_sum_s).toString('hex'))
);
