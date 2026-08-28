//task1 Array-dəki hər ədədi 2-yə vurub yeni array qaytar.
function doubleValues(arr) {
    let result = arr.map((el) => {
       return el * 2
    })
    return result
}
console.log(doubleValues([1,2,3])); //[2,4,6]


//task2 Array-dən yalnız cüt ədədləri seçib qaytar.

function getEvenNumbers(arr) {
    let result = arr.filter((el) => {
        return el % 2 == 0
    })
    return result
}
console.log(getEvenNumbers([1,2,4,5,3,8,12,37]));  //[2,4,8,12]



//task3 Array-dəki bütün ədədlərin cəmini tap .

function sumArray(arr) {
    let result = arr.reduce((sum,el) => {
          return sum + el
    },0)
    return result

    
}
console.log(sumArray([1,2,3,4,5])); //15



//task4 Array-də ilk mənfi ədədi tap.

function findFirstNegative(arr){
    let result = arr.find((el) => {
        return  el < 0
    })
    return result
}
console.log(findFirstNegative([3, 7, -2, 5, -8])); //-2


//task5 Yaşlardan ibarət array qəbul et, ən azı bir nəfərin 18-dən böyük-bərabər olub-olmadığını yoxla

function hasAdult(ages) {
    let result = ages.some((el) => {
          return el >= 18
    })
    return result
}
console.log(hasAdult([15, 12, 20, 8]));  //true
console.log(hasAdult([15, 12, 4, 8]));  //false


//task6 Array-dəki bütün elementlərin cüt olub-olmadığını yoxla.

function allEven(arr) {
    let result = arr.every((el) => {
        return el % 2 == 0
    })
    return result
}
console.log(allEven([2, 4, 6, 8]));  //true
console.log(allEven([2, 4, 5, 8])); //false


//task7 Sözlərdən ibarət array-i uzunluğuna görə (qısadan uzuna) sırala

function sortByLength(words) {
    let result = words.sort((a,b) => {
          return a.length - b.length
    })
    return result
}

console.log(sortByLength(["banana", "kiwi", "watermelon", "fig"]));  //['fig', 'kiwi', 'banana', 'watermelon']


//task8 

function getExpensiveProductNames(products, minPrice) {
    let result = products.filter((el) => {
        return el.price > minPrice
    }).map((el) => {
        return el.name
    })
    return result
}
console.log(getExpensiveProductNames( [
{ name: "Telefon", price: 800 },
  { name: "Qulaqlıq", price: 50 },
  { name: "Noutbuk", price: 1500 }
], 100))  // ['Telefon', 'Noutbuk']




// Mini Calculator

function calculate(num1,num2,operation) {
    if (operation === "add") {
        return num1 + num2
    }else if (operation === "subtract") {
        return num1 - num2
    }else if (operation === "multiply") {
        return num1 * num2
    }else {
       return num1 / num2
    }
}

const calcBtn = document.querySelector("#calcBtn");
const num1Input = document.querySelector("#num1")
const num2Input = document.querySelector("#num2")
const calcResult = document.querySelector("#calcResult")
const operationSelect = document.querySelector("#operation")

calcBtn.addEventListener("click", function () {
    let num1Value = Number(num1Input.value)
    let num2Value = Number(num2Input.value)
    let operationValue = operationSelect.value

  let result =   calculate(num1Value, num2Value, operationValue)
  console.log(result);
  

  calcResult.textContent = result
})