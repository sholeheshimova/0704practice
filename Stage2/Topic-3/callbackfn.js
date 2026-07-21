// 11.07.2026
//task1 iki ededi toplayan funksiya

function sum(a,b) {
    return a + b;
}
function execute(callback, x,y) {
    return callback(x,y)  
}
console.log(execute(sum,3,5));


//task2  use toUpperCase()

function toUpper(str) {
    return str.toUpperCase()
}
function executee(clb,upperStr) {
    return clb(upperStr)   //bu ne demekdir eslinde:  return toUpper("frontend");
}
console.log(executee(toUpper, "frontend"));


//task3 Kvadratını hesabla

function square(number) {
    return number **2
}
function execute(callback,num) {
    return callback(num)
}
console.log(execute(square, 3));



//task4  Salam ve Sagol callbackleri yaz

function sayHello(name) {
    return `Salam, ${name}`
}
function sayBye(name) {
    return `Sagol, ${name}`
}


function execute(say,name) {
    return say(name)
}
console.log(execute(sayHello, "Shola"));
console.log(execute(sayBye, "Shola"));



//task5

function add(a,b) {
    return a + b
}
function subtract(x,y) {
    return x-y
}
function multiply(c,d) {
    return c * d
}

function calculate(callback,num1,num2) {
    return callback(num1,num2)
}
console.log(calculate(add,6,4));
console.log(calculate(subtract,6,4));
console.log(calculate(multiply,6,4));



//task6 reversestring

function reverseText(text) {
    let netice = text.split("").reverse().join("")
    return netice
}
function execute(callback,str1) {
    return callback(str1)
}
console.log(execute(reverseText, "Frontend"));



//task7 stringin uzunlugunu qaytar

function countLetter(str2) {
    return str2.length
}
function execute(callback,text1) {
    return callback(text1)
}
console.log(execute(countLetter,"shola"));



// task8

function isPalindrome(text) {
    let reverseText = text.split("").reverse().join("")
     if (reverseText === text) {
        return true
     }else{
        return false
     }
}

function execute(callback,value) {
    return callback(value)
}
console.log(execute(isPalindrome,"frontend"));


//13.07.2026
//task9 Kiçik hərfə çevir

function toLower(text) {
    return text.toLowerCase();
}
console.log(execute(toLower,"JAVASCRIPT"));



//task10
function countVowels(text) {
    let vowels = "aieuo";
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++
        }
    }
    return count
}

console.log(execute(countVowels,"frontend"));


//task11  maximum eded
function findMax(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(execute(findMax,[4,2,6,8,1]));


//task12 cut ededlerin sayini tap

function countEven(arr) {
 let count = 0;

 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++
    }
 }
 return count
}
console.log(execute(countEven,[1,2,3,4,5,6]));








