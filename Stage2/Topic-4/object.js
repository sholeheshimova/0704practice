
//task1
let person = {
   name: "Shola",
   surname: "Hashimova",
   age: 21,
   city: "Shaki"
}

//1. elave et
person.major = "Frontend Devoloper";

//2 age i deyisdir
person.age = 22;

//3 city ni sil
delete person.city;

console.log(person);
// age: 22
// major: "Frontend Devoloper"
// name: "Shola"
// surname: "Hashimova"


//task2
let student = {
    name: "Zahra",
    grades: [90,75,100],
    address: {
        city: "Baku",
        street: "Bunyadzade 75"
    }
}

console.log(student.address.city); // Baku

student.address.street = "Sharifzade 14"; // addresdeki streeti deyisdirdik

student.grades.push(82)  // grades arrayina yeni element elave etdik

console.log(student);


//task3
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,

    getInfo: function() {
        return `Bu ${this.year} ${this.brand} ${this.model}-dir` // this-den istifade ederek car obyektindeki key-ler elcatan oldu
    }
}

console.log(car.getInfo()); //Bu 2020 Toyota Corolla-dir


//task4

let employee = [
    {
        name: "Shola",
        salary: 1200
    },

    {
        name: "Farid",
        salary: 2400,
    },
    {
        name: "Elmar",
        salary: 200,

        introduce: function () {
            return `Salam men ${this.name}`
        }
    }
]

//for loop istifadə edərək hər işçinin adını və maaşını konsola çap et
for (let i = 0; i < employee.length; i++) {
    console.log(employee[i].name + ":" + " " + employee[i].salary + "AZN");
}

//Bir işçinin (məsələn 2-ci) maaşını 100 AZN artır
function increment() {
    return employee[1].salary += 100
}
increment()
console.log(employee[1].salary);


//Yeni bir işçi obyekti yaradıb array-ə əlavə et (push ilə)
let newObj = {
    name: "Narmin",
    salary: 800
}

employee.push(newObj)
console.log(employee);


//Bir işçi obyektinin daxilində introduce adlı metod yaz (this istifadə edərək öz adını "danışsın": "Salam, mən Ali")

// {
//         name: "Elmar",
//         salary: 200,

//         introduce: function () {
//             return `salam men ${this.name}`
//         }
// }

console.log(employee[2].introduce());  //Salam men Elmar



//Codewars tiplis tasklar (UMUMI)

//task1 String qəbul et və tərsinə çevrilmiş formada qaytar. (String metodları)

let  str = "Salam";
let newStr = str.split("").reverse().join("");  // ilk once splitle arraya ceviririk sonra reverse iletersine, daha sonra da join ile yeniden stringe ceviririk
console.log(newStr); 


//task2 String-də neçə saitin (a, e, i, o, u — böyük/kiçik fərq etmir) olduğunu say və qaytar.
let vowel = "aieuü";
function countVowels(str) {
    let countVowel = 0;
    let str1 = str.toLowerCase()
    for (let i = 0; i < str1.length; i++) {
       if (vowel.includes(str1[i])) {
         countVowel++
       } 
    }
    return countVowel;
}
console.log(countVowels("JavaScript"));


//task3 Array-dəki yalnız cüt ədədləri 2-yə vurub yeni array qaytar (map + filter kombinasiyası, ya da tək map daxilində şərt).
let doubleEvens = [2,3,5,22,34,6,18]
function double() {
    let newDouble = []
    for (let i = 0; i < doubleEvens.length; i++) {
    if (doubleEvens[i] % 2 === 0) {
       newDouble.push(doubleEvens[i] * 2);
    }
}
return newDouble
}
console.log(double());  // callback qebul eden array metodlari olmadan da bele yazilir


//callback qebul eden array metodlari ile
let doubleMapAndFilter = doubleEvens.filter(function (el) {
    return el % 2 === 0
}).map(function (el) {
    return el * 2
})
console.log(doubleMapAndFilter); //[4, 44, 68, 12, 36]

// let doubleMapAndFilter = doubleEvens.filter((el) => el % 2 === 0).map((el) => el * 2)
// console.log(doubleMapAndFilter);  Arrow function ile


//task4  Bir cümlə (string) qəbul et, sözlərə ayır  və ən uzun sözü qaytar.
function findLongestWord(sentence) {
    let newLongWordToArr = sentence.split(" ")
    let maxWord = newLongWordToArr[0];
    for (let i = 0; i < newLongWordToArr.length; i++) {
        if (newLongWordToArr[i].length > maxWord.length) {
            maxWord = newLongWordToArr[i]
        }  
    }
    return maxWord
}
console.log(findLongestWord("men frontend developer olmaq isteyirem"));  //devoloper ilk tapdigi


//task5 Öz "mini map" funksiyanı yaz — array və callback funksiya qəbul etsin, hər elementə callback tətbiq edib nəticəni yeni array kimi qaytarsın (
function square(x) {
    return x**2
}

function applyToAll(value,callback) {
    return callback(value)
}

console.log(applyToAll(3,square)); //9


//task6 Closure istifadə edərək bir funksiya fabriki yaz — factor qəbul etsin və elə bir funksiya qaytarsın ki, o funksiya bir ədəd alıb factor-a vursun.

function multi(factor) {
    
    function innerMulti(n) {
        return n * factor
    }

    return innerMulti
}

let result = multi(3); //bu factor-un 3udur
console.log(result(5)); //bu n-in 5idir


//task7 Aşağıdakı funksiyanı elə yaz ki, işə salınanda öncə console.log-un nə çap edəcəyini şərh (comment) kimi əvvəlcədən yaz, sonra kodu tamamla və yoxla:

function whatHappens() {
  console.log(message);  //undefined olacaq cunki var-la teyin olunub hoist olunur ama hecbir deyer menimsedilmir
  var message = "Salam";
  console.log(message);  // burda Salam cixacaq her sey normaldir
}

whatHappens();


//task8 Closure istifadə edərək bir "hesab" yarat — deposit(amount) və getBalance() funksiyalarını array şəklində qaytarsın 

function createBankAccount(balance) {
    let newBalance =  balance;

    function deposit(amount) {
       return newBalance += amount
    }

    function getBalance() {
        return newBalance;
    }

    return {
        deposit,getBalance
    }

}

let account = createBankAccount(100)

account.deposit(50);

console.log(account.getBalance()); //150    


//task9 Bir user obyekti qəbul et (name, age, city xüsusiyyətləri ilə) və bu formatda string qaytar: "Ad: Ali, Yaş: 25, Şəhər: Bakı" (obyekt + template literal + this lazım deyil, sadəcə parametr kimi gələn obyektdən oxu).

let user = {
    name: "Shola",
    age: 21,
    city: "Shaki",

    getUserInfo: function () {
        return `Ad: ${this.name}, Yaş: ${this.age}, Şəhər: ${this.city}`
    }
}

console.log(user.getUserInfo());;


//task10

let orders = 
[
  { item: "Kitab", price: 20, quantity: 2 },   // cəmi 40
  { item: "Noutbuk", price: 800, quantity: 1 }, // cəmi 800
  { item: "Qələm", price: 5, quantity: 3 }      // cəmi 15
]

function processOrders(orders) {
   let result = orders.filter(function (order) {
       return order.price * order.quantity > 100
   }).map(function (order) {
      return order.item
   })

   return result
}
console.log(processOrders(orders));




 






