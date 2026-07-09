//09.07.2026

//task1
function roundIt(n){
  let strN = n.toString().split(".")
  let tamLength = strN[0].length
  let kesrLength = strN[1].length
  if ( tamLength > kesrLength ) {
    let floorN = Math.floor(n)
    return floorN
  }else if (tamLength < kesrLength) {
    let ceilN = Math.ceil(n)
     return ceilN
  }else{
    let roundN = Math.round(n)
    return roundN
  }

}
console.log(roundIt(34.56))



//task2
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
        return `found the needle at position ${i}`
    }
  }
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));



//task3
function twiceAsOld(dadYearsOld, sonYearsOld) {
 
    let nowAge = dadYearsOld - (sonYearsOld * 2)
     let year = Math.abs(nowAge)

     return year
}
console.log(twiceAsOld(55,30));




//task4  Sum of positive
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i]
    }
  }
  return sum
}
console.log(positiveSum([-1,-2,3,-4,5,-6]));


//task5 Given an array of integers, return a new array with each value doubled.
function maps(x){
  let newArr = [];
  for (let i = 0; i < x.length; i++) {
    let doubleArr = x[i] * 2
    newArr.push(doubleArr)
  }
  return newArr
}
console.log(maps([1,2,3,4]));



