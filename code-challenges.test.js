// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibSequence", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
      // Expected output: [1, 1, 2, 3, 5, 8]
    expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    const fibLength2 = 10
      // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//  ReferenceError: fibSequence is not defined


// b) Create the function that makes the test pass.
//pseudocode:
// Create a function called fibSequence
// Fibonacci sequence - each number is the sum of the two preceding numbers
// Input is a number
// Create function using for loop
// Use conditional statements to return an array with a length of the number inputted that contains numbers of the Fibonacci sequence
// In the conditional statements, for each number, we want to take the index of the number one spot before and add that to the index of the number two places before in order to get the next number
// Output is an array that length inputted containing the numbers of the Fibonacci sequence

const fibSequence = (num) => {
  let array = Array(num);
  for (i = 0; i < array.length; i++) {
    if (i > 1) {
      array[i] = array[i - 1] + array[i - 2];
    } else {
      array[i] = 1;
    }
  }
  return array;
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("sortLeastToGreatest", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    expect(sortLeastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(sortLeastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// ReferenceError: sortLeastToGreatest is not defined

// b) Create the function that makes the test pass.
// pseudocode:
// Create a function called sortLeastToGreatest
// Input is an object
// Declare a variable that turns the object's values into an array
// Sort the array from least to greatest
// Output is an array of the values sorted from least to greatest

const sortLeastToGreatest = (object) => {
  const sortedArray = Object.values(object)
  return sortedArray.sort((a,b) => a-b)
}
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("sum", () => {
  it("returns an array of the accumulating sum", () => {
    expect(sum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sum(accountTransactions3)).toEqual([])
  })
})
// ReferenceError: sum is not defined

// b) Create the function that makes the test pass.
// pseudocode:
// Create a function called sum
// Input is an array
// Use .map() to iterate over the array
// The new array is the sum of the first value plus the second value, then that new value plus the next value, and so on
// Output is an array of the accumulating sum

const sum = (array) => {
  return array.map((sum => value => sum += value)(0))
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
