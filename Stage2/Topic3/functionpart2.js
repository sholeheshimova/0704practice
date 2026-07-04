// 04.07.2026

//task1  Neçə cüt ədəd olduğunu qaytarsın.
function countEven(evenArr) {
  let count = 0;
  for (let i = 0; i < evenArr.length; i++) {
    if (evenArr[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

let result = countEven([2, 5, 8, 9, 10]);
console.log(result);

//task2  Array-dəki tək ədədlərin cəmini qaytarsın.

function sumOdd(oddArr) {
  let sum = 0;
  for (let i = 0; i < oddArr.length; i++) {
    if (oddArr[i] % 2 == 1) {
      sum = sum + oddArr[i];
    }
  }
  return sum;
}

let resultOddSum = sumOdd([2, 5, 8, 9, 10]);
console.log(resultOddSum);

//task3 2ci hərfin neçə dəfə təkrarlandığını qaytarsın.

function countCharacter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);

    if (letter == str[i]) {
      count++;
    }
  }
  return count;
}
let letterCount = countCharacter("javascript", "a");
console.log(letterCount);

//task4 Reverse Without reverse()

function reverseText(revText) {
  let result = "";
  for (let i = revText.length - 1; i >= 0; i--) {
    // console.log(revText[i]);
    result = result + revText[i];
  }
  return result;
}
let text = reverseText("Frontend");
console.log(text);

//task5 Bütün boşluqları silsin. replaceAll() istifade etme

function removeSpaces(str1) {
  let result = str1.split(" ").join("");
  return result;
}
let newText = removeSpaces("I love JavaScript");
console.log(newText);



//task6  Arraydeki en kicik ededi tap

function findMin(minArr) {
  let min = minArr[0];
  for (let i = 0; i < minArr.length; i++) {
    if (minArr[i] < min) {
      min = minArr[i];
    }
  }
  return min;
}

let minNum = findMin([8, 2, 10, -5, 4]);
console.log(minNum);




//task7 "A" və ya "a" ilə başlayan sözlərin sayını qaytarsın.

function countWordsWithA(texts) {
    let count = 0;
    let words = texts.toLowerCase().split(" ")

    for (let i = 0; i < words.length; i++) {
        // console.log(words[i]);
         if(words[i][0] === "a") {
        count++;
    }
    }
    return count;
}
let findLetter = countWordsWithA("Aysel is amazing");
console.log(findLetter);




//task8  arrayin kicikden boyuye siralandigini yoxla
function isSorted(sortArr) {
    for (let i = 0; i < sortArr.length; i++) {

        if (sortArr[i] < sortArr[i + 1]) {
            return false
        }
    }
    return true;
}
let arr1 = isSorted([1,5,3,4])
console.log(arr1);




