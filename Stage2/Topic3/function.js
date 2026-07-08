//task1

function countVowels(vowelsStr) {
  let count = 0;
  let vowels = "aioue";

  for (let i = 0; i < vowelsStr.length; i++) {
    if (vowels.includes(vowelsStr[i])) {
      count++
    }
  }
  return count
}
console.log(countVowels("javascript"));




//task2

function printEvens(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
      
    }
  }
}
console.log(printEvens(12));



//task3


function sumDigits(digitNum) {
  let sum = 0;
  let numToStr = digitNum.toString();

  for (let i = 0; i < numToStr.length; i++) {
    sum += Number(numToStr[i])
  }
  return sum;
}
console.log(sumDigits(1234));





//EV TAPSIRIGI

//task4

function multiplicationTable(multiNum) {
  let total = "";
  for (let i = 1; i <= 10; i++) {
    
    let multi = multiNum * i;

    total  += `${multiNum} X ${i} = ${multi}`
  }
  return total;
  
}
console.log(multiplicationTable(3));




//task5
function fizzBuzz(fizzNum, buzzNum, fizzBuzzNum) {
  for (let i = 1; i <= 15; i++) {
    // console.log(i);
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      console.log("FizzBuzz");
    } else if (i % fizzNum == 0) {
      console.log("Fizz");
    } else if (i % buzzNum == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 15);



//task6

function sumArray(arr) {
  let sum =  0;
  for (let i = 0; i < arr.length; i++) {
   
    sum += arr[i]
  }
  return sum
}
console.log(sumArray([1,2,3,4,5]));




//task7

function factorial(factNum) {
  let totalFact = 1;
  for (let i = 1; i <= factNum; i++) {
    
    totalFact = totalFact * i
    
  }
  return totalFact;
}
console.log(factorial(6));





//task8;

function findMax(maxArr) {
  let max = maxArr[0];

  for (let i = 0; i < maxArr.length; i++) {
    if (maxArr[i] > max) {
      max = maxArr[i]
    }
  }
  return max;
}
console.log(findMax([3,5,1,8,12]));




//task9

function reverseString(str1) {
  
  let revStr = str1.split("").reverse().join("")
  return revStr
}
console.log(reverseString("hello"));




//task10
function isPrime(primeNum) {
  if (primeNum % 2 == 1) {
    console.log(true);
  }else{
    console.log(false);
  }
}
isPrime(7)


