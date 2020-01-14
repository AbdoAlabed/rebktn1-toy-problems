// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0
function deepestLevelValue(arr){
      var value = 0;

      function looping(arr){

        if(arr[0][0] === undefined ){
     	  return ++value;
     }
	    for (var i = 0; i < arr.length; i++) {
	     	if(typeof arr[i][0] !== 'number'){
			   value++;
			   return looping(arr[i])
		}
	}
  }
  return looping(arr) 
} 