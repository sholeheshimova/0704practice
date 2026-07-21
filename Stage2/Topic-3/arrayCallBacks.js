//map,foreach,sort,every,some,find,filter,reduce,fill
let nums = [6, 3, 2, 4, 5, 1];

//map
// Hər elementi dəyişdirir. Yeni array yaradır. Orijinal array dəyişmir.
let result = nums.map(function (el, index, list) {
  console.log("el", el); //map verilmis arrayin icersinde bir bir gezir sanki bir nov for kimi bize elementleri qaytarir
  console.log("index", index); //burdada indexleri qaytarir
  console.log("list", list); // burda ise her defe bize arrayimizi qaytarir
});



//forEach
//Array-i gəzir.
// Heç nə qaytarmır. Əsasən console.log,push,DOM,API üçün istifadə olunur.

let newArr = [];
nums.forEach(function (el) {
  newArr.push(el * 2); //burda bir nov for kimi isleyir return yazamga ehtiyac qalmir
});
console.log(newArr);

// * VACIB QEYD
// map ile foreach in ferqi budur: map return qaytarir. foreach ise qaytarmir mecbursan kenarda bos bir array yaradib ele is goresen

//filter
// Şərtə uyğun olanları saxlayır.
let filterArr = nums.filter(function (el) {
  return el !== 5; //filter bize boolen deyer qaytarir yoxlama apardigi ucun. burda deyilir el 5 e beraber olmadigi yeni true hallarda bize elementleri bir arraya yig ve qaytar
});
console.log(filterArr); // [1,2,3,4,6]  bele olur

function myFilter(arr) {
  let filterNewArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 4) {
      filterNewArr.push(nums[i]);
    }
  }
  return filterNewArr;
}
console.log(myFilter([1, 2, 3, 4, 5, 6]));

//filtersiz de for ile bele yaza bilerik. eyni neticeni aliriq

//find,findIndex
// Array qaytarmır.Sadəcə ilk elementi qaytarır.
let findMethod = nums.find(function (el) {
  return el === 6;
});
console.log(findMethod); //tapirsa elementi qaytarir , tapmasa undefined

let findIndexMethod = nums.findIndex(function (el) {
  return el === 3;
});
console.log(findIndexMethod); // ilk tapdigi elementin indexini qaytarir icinde break var tapan kimi icindeki for u dayandirir

//reduce

//reduce iki parametr qebul edir. 1ci callback, 2ci baslangic deyer

let reduceMethod = nums.reduce(function (sum, el) {
  //sum toplanilandi
  console.log("====");
  console.log("sum", sum);
  console.log("el", el);
  console.log("====");

  return sum + el;
}, 0);

console.log(reduceMethod); //21

//sum,every
let someMethod = nums.some(function (el) {
  return el === 3; // burda deyilirki nums arrayinin icersinde HEC OLMASA 1 DENE DE OLSUN 6 VARMI?  varsa true yoxsa false
});
console.log(someMethod); //true

let everyMethod = nums.every(function (el) {
  return el === 2; //burda ise arrayin BUTUN ELEMENTLERI 2 YE BERABERDIRMI?  beraberdise true deyilse false
});
console.log(everyMethod); // false

//sort
// yeni bir array qaytarmir . referans adresin uzerinde is gorur

let sortMethod = nums.sort(function (a, b) {
  console.log("a", a);
  console.log("b", b);

  return a - b; //eger netice musbet olsa kicikden boyuye duzue , menfi olsa boyukden kiciye
});
console.log(sortMethod);



//task 1  Verilmiş array-dəki bütün adları console-a çıxar:

let names = ["Ali", "Aysel", "Murad"];

names.forEach(function (el) {
  console.log(el);
});

//task 2 Verilmiş array-dəki bütün ədədlərin 2 qatını console-a çıxar:

let numbers = [1, 2, 3, 4];
let newArr1 = [];
numbers.forEach(function (el) {
  newArr1.push(el * 2);
});
console.log(newArr1);

//task3 Bütün ədədlərin kvadratını qaytaran yeni array yarat

let numbers1 = [1, 2, 3, 4];
let newsArr = [];
numbers1.map(function (el) {
  return newsArr.push(el ** 2);
});
console.log(newsArr);

//task4 Bütün adları böyük hərfə çevir:

let name = ["shola", "aysel", "ali"];

let newName = [];

name.map(function (el) {
  return newName.push(el.toUpperCase());
});
console.log(newName);

//task5 Hər birinə 18% ƏDV əlavə et.

let nums1 = [10, 20, 30];
let newNums = [];

nums1.map(function (el) {
  return newNums.push(el + (el * 18) / 100);
});
console.log(newNums);

//task6 yalniz cutler qalsin
let evenNums = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNew = evenNums.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNew);

//task7  uzunlugu 5 den boyuk olanlar
let words = ["js", "frontend", "html", "javascript", "css"];

let result1 = words.filter(function (el) {
  return el.length > 5;
});

console.log(result1);

//task8  menfi ededleri sil
let nums2 = [-5, 3, -1, 8, 2];

let positive = nums2.filter(function (el) {
  return el > 0;
});

console.log(positive);

//task9 ilk cut ededi tap
let ilkCutEded = [1, 3, 5, 8, 10];

let findCut = ilkCutEded.find(function (el) {
  return el % 2 === 0;
});
console.log(findCut);

//taks10  İlk uzunluğu 5-dən böyük sözü tap
let language = ["js", "html", "frontend", "css"];
let lengthMethod = language.find(function (el) {
  return el.length > 5;
});
console.log(lengthMethod);

//task11  menfi eded varmi

let negativeNumbers = [1, 2, 3, -5];
let negative = negativeNumbers.some(function (el) {
  return el < 0;
});
console.log(negative);

//task12  arrayda "admin" varmi

let majorsNames = ["user", "editor", "admin"];
let major = majorsNames.some(function (el) {
  return el === "admin";
});
console.log(major);

//task13  ededler musbetdirmi

let everyMethod1 = numbers.every(function (el) {
  return el > 0;
});
console.log(everyMethod1);

//task15 ededlerin cemini tap

let reduceM = numbers.reduce(function (sum, el) {
  return sum + el;
}, 0);
console.log(reduceM); //10

//task16 Ən böyük ədədi tap:

let bigNum = numbers.reduce(function (max, el) {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(bigNum);

//task17

let totalLength = words.reduce(function (sum, el) {
  return sum + el.length;
}, 0);
console.log(totalLength);
