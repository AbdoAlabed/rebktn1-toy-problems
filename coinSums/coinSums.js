/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:
5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p
In other words, find all the possible combinations of coins that sum to a given pence value.
*/

// HELPERS
var coins = [1, 2, 5, 10, 20, 50, 100, 200];

function coinSums(total) {
  // your code here...
  const result = [];
  const multiResult = number => {
    for (let i = 1; i <= number; i++) {
      for (let j = number; j > 0; j--) {
        if (i * j === number) {
          result.push(`${i}p * ${j}`);
        }
        if (i + j === number && (i === 1 || j === 1)) {
          if (i !== j) result.push(`${i}p * ${j} + 1 * 1p`);
        } else if (i + j === number) {
          result.push(`${i}p * 1 + ${j}p *1`);
        }
      }
    }
  };
  multiResult(total);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  console.log(`coin sums is : ${result.length}`);
}
coinSums(5);
