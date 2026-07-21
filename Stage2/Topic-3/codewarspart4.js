//16.07.2026
//task1  arraydaki en kicik elementi silmek

function removeSmallest(arr) {
  let newArr = [];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let indexMin = arr.indexOf(min);
  newArr.splice(indexMin, 1);
  return newArr;
}
console.log(removeSmallest([2, 3, 1, 5, 4]));

//task1 en uzun sozu tap

function findLongestWord(sentence) {
  let strToArr = sentence.split(" ");
  let longWord = "";
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length > longWord.length) {
      longWord = strToArr[i];
    }
  }
  return longWord;
}

function execute(callback, value) {
  return callback(value);
}
console.log(execute(findLongestWord, "I love learning JavaScript"));

//task2 yalniz musbet ededleri topla

function sumPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(execute(sumPositive, [2, 5, -1, -9, 6, -4]));

//task3 Ən böyük və ən kiçik fərqini tap

function difference(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}
console.log(execute(difference, [5, 8, 2, 10, 1]));

//task4 her sozun ilk herfini boyut

function capitalize(sentence) {
  let strToArr = sentence.split(" ");
  let newArr = [];

  for (let i = 0; i < strToArr.length; i++) {
    let word = strToArr[i].charAt(0).toUpperCase() + strToArr[i].slice(1);
    newArr.push(word);
  }
  return newArr.join(" ");
}

console.log(execute(capitalize, "frontend development is awesome"));

//task5

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(execute(removeDuplicates, [1, 3, 2, 3, 5, 7, 4, 2, 8, 1]));






//task1 calculator

function multiplication(num1,num2) {
 return num1 * num2
}
function division(num1,num2) {
 return num1 / num2
}
function addition(num1,num2) {
 return num1 + num2
}
function subtraction(num1,num2) {
 return num1 - num2
}

function calculate(firstNumber,secondNumber,callback) {
 return callback(firstNumber,secondNumber)
}
console.log(calculate(12,3,multiplication));
console.log(calculate(12,3,subtraction));
console.log(calculate(12,3,addition));
console.log(calculate(12,3,division));



//task2

function psw(text) {
  if (text.length >= 8) {
    return "True Password"
  }else{
    return "Pls write right password"
  }
}
function validatePassword(password,callback) {
  return callback(password)
}
console.log(validatePassword("hdj28h284h",psw));



//task3

function total(grade) {
  if (grade >=91 && grade <= 100) {
    return `A`
  }else if (grade >=81 && grade < 91) {
    return `B`
  }else if (grade >=71 && grade < 81) {
    return `C`
  }else if (grade >=61 && grade < 71) {
    return `D`
  }else if (grade >=51 && grade < 61) {
    return `E`
  }else if (grade < 51) {
    return `F`
  }else{
    return `pls right score`
  }
}

function studentResult(score,callback) {
 return callback(score)
}
console.log(studentResult(75,total));




//task4

function discount(number,num) {
 return number - (number * 10) / 100;
}

function calculatePrice(original,callback) {
  return callback(original)
}
console.log(calculatePrice(80,discount));



//task5

function upperText(word) {
  return word.toUpperCase()
}

function strToArr(word) {
   return word.split(" ")
}

function longText(word) {
  let strToArr = word.split(" ");
  let longWord = "";
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length > longWord.length) {
      longWord = strToArr[i];
    }
  }
  return longWord;
}


function formatText(text,callback) {
  return callback(text)
}


console.log(formatText("shola",upperText));
console.log(formatText("shola hashimova",strToArr));
console.log(formatText("shola hashimova",longText));

