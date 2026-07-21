//task1

function perform(num) {
  console.log(num);
}
function performOperation(callback, value) {
  callback(value);
}
performOperation(perform, 6);

//task2

function transform(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

function transformArray(callback, tArr) {
  return callback(tArr);
}
console.log(transformArray(transform, [1, 2, 3, 4]));


//task3
function filter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      return true;
    }
  }
}

function filterArray(callback, fArray) {
  return callback(fArray);
}
console.log(filterArray(filter, [3, 6, 8, 5]));

//task4
function divide(num1,num2) {
    if ( num2 === 0) {
       console.log("error");
    }else{
      return  num1 / num2
    }
}
function divideNumbers(callback,number1,number2) {
    return callback(number1,number2)
}
console.log(divideNumbers(divide,12,4));
;

