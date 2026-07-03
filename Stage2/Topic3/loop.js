//task1

let array = [1,2,3,4];

let sumArray = 0

for (let i = 0; i < array.length; i++) {
    sumArray += array[i]
}

console.log(sumArray);


//task2

let fact = 5;

let total = 1;


for (let i = 1; i < fact; i++) {
   total *= i
}
console.log(total);



//task3


let findMax = [3,7,2,8,5];

let max = findMax[0];


for (let i = 0; i < findMax.length; i++) {
   if (findMax[i] > max) {
       max = findMax[i]
   }
    
}
console.log(max);





