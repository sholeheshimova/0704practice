
// console.log(a);  // undefined

// var a = 5;


// console.log(c);  //Cannot access 'c' before initialization

// let c = 4;


// A();  //working...
function A() {
    console.log("working...");
}

// let netice = A;
// console.log(netice);   //cagirmadigimiz ucun burda sintaksis gorsenir


// let netice = A;
// netice();  //working cagirdigimiz ucun sanki A ni working gorsenir



function B() {
    
    function C() {
        console.log("writing..."); 
    }

    return C();
}

//Numune 1
// let netice = B;
// console.log(netice);  //burda butun funksiyanin sintaksisi gorsenecek (C ni cagirmadiqda)

//Numune 2
// let netice = B();
// console.log(netice);   // burda ise C nin sintaksisi gorsenecek (C ni cagirmadiqda)


//Numune 3
// let netice = B;
// netice();   // writing... gorsenecek cunki C ni funksiyanin icersinde ozumzu cagirmisiq indide B ni cagiririq;





//1. GLOBAL SCOPE

//HER YERDE GORUNUR

let name = "Shola";

function sayHello() {
    console.log("Hello", name);
}

sayHello();  //yeni her yerden gorunur funksiya daxilinde de xaricindede
console.log(name);


// 2. FUNCTION SCOPE
// Funksiya daxilində yaradılan dəyişən yalnız həmin funksiyada görünür.

function printWord() {
    var word = "JavaScript";
    console.log(word);
}
printWord();  // JavaScript

// console.log(word);  //reference error verecek funksiyadan colde tanimir. hansi variable ile yaratsaq bu bele olacaq




//3. BLOCK SCOPE

if (true) {
    let city = "Sheki";
    // console.log(city);
    
}
// console.log(city); // city is not defined olacaq. let ve const block daxilinde yasayir


if (true) {
    var animal = "dog"
}
console.log(animal);  // var block scope tanimir



//var, let, const fərqi

// var Yalnız function scope tanıyır.

// function test(){

//     var a = 5;

// }

// console.log(a); //Error.

// Amma

// if(true){

//     var a = 5;

// }

// console.log(a);

// çıxış  5


//let ve const function da taniyir block da




//tasks 1


console.log(a); 
var a = 10;

// Output: ?   undefined
// Why?   cunki hoist olunan zaman yuxarda var a; yazilir


//task2

// console.log(b);
let b = 20;

// Output: ?   Cannot access 'b' before initialization
// Why?  hoist olunur ama TDZ e gore istifade oluna bilmir



//task3

// myFunction();

// function myFunction() {
//   console.log("Function is hoisted");
// }

// Output: ?   Function is hoisted 
// Why?  funksiyani isdediyimiz yerde cagira bilerik eger function key i ile yaratmisiqsa


//task4

// myFunction();

// var myFunction = function() {
//   console.log("Will this work?");
// };

// Output:  myFunction is not a function
// Why?  ozunu deyisen kimi aparir ve hoist oluna bilmir



//task5
// {
//   console.log(x);
//   let x = 5;
// }

// Output: ?      Cannot access 'x' before initialization
// Why?   burdada eyni TDZ e gore x istifade oluna bilmir yuxarda



//task6

function foo() {
  console.log("Foo!");

  function bar() {
    console.log("Bar!");
  }
  return bar;
}

// let netice = foo();  //foo funksiyasini cagirdigimiz ucun 186ci setrdeki consol ise dusur. bar funksiyasi elece qalir. foo nun returnu bar-dir. yeni burda consola Foo! ve barin sintaksisi cixir

// netice(); // ??????   burda ise neticeni de cagirdigimiz ucun bar funksiyasini cagirmis oluruq. onunda icersindeki kodlar ise dusur. ve neticede ekrana Foo! ve Bar! cixir



//task7

function foo() {
  console.log("Foo!");

  var bar = function () {
    console.log("Bar !");
    return 1001;
  };

  
  return bar;
}

let netice = foo(); // yene foo nu cagirdigimiz ucun burda ilk once Foo consola dusur. ve foo nun returnu olan bar funksiyasinin sintaksisi gorsenir

// let result = netice();   // ??????  neticeni cagirdigimiz ucunde bar ise dusur ve icindeki kodlar oxunur. belelikle en son consolda Foo! ve Bar! gorsenir
// !QEYD: 1001 i gormuruk o barin returnu dur. eger biz result u consola versek o zaman 1001 i gore bilerdik




//task8

function innerFn() {
  let x = 10;

  function outerFn() {
    const y = 11;
    return y * x;
  }

  return outerFn;
}

// let result = innerFn();    //burda innerFn i cagirdigimiz ucun bize return u outerFN oldugu ucun onun sintaksisi qaytarir

// console.log(result);    // ?????? yeni netice otuerFn in sintaksisi olacaq



//task9


function innerFn() {
  let x = 10;

  function outerFn() {
    const y = 11;
    return y * x;
  }

  return outerFn();
}

let result = innerFn();  // burda yene InnerFn  i cagirriq. onun returnu bize outerFn() funskiyasidir. yeni outerFn in kodlarini icra edir ve neticede  y* x olur

console.log(result); // ??????  yeni netice 110 olur





