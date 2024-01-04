/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = -10000;
    if(numbers.length == 0){
        return undefined;
    }
    numbers.forEach(number => {
        if(max < number)
            max = number;
    });
    return max;
}

module.exports = findLargestElement;