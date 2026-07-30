//task1
let name = "Shola";

function showName() {
  console.log(name);  //Shola
}

showName();

console.log(name);  // Shola


//task2
function test() {
  let age = 20;
  console.log(age); // 20
}

test();

// console.log(age);  // age is not defined


//task3

if (true) {
  var a = 5;
  let b = 10;
  const c = 15;
}

console.log(a);  // 5   var block scope tanimir
// console.log(b);  //b is not defined
// console.log(c);  // c is not defined


//task4

function outer() {
  let x = 5;

  function inner() {
    console.log(x);
  }

  return inner;
}

let result = outer();  // burda outer cagirriq onunda returnu inner in sintaksisi dir

result();  // inneri de cagirdiqda consola 5 cixir


//task5

let number = 100;

function first() {
  let number = 50;

  function second() {
    console.log(number);
  }

  return second;
}

let fn = first();   // first i cagirriq onunda return u second un sintaksisidir

// fn();  // burdada secondu cagirriq netice 50 olur burda

console.log(number);  // burda ise 100


//task6 biraz cetin


// let x = 1;

function first() {
    let x = 2;

    function second() {
        let x = 3;

        console.log(x); // 3 oldu burda

    }

    second();  
    console.log(x);  //burda da 2 oldu
}

first();  //first cagirilir. 

// console.log(x);  //burda ise 1 oldu   bu artiq global scope dur



//task7 cetin

let x = 1;

function first() {
    console.log(x);  // Cannot access 'x' before initialization  TDZ Dəyişən yaradılıb, amma hələ istifadə etmək qadağandır.

    let x = 5;

    console.log(x);  // 5
}

first();