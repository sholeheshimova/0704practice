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

