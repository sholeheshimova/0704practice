//task1   ortalama tap

function calculateAverage(arr) {
  let sum = 0;
  let totalAverage = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  totalAverage = Math.round(sum / arr.length);
  return totalAverage;
}
console.log(calculateAverage([1, 2, 3, 4, 5, 6])); // 4

//task2

function isEven(num) {
  return num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;

  // if (num % 2 === 0) {
  //     return `${num} is even number`
  // }else{
  //   return  `${num} is odd number`
  // }
}
console.log(isEven(7));

//task3  celcini faranheite cevir

function celciToFaranheit(celci) {
  let faranheit = (celci * 9) / 5 + 32;
  return faranheit;
}
console.log(celciToFaranheit(100)); //212

//task4  minimumu tap

function findMin(minArr) {
  let min = minArr[0];
  for (let i = 0; i < minArr.length; i++) {
    if (min > minArr[i]) {
      min = minArr[i];
    }
  }
  return min;
}
console.log(findMin([10, 4, 8, 56, 3]));

//task5

function removeDuplicates(arr1) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (newArr.includes(arr1[i])) {
    } else {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5]));


//EV TAPSIRIGI

//task6
function countChar(word, charElement) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === charElement) {
      count++;
    }
  }
  return count;
}
console.log(countChar("hello world", "o"));



//task7
function printReverse(revNum) {
 let revResult = "";
 for (let i = revNum; i > 0; i--) {
    // const element = array[i];

    revResult += i
 }
 return revResult
}
console.log(printReverse(5));



//task8 
function findIndex(findArr, index) {
   let findInd = findArr.indexOf(index);
   return findInd;
}
console.log(findIndex([1,2,3,4,5], 6)); // 2


//task9
function toUpperCase(upperStr) {
    return upperStr.toUpperCase()
}
console.log(toUpperCase("hello"));


//task10
function arrayLength(arr2) {
    return arr2.length
}
console.log(arrayLength([1,2,3,4,5,6]));


//task11
function getRandomElement(randomArr) {
    let newRandom =  Math.floor(Math.random() * randomArr.length);
    return randomArr[newRandom]
}
console.log(getRandomElement(["apple", "banana", "orange", "mango"]));



//task12
function getSquareRoot(sqrtNum) {
    return Math.sqrt(sqrtNum)
}
console.log(getSquareRoot(225));


//task13
function power(base,exponent) {
    return Math.pow(base,exponent)
}
console.log(power(2,3));





