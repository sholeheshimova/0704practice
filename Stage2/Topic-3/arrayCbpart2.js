//codewars array with callback methods

//task1 Calculate average

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let average = array.reduce(function (sum, el) {
    //reduce metodu ile cemleyib neticeni length e boluruk
    return sum + el;
  }, 0);

  return average / array.length;
}

console.log(findAverage([1, 2, 3]));

//task2  Removing Elements
function removeEveryOther(arr) {
  let remove = arr.filter(function (el, index) {
    return index % 2 === 0; // filter metodu serte uygun olanlari bize qaytarir
  });
  return remove;
}
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));

//task3 Sum The Strings

function sumStr(a, b) {
  let arrA = Number(a);

  let arrB = Number(b);

  let total = arrA + arrB;

  return String(total);
}
console.log(sumStr("32", "5"));

//task4  musbet ededleri topluyuruq
function positiveSum(arr) {
  let positive = arr.reduce(function (sum, el) {
    if (el > 0) {
      return el + sum;
    } else {
      return sum;
    }
  }, 0);
  return positive;
}
console.log(positiveSum([1, -3, 7, -5, 2]));

//task5 Find the smallest integer in the array

function findSmallestInt(arr) {
  let findSmall = arr.reduce(function (min, el) {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return findSmall;
}
console.log(findSmallestInt([2, 71, 65, 4, -8]));

//task6 Verilmiş array-dəki bütün ədədlərin kubunu qaytaran yeni array yarat.

function cube(arr) {
  let totalCube = arr.map(function (el) {
    return el ** 3;
  });
  return totalCube;
}
console.log(cube([1, 2, 3, 4]));

//task7 Uzunluğu 4 və daha çox olan sözləri saxla.

function lengthArr(arr) {
  let totalLength = arr.filter(function (el) {
    return el.length >= 4;
  });
  return totalLength;
}
console.log(lengthArr(["js", "html", "css", "react", "node"]));

//task8 İlk mənfi ədədi tap.

function negativeNumber(arr) {
  let negative = arr.find(function (el) {
    return el < 0;
  });
  return negative;
}
console.log(negativeNumber([3, 9, -4, 22, 16, -8]));

//task9 Array-də 100-dən böyük ədəd varmı?

function someNumber(arr) {
  let totalSome = arr.some(function (el) {
    return el > 100;
  });
  return totalSome;
}
console.log(someNumber([5, 20, 150, 80]));

//task10 Bütün sözlər kiçik hərflərlə yazılıbmı?

function lowerCaseWord(arr) {
  let lowerWord = arr.every(function (el) {
    return el === el.toLowerCase();
  });
  return lowerWord;
}
console.log(lowerCaseWord(["js", "html", "CSS"]));

//task11 Array-dəki bütün ədədlərin hasilini tap.

function resultNums(arr) {
  let result = arr.reduce(function (total, el) {
    return total * el;
  }, 1);
  return result;
}
console.log(resultNums([2, 3, 4]));

//task12 Əvvəl yalnız cüt ədədləri saxla. Sonra onların kvadratını qaytar.

function filteredAndMapArr(arr) {
  let filteredArr = arr.filter(function (el) {
    return el % 2 === 0;
  });

  let mappedArr = filteredArr.map(function (el) {
    return el ** 2;
  });
  return mappedArr;
}
console.log(filteredAndMapArr([1, 2, 3, 4, 5, 6]));

//task13 Yalnız müsbət ədədləri topla.

function sumOfPositive(arr) {
  let positiveNums = arr.filter(function (el) {
    return el > 0;
  });
  let sumPositive = positiveNums.reduce(function (sum, el) {
    return sum + el;
  }, 0);
  return sumPositive;
}
console.log(sumOfPositive([-3, 5, -1, 8, -6, 2]));

//task14 Adların ilk hərfini böyük et.

function toUpper(arr) {
  let upper = arr.map(function (el) {
    return el[0].toUpperCase() + el.slice(1);
  });
  return upper;
}
console.log(toUpper(["ali", "aysel", "murad"]));

//task15 Ən uzun sözü tap.

function longWord(arr) {
  let long = arr.reduce(function (maxWord, el) {
    if (maxWord.length > el.length) {
      return maxWord;
    } else {
      return el;
    }
  });
  return long;
}
console.log(longWord(["html", "javascript", "css", "react"]));

//task16 Duplicate-ləri sil.

function removeDublicate(arr) {
  let remove = arr.filter(function (el, index) {
    return index === arr.indexOf(el);
  });
  return remove;
}
console.log(removeDublicate([1, 2, 2, 3, 4, 5, 5, 6, 7]));
