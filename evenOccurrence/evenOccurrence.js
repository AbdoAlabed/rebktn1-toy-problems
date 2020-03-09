/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
function evenOccurrence(element) {
  var counter = {};
  for (let i = 0; i < element.length; i++) {
    counter[element[i]] = !counter[element[i]];
  }
  for (let i = 0; i < element.length; i++) {
    if (!counter[element[i]]) {
      return element[i];
    }
  }
  return null;
}

evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]);
