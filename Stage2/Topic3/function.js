//task1
let count = 0;
let sait = "ai";

function countVowels(str) {
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);

    if (sait.includes(str[i])) {
      count++;
    }
  }
  console.log(count);
}

countVowels("javascript");

//task2

function printevens(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

printevens(10);

//task3

function sumDigits(number) {
  let sum = 0;
  let numberStr = number.toString();
  for (let i = 0; i < numberStr.length; i++) {
    sum += Number(numberStr[i]);
  }

  return sum;
}

console.log(sumDigits(123));


//EV TAPSIRIGI

//task4
let multiNumber = 3;
function multiplicationTable(nums) {
  for (let i = 1; i <= 10; i++) {
    // console.log(i);
    let multi = multiNumber * i;
    let totalMulti = `${multiNumber} x ${i} = ${multi}`;
    console.log(totalMulti);
  }
}

multiplicationTable(3);



//task5
function fizzBuzz(fizzNum, buzzNum, fizzBuzzNum) {
  for (let i = 1; i <= 15; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 15);



//task6
let sum = 0;

function sumArray(arr) {
  for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);
  sum = sum + arr[i]
  }
  console.log(sum);
}

sumArray([1, 2, 3, 4])




//task7
let fTotal = 1
function factorial(fNum) {
  for (let i = 1; i <= fNum; i++) {
  //  console.log(i);
  fTotal = fTotal * i
  }
  console.log(fTotal);
  
}
factorial(5);




//task8;
function  findMax(maxArr) {
  let max = maxArr[0];
   for (let i = 0; i < maxArr.length; i++) {
    // console.log(maxArr[i]);
    if (maxArr[i] > max) {
      max = maxArr[i]
    }
   }
   console.log(max);
}
findMax([3, 7, 2, 8, 5])




//task9
function reverseString(Rstr) {
   
    let newStr = Rstr.split("").reverse().join("");
    console.log(newStr);
  
}
reverseString("hello")



//task10
function isPrime(primeNum) {
  if (primeNum % 2 == 1) {
    console.log(true);
  }else{
    console.log(false);
  }
}
isPrime(7)


