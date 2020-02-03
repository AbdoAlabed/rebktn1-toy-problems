/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
function longestRun(string) {
    var result = string.split('');
    var temp = {};
    var arr = [];
    var number = 0; 
    var total = [];

    for (var i = 0 ; i < result.length; i++) {
        var count = 0;

    	for (var j = 0; j < result.length; j++) {
    	   if(result[i] === result[j]){
               temp[result[i]] = ++count
           }
           else if(temp[result[i]] !== undefined){
               arr.push(count);
               break;
           }
        }
    }
    arr.sort(function(a, b) {
        return b - a;
      })

    for(var key in temp){
       if(key === arr[0]){
          number = result.indexOf(key);
       }
    }
    total.push(number,number + (number-1))
    console.log(total);
}
=======



>>>>>>> 7358c78edba3c993773b7de22c6cc1c2bb42aaae
