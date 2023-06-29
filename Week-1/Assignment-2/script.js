//  find the max value of an array of numbers
function max (numbers) {
    // your code here, for-loop method preferred

    // build-in function
    //return Math.max(...numbers);

    // for-loop method
    const len = numbers.length;
    let max = numbers[0];
    for (let i = 1; i < len; i++) {
        if (numbers[i] > max) max = numbers[i];
        // max = max > numbers[i] ? max : numbers[i];
    }
    return max;
}



// find the first position of the target number inside an array of numbers.
function findPosition (numbers, target) {
    // your code here, for-loop method preferred

    // build-in function
    // return numbers.findIndex((element) => element === target)
    
    // for-loop method
    const len = numbers.length;
    for (let i = 0; i < len; i++) {
        if (numbers[i] === target) return i;
    }
    return -1;  // not found
}


// test case
console.log(max ([1, 2, 4, 5])); // should print 5
console.log(max ([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log (findPosition ([5, 2, 7, 1, 6], 8)); // should print -1
