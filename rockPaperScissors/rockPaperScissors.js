/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
	 "RSR",
	 "RPP",
	 "RSS",
	 "RPS",
	 "RSP"
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// var rockPaperScissors = function(number) {
//   let rock = "R",
//     peper = "P",
//     scissor = "S";
//   let test = "RPS";
//   let temp1 = "",
//     temp2 = "",
//     temp3 = "";
//   let result = [];
//   for (var i = 0; i < number; i++) {
//     if (i === 0) {
//       temp1 = rock;
//       temp2 = peper;
//       temp3 = scissor;
//     } else if (i === 1) {
//       temp1 = peper;
//       temp2 = rock;
//       temp3 = scissor;
//     } else {
//       temp1 = scissor;
//       temp2 = rock;
//       temp3 = peper;
//     }

//     for (var j = 0; j < number * number; j++) {
//       if (j < number) {
//         result.push(temp1 + temp1 + test[j]);
//       } else if (j < number + number) {
//         result.push(temp1 + temp2 + test[j - number]);
//       } else if (j < number * number) {
//         result.push(temp1 + temp3 + test[j - (number + number)]);
//       }
//     }
//   }
//   console.log(result);
//   // TODO: your solution here
// };

//
var rockPaperScissors = function(number) {
  if (number === 0) return [];
  const result = [];

  function playRound(plays) {
    if (plays.length === number) {
      result.push(plays);
      return;
    }
    ["R", "P", "S"].forEach(play => {
      playRound(plays + play);
    });
  }
  playRound("");
  return result;
};
