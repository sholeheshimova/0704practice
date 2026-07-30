function sayName() {
    let name = "Shola";

    function outer() {
        console.log("Hello:", name);
        
    }

    return outer;
}

let result = sayName();

result();

// outer() işləyir və bitir. Normalda name silinməli idi. Amma silinmir. Çünki inner hələ də ona ehtiyac duyur. Bu hadisəyə Closure deyilir.


function counter() {
    let count = 0;

    function total(){
        count++;
        console.log(count);
        
    }
    return total
}

let say = counter();
say();
say();
say();

// Çünki count hər dəfə sıfırlanmır. Closure onu yadda saxlayır. closure olmasaydi yeni 2ci fnstion bu zaman herdefe say() bize 1 qaytaracaqdi



//codewars
//task1
function countBy(x, n) {
    let result = []
    for (let i = x; i <= n; i++) {
        result.push(i)
    }
    return result
}

function execute(callback,value,value1) {
    return callback(value,value1)
}
console.log(execute(countBy,1,10));



//task2  Count of positives / sum of negatives

let  input = [1,2,3,4,-5,-7,-8];
if (!input || input.length === 0) {
    console.log([]);
    
}else{
let postiveCount = 0;
let negativeSum = 0;

   input.forEach(function (el) {
    if (el > 0) {
        postiveCount++
    }else if (el < 0) {
        negativeSum += el
    }
   })
   console.log([postiveCount,negativeSum]);
}


//task3 Calculate average

function findAverage(array) {
  
    if (array.length === 0) {
        return 0;
    }else{
        let sum = array.reduce(function (sum,el) {
         return sum + el
    },0)
    return sum / array.length
    }
}
console.log(findAverage([1,2,3,4]));


//task3  sum arrays

function sum (numbers) {
  if (numbers.length === 0) {
    return 0
  }else{
    let totalSum = numbers.reduce((sum,el)  => sum + el ,0)
    return totalSum;
  }
}
console.log(sum([1,2,3,4,5]));







