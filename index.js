/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfIntegers = function (num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else return sum;
};
console.log(sumOfIntegers(3, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNumbers = function (firstNum, secondNum) {
  let sum = firstNum + secondNum;
  if (firstNum === 50 || secondNum === 50 || sum === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumbers(12, 3));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharacterFromString = function (str, strPos) {
  let firstPart = str.substring(0, strPos);
  let secondPart = str.substring(strPos + 1, str.length);
  return firstPart + secondPart;
};
console.log(removeCharacterFromString("strive", 2));
/*

4)
 Create a function to find the largest of three given integers.
*/
const largestNumber = function (a, b, c) {
  let maxNumber = 0;
  if (a > b) {
    maxNumber = a;
  } else {
    maxNumber = b;
  }
  if (c > maxNumber) {
    maxNumber = c;
  }
  return maxNumber;
};
console.log(largestNumber(10, 60, 24));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const numRange = function (x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(numRange(12, 10));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const stringCopies = function (str, n) {
  if (n < 0) return false;
  else return str.repeat(n);
};
console.log(stringCopies("corn ", 6));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCityName = function (str) {
  if (
    str.length >= 3 &&
    (str.substring(0, 3) == "Los" || str.substring(0, 3) == "New")
  ) {
    return str;
  }
  return "";
};
console.log(displayCityName("Cologne"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const arrayOfIntegers = function (arr) {
  return arr[0] + arr[1] + arr[2];
};
console.log(arrayOfIntegers([34, 2, 7]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const arrayContains = function (arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return true;
  }
  return false;
};
console.log(arrayContains([1, 4]));
// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const arrayNotContain = function (arr) {
  if (!arr.includes(1) && !arr.includes(3)) {
    return true;
  }
  return false;
};
console.log(arrayNotContain([1, 4]));

// 11)

// Create a function to find the longest string from a given array of strings.

const longestString = function (arrStr) {
  let word = arrStr[0].length;
  arrStr.map((v) => (word = Math.max(word, v.length)));
  result = arrStr.filter((v) => v.length == word);
  return result;
};
console.log(longestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));
// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
const angleType = function (angle) {
  if (angle === 90) {
    return "right angle";
  } else if (angle >= 0 && angle < 90) {
    return "acute angle";
  } else if (angle < 180) {
    return "obtuse angle";
  } else if (angle === 180) {
    return "straight angle";
  }
  return "not a type of angle";
};
console.log(angleType(40));

// 13)

// Create a function to find the index of the greatest element of a given array of integers

const greatestInArray = function (arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
};
console.log(greatestInArray([10, 1000, 324, 45, 90]));

// 14)

// Create a function to get the largest even number from an array of integers.

const maxEvenNumber = function (arr) {
  arr.sort((x, y) => y - x);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) return arr[i];
  }
};
console.log(maxEvenNumber([20, 40, 200]));

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.

const positiveNegativeNumber = function (int1, int2) {
  if ((int1 < 0 && int2 > 0) || (int1 > 0 && int2 < 0)) {
    return true;
  }
  return false;
};
console.log(positiveNegativeNumber(-2, -2));

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case.
//  If the string length is less than 3 convert all the characters in upper case.

const lowerUpper = function (str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let firstPart = str.substring(0, 3).toLowerCase();
  let secondPart = str.substring(3, str.length).toUpperCase();
  return firstPart + secondPart;
};
console.log(lowerUpper("javascript"));
// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65
// other wise return 80.

const integerSumRange = function (int1, int2) {
  let sum = int1 + int2;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
};
console.log(integerSumRange(20, 35));

// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

const stringToNumber = function (num) {
  let newNum = parseInt(num);
  if (newNum % 3 === 0) {
    return "Diego";
  } else if (newNum % 5 === 0) {
    return "Riccardo";
  } else if (newNum % 7 === 0) {
    return "Stefano";
  }
  return newNum;
};
console.log(stringToNumber("30"));
/*  

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
const acronym = function (str) {
  let newStr = str.split(" ");
  let acrPhrase = "";
  newStr.forEach((el) => {
    const [char] = el;
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      acrPhrase += char;
    }
  });
  return acrPhrase;
};
console.log(acronym("British Broadcasting Corporation"));
