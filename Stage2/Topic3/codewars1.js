//02.07.2026

//task1   count lowercase letters in a string
function lowercaseCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      count++;
    }
  }
  return count;
}
console.log(lowercaseCount(""));

//task2  Return the day
function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;

    default:
      return "Wrong, please enter a number between 1 and 7";
      break;
  }
}
console.log(whatday(3));

//task3 How old will I be in 2099?
function calculateAge(birthYear, year) {
  let age = Math.abs(year - birthYear);
  if (birthYear < year) {
    if (age === 1) {
      return `You are ${age} year old.`;
    } else {
      return `You are ${age} years old.`;
    }
  } else if (birthYear > year) {
    if (age === 1) {
      return `You will be born in ${age} year.`;
    } else {
      return `You will be born in ${age} years.`;
    }
  } else {
    return `You were born this very year!`;
  }
}

console.log(calculateAge(2005, 2026));

//task4  MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}
console.log(makeUpperCase("hello"));

//08.07.2026

//task5  reverseString
function solution(str) {
  let arrStr = str.split("").reverse().join("");
  return arrStr;
}
console.log(solution("world"));

//task6  Who ate the cookie?
function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}
console.log(cookie(true));

//task7  even or odd
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(4));

//task8   Find the smallest integer in the array
function findSmallestInt(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
console.log(findSmallestInt([2, 43, 56, 74, 3, 7, 853, 5]));

//task10
function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (array.length === 0) {
    return 0;
  }
  let average = sum / array.length;

  return average;
}
console.log(findAverage([1, 2, 3, 4, 5, 6]));
