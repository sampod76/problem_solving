
// “Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.”

const string1 =
  "“Recently I heard that you’v 95% marks in your exam. This is brilliant! \n I wish you’ll shine in your life! Good luck with all the barriers(/) in your life.”";

console.log(string1);

const value1 = 5;
const value2 = 2;
const sum = value1 + value2;
const multiple = value1 * value2;
const subtract = value1 - value2;
const divide = value1 / value2;


function checkEven(para1) {
  if (para1 < 0) {
    return;
  } else if (para1 % 2 === 0) {
    console.log("it is a even number");
  } else {
    console.log("it is a odd number");
  }
}

checkEven(10);

function checkType(para1) {
  if (para1 > 0) {
    console.log("It is a positive");
  } else if (para1 == 0) {
    console.log("It is 0");
  } else {
    console.log("it is a negative number");
  }
}
checkType(-18);


// Problem Solving:
// Problem-1: Array Filtering and Mapping
//1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.


const people = [
  { name: 'Alice khan', age: 23, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 22, gender: 'female' },

];

const filterAndMap = (peopleArray) => {
  const filteredPeople = peopleArray.filter(person => person.gender !== 'female');
  const namesArray = filteredPeople.map(person => person.name);
  return namesArray;
};


console.log(filterAndMap(people));


// Problem-2: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
// Functions

const books = [
  { title: 'calculas', author: 'mr b', year: 2000 },
  { title: 'mechanics', author: 'am son', year: 2010 },
  { title: 'physics', author: 'Stepen', year: 1995 },
  // Add more books as needed
];


const getBookTitles = (booksArray) => booksArray.map(book => book.title);

// Print the result
console.log(getBookTitles(books));


// Problem-3: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// Functions
const square = num => num ** 2;
const double = num => num * 2;
const add5 = num => num + 5;

// Function composition
const compose = (...functions) => input => functions.reduceRight((acc, fn) => fn(acc), input);
const squareDoubleAdd5 = compose(add5, double, square);

// Example usage
console.log(squareDoubleAdd5(3)); // Output: ((3^2) * 2) + 5 = 23


// Problem-4: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Japan', model: 'xl', year: 2010 },
  { make: 'Ford', model: 'Focus', year: 2018 },
];


const sortByYear = (carsArray) => carsArray.sort((a, b) => a.year - b.year);

// Print the sorted array
console.log(sortByYear(cars));

// Problem-5: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const findAndModify = (peopleArray, name, newAge) => {
  const person = peopleArray.find(person => person.name === name);

  if (person) {
    person.age = newAge;
  }

  return peopleArray;
};

// Example usage
const modifiedPeople = findAndModify(people, 'Bob', 35);
console.log(modifiedPeople);

// !Problem-1: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [1, 2, 12, 4, 5, 6, 7, 8, 9, 10];

const sumEvent = numbers.reduce((accumulator, currentValue) => {
  //   console.log("acc", accumulator, "current", currentValue);
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);

// console.log(sumEvent);

// !Problem-2: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("it is a leap year");
  } else {
    console.log("it is not a leap year");
  }
}

isLeapYear(2020);

// !Problem-3: Count Vowels:
// Write a function that counts the number of vowels in a given string.

function CountVowels(text) {
  const count = text.match(/[aeiou]/gi).length;
  return count;
}

function CountVowel2(text) {
  let count = 0;
  for (let letter of text.toLowerCase()) {
    if (["a", "e", "i", "o", "u"].includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log("CountVowels", CountVowels("this is a string"));
console.log("CountVowels2", CountVowel2("this is a string"));

// Example: Happy New Year
// !Problem-4: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const numbersWithDuplicates = [1, 2, 3, 4, , 4, 4, 2, 5, 6, 3];

const uniqueValues = numbersWithDuplicates.reduce(
  (accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  },
  []
);

console.log(uniqueValues);
// !Problem-5: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const maxArray = [2, 3, 10, 40, 2, 5, 7, 20, 70];

function maxNumber(array) {
  const maxValue = Math.max(...array);
  return maxValue;
}

console.log("MaxValue", maxNumber(maxArray));

// !Problem-6: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
const students = [
  { name: "Alice", grades: [90, 85, 92] },
  { name: "Bob", grades: [88, 76, 94] },
  { name: "Charlie", grades: [195, 89, 91] },
  // Add more students as needed
];

function sortByAverage(students) {
  return students.sort((a, b) => {
    const totalGrades1 = a.grades.reduce((acc, current) => acc + current, 0);
    const totalGrades2 = b.grades.reduce((acc, current) => acc + current, 0);
    return totalGrades1 - totalGrades2;
  });
}

console.log("sortby Average", sortByAverage(students));

// !Problem-7: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const products = [
  { name: "Product1", price: 25.99, quantity: 10 },
  { name: "Product2", price: 14.95, quantity: 20 },
  { name: "Product3", price: 39.99, quantity: 15 },
  // Add more products as needed
];

const totalValue = products.reduce((acc, current) => {
  return acc + current.price * current.quantity;
}, 0);

console.log(totalValue);
// !Problem-: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.
function findCommonElements(array1, array2) {
  const newArray = [...array1, ...array2];

  // return newArray;
  const commonArray = newArray.reduce((acc, current) => {
    if (
      !acc.includes(current) &&
      array1.includes(current) &&
      array2.includes(current)
    ) {
      acc.push(current);
    }
    return acc;
  }, []);

  return commonArray;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);
console.log("Common Elements:", commonElements);





