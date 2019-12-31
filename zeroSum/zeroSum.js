/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 2, 3, -1,-2]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/
function zeroSum(numbers){
    var obj = {};
    for(var i = 0;  i < numbers.length ; i++){

          if(obj[Math.abs(numbers[i])] === undefined){
              obj[Math.abs(numbers[i])] = numbers[i]
          }
          else{
              return true;
          }
    }
    return false;
}
zeroSum([ 1, 3, 2, -3])
zeroSum([ -3, 1, 3, 2 ])
zeroSum([ 1, 2, 3, -1,-2])
zeroSum([ 5, 7, 2, 9 ])