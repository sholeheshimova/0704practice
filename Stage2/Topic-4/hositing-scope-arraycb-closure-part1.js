// 30.07.2026
//task1
console.log(a);  //undefined sanki hoist olunur ve var a; yazilir yuxarda ona gore undefined
var a = 5;  

console.log(b);  // Cannot access 'b' before initialization  burdada TDZ e gore  bu erroru verir
var b = 6

//task2

function makeCounter() {
   let  count = 0;

    function counter1() {
        count++;
        console.log(count);
    }
    return counter1;
}

let say1 = makeCounter();
let say2 = makeCounter()

say1();  //1
say1();  //2
say2();  //1



//task3 ededlerin kvadratini gosder
let arr = [1,2,3,4,5]

//map ile
let newArr = arr.map((el) => el ** 2)
console.log(newArr);

//for ile
function kvadrat() {
    let pushedArr = [];
    for (let i = 0; i < arr.length; i++) {
        pushedArr.push(arr[i]**2)
    }
    return pushedArr
}
console.log(kvadrat());



//task4  evvelce 10dan boyuk olanlari sec daha sonra hemin ededleri cemle
const numbers = [12, 5, 8, 21, 3, 17, 9, 30];

let filteredArr = numbers.filter(function (el) {
    return el > 10
})

let reducedArr = filteredArr.reduce((sum,el) => sum + el,0)  //qisa yazilis
console.log(reducedArr);


//task5 

let funcs = [];


for (var  i = 0; i < 3; i++) {
   funcs.push(function () {
    console.log(i);
   })
    
}
funcs[0](); //3
funcs[1]();  // 3

//let ile yazdiqda ise 0 1 2 cixacaq



//task6 forEach vs map fərqi

let number = [2,4,6,8,10];

let forEachMethod = number.forEach(function (el) {
    console.log(el);  //forEach de return olmur 
})

let mapMethod = number.map((el) => el*2); // qisa yazilisdir
// let mapMethod = number.map(function (el) {
//    return el * 2
// })   bele de yaza bilerdik
console.log(mapMethod);  // burda ise yeni bir array return edir bize



//task8 every və some metodları

let ages = [18, 22, 15, 30, 17];

let everyMethod = ages.every((el) => el  >= 18)
console.log(everyMethod); // false butun ededler 18 den boyuk beraber deyil


let someMethod = ages.some((el) =>  el < 18)
console.log(someMethod); // true hec olmasa bir denede olsun 18 den kicik eded var



//task9  Hoisting + funksiya elanı fərqi
// Aşağıdakı iki fərqli funksiya "yazma üsulunu" müqayisə et:

sayHello();
function sayHello() {
    console.log("salam");  // function key i ile yazildigi ucun hoist olunacaq ve isleyecek ekranda salam gorsenecek
}


// sayGoodBye();

const sayGoodBye = function () {
    console.log("sag ol");  // bu ise variable ile yaradildigi ucun hoist oluna bilmir ve initialization erroru verecek
}



//task10 filter, map, reduce metodunu birlikde istifade et

let prices = [150, 45, 300, 90, 12, 500];


let filterAndMapAndReduce = prices.filter((el) => el >50).map(function (el) {
    return el - ((el * 10) / 100)
}).reduce((sum,el) => sum + el,0)

console.log(filterAndMapAndReduce);



//task11

function test() {
    let x = 5;
    x = x + 1;
     return x;
}
console.log(test());  // her defesinde 6 cixacaq
console.log(test());  // burdada 6 cixacaq

// Gördüyün kimi, ikinci test() çağırışında nəticə 7 yox, yenə 6-dır. Çünki x funksiyanın daxili, müvəqqəti dəyişənidir — funksiya bitən kimi "yaddaşdan silinir", növbəti çağırışda təzədən yaranır.
 



//task12

function makeCount() {
    count = 0;

    function testing() {
        count = count + 1;
        return count;
        
    }
    return testing;
}
let counter = makeCount();
console.log(counter());  // 1
console.log(counter());  // 2



//task13 Closure ilə "vurma funksiyası fabriki"

function multiplyBy(factor) {
    
    function number(num) {
        return num * factor
    }

    return number;
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5));  //10
console.log(triple(5));  //15



//task14 Closure ilə "keçmişi xatırlayan" toplayıcı

function makeAdder() {
    
   let sum = 0
    function sumFunc(num) {
        return sum = sum + num  //ilk defesinde 5 olur . 0  + 5  ) sonra 5 + 3 sonra 8 + 10
    }

    return sumFunc;
}

let adder = makeAdder();

console.log(adder(5));  // 5
console.log(adder(3));  // 8   (5+3)
console.log(adder(10)); // 18  (5+3+10)



// task 15

let nums = [4, 9, 15, 22, 7, 30];

let findNum = nums.find((el) =>  el > 15)
console.log(findNum);   //  burda ise 15den boyuk olan ilk elementi qaytarir
 

let findIndexNum = nums.findIndex(function (el) {
    return el > 15;   // burda 15 den boyuk olan ilk in indeksini qyatrir
});
console.log(findIndexNum);



//task16  sort ilə sıralama

let scores = [45, 8, 120, 3, 67];

let sortedArrAB = scores.sort(function (a,b) {
    return a - b
});
console.log(sortedArrAB);   //kicikden boyuye

let sortedArrBA = scores.sort(function (a,b) {
    return b - a
})
console.log(sortedArrBA);  // boyukden kiciye tersine yeni



//task17

let people = [
  ["Aygün", 28],                                                                                    
  ["Vüsal", 17],
  ["Elvin", 35],
  ["Nərmin", 15]
];

let filteredPeople = people.filter(function (el) {
    return el[1] > 18  // burda array qayitdigi ucun bize yeni onun 1ci indeksi yeni yasi bize lazimdir ona gore 1 yaziriq
})


let mappedPeople = filteredPeople.map(function (el) {
    return el[0]  //burda da qayidan arrayin 0ci indeksi yeni adlarini goturruk bir arraya yigiriq map metodu ile
})
console.log(mappedPeople);




//31.07.2026

//task1
















