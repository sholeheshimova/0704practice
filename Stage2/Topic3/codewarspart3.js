//10.07.2026

//task1 Calculate BMI

function bmi(weight, height) {
  let bmii = weight / height**2;
  let underweight = 18.5;
  let normal = 25.0;
  let overweight = 30.0;
  let obese = 30;


  if (bmii <= underweight) {
    return "Underweight"
  }else if (bmii <= normal) {
    return "Normal"
  }else if (bmii <= overweight) {
    return "Overweight"
  }else if (bmii > obese) {
     return "Obese"
  }
}
console.log(bmi(50,1.80));



//task2  Convert a Boolean to a String

function booleanToString(b){
  if (b === true) {
    return "true"
  }else if (b === false) {
    return "false"
  }
}
console.log(booleanToString(true));


//7 KYU

//task1  Friend or Foe?

function friend(friends){
 let newArr = [];
 for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
        newArr.push(friends[i])
    }
 }
 return newArr
}
console.log(friend(["Ryan", "Kieran", "Mark"]));

