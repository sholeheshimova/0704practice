// Task 1 — Count Uppercase Letters ⭐

// Bir funksiya yaz.

// String qəbul etsin və içində neçə böyük hərf olduğunu qaytarsın.


function countUpperCase(str) {
    let strSum = 0;
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);

        if (str[i] == str[i].toUpperCase()) {
            strSum ++;
        }
    }
     console.log(strSum);    //5
}

countUpperCase("JaVaScRiPt")




// Task 2 — Find Second Largest Number ⭐⭐

// Array-dəki ikinci ən böyük ədədi tap.

function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i]
        }
    }
      console.log(secondMax);
    
}
findSecondLargest([5, 2, 9, 7, 4])





// Task 3 — Palindrome Checker ⭐⭐

// Funksiya yaz.

// Əgər söz tərsinə çevriləndə özü ilə eynidirsə true, əks halda false qaytarsın.


function isPalindrom(Pstr) {
        if (Pstr.split().reverse() == Pstr) {
            console.log(true);
        }else{
            console.log(false);
        }
}
isPalindrom("level")





// Task 4 — Count Words ⭐⭐⭐

// String-də neçə söz olduğunu tap.

function countWords(text) {

    let words = text.split(" ");
    console.log(words.length);
     
}
countWords("I love JavaScript very much")





// Task 5 — Find Longest Word ⭐⭐⭐⭐

// String qəbul etsin.

// Ən uzun sözü qaytarsın.



function findLongestWord(longText) {
    
    let longWord = longText.split(" ");
    let maxWord = longWord[0]

    for (let i = 0; i < longWord.length; i++) {
        
       if (longWord[i].length > maxWord.length) {
          maxWord = longWord[i]
       }  
    }
      console.log(maxWord);
}
findLongestWord("I love frontend development")



// 04.07.2026

//task6  Neçə cüt ədəd olduğunu qaytarsın.
function countEven(evenArr) {
    let count = 0;
    for (let i = 0; i < evenArr.length; i++) {

        if (evenArr[i] % 2 == 0 ) {
            count++;
        }
    }
    return count;
}

let result = countEven([2,5,8,9,10]);
console.log(result);



//task7  Array-dəki tək ədədlərin cəmini qaytarsın.

function sumOdd(oddArr) {
    let sum = 0;
    for (let i = 0; i < oddArr.length; i++) {
        if (oddArr[i] % 2 == 1) {
            sum = sum + oddArr[i]
        }
    }
    return sum;
}

let resultOddSum = sumOdd([2,5,8,9,10])
console.log(resultOddSum);



//task8 








