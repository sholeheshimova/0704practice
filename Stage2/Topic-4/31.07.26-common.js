//task1
let a = 5;
let b = "salam";
let c = true;
let d = undefined;
let e = null;
let f = [1, 2, 3];
let g = { name: "Ali" };

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // boolen
console.log(typeof d); // undefined
console.log(typeof e); // object olacaq hemise js in bir bug-idir
console.log(typeof f); //object buda hemcinin
console.log(typeof g); // object

//task2

let text = " Salam , Necesen? ";

let newText = text.trim().toLowerCase().includes("necesen");

console.log(newText); // true

//task3

let sentence = "JavaScript oyrenmek maraqlidir";

let newSentence = sentence.split(" ").reverse().join(" ");
console.log(newSentence);

//task4

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}

//task5
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

//task6

function greet(name, greeting = "Salam") {
  console.log(greeting + "," + name + "!");
}
greet("Shola", "Hi"); // Hi, Shola
greet("Shola"); // Salam, Shola

//task7

function multiply(num) {
  return num * 2;
}
function processArray(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

console.log(processArray([1, 2, 3], multiply));

//task8

if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); //10
// console.log(y);  // error

//task9
console.log("5" + 3); // 53
console.log("5" - 3); //2
console.log("5" * "2"); //10
console.log(true + 1); // 2
console.log([] + []); // evvelce onu bos stringe cevirir ve toplayir neticede bos string cixir

//task10

let meyveler = ["alma", "armud", "gilas", "nar", "banan"];
let result = [];
for (let i = 0; i < meyveler.length; i++) {
  if (meyveler[i].length > 4) {
    result.push(meyveler[i].toUpperCase());
  }
}
console.log(result);



//INTERVIEW TASKS

//sual-1 var, let və const arasındakı fərqlər nələrdir? Hoisting baxımından bunlar necə fərqlənir?

//var function scope variable dir. let ve const block scope variabledir. her ucu de hoist olunur. 1. var hoist olunan zaman bir yaratdigimiz zaman onu yuxarda cagirmaq isdesek bize undefined qaytarir. sanki yuxarda var a; bele yaradilir 2. let ve const da ise TDZ e gore yuxarda cagirilan zaman bize initialization erroru verir 3. const la yaratdigimiz deyiseni yeniden deyise bilmerik deyerini o sabit variabledir.

//sual-2 Aşağıdakı kodun nəticəsi nə olacaq və niyə?

console.log(typeof null); //burda object olacaq bu js in bir bug-idir. null un type i object kimi qebul edilir
console.log(typeof undefined); // burda ise normal ozu undefined cixacaq
console.log(null == undefined); // true cixacaq cunki sadece deyeri yoxlayir
console.log(null === undefined); // false cixacaq cunki hem tipi hem deyeri yoxlayir

//sual-3 Closure nədir? Öz sözlərinlə izah et və real həyatda (və ya kodda) hansı problemi həll etmək üçün istifadə oluna biləcəyinə bir nümunə göstər.

//closure sanki tutanaqdir. hansiki biz ice ice outer ve inner funskiyasi yaradiriq. normalda outer de yaratdigimiz deyisen funksiya biten zaman yoxa cixir ama closure zamani bu yadda saxlanir bir nov cunki  icersindeki inner funksiyasinda hemin deyere istinad var . Meselen

function outer() {
  let a = 5;

  function inner() {
    console.log(a + 5);
  }
  return inner;
}

let total = outer();
total(); // 10 cixacaq

//sual-4 map, filter və forEach arasındakı fərq nədir? Hansı halda hansını seçərdin?

// map-in return u var bize bir netice qayatrir. hansi ki elementlerin kvadrati,bir birine vurulmasi, her hansi edede bolunmesi ve s bu zaman map- dan istifade ede bilerik ve bize yeni array qaytarir. en boyuk ferq forEachle return u olmasidir. foreach dediyim kimi return yoxdur. ve burda biz yeni bir array isdeyirikse onun evvelceden bos array olaraq yaradib gorduyumuz emelyati ona push etmeliyik. filter-de ise sert yoxlanilir bize true, false deyeri qaytarir serte gore

//sual-5 Aşağıdakı kodun nəticəsini təxmin et və izah et:

let funcs = [];

for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[0](); // 3
funcs[1](); //3
funcs[2](); //2

//burada ilk once kenarda funcs adli bos arrayimiz yaradilirki alinan neticeni funksiya icersinde ona push ede biler. daha sonra for dovru yaradiriq ve 3 e qeder dovr etmesini isdeyirem. her dovrdede alinan indeksli elementi funcs a push etmesini isdeyirik

//sual-6 Bu kodun nəticəsi nə olacaq? Hər sətri ayrıca izah et.

function test() {
  console.log(a);
  //   console.log(b);
  var a = 1;
  let b = 2;
}
test();

//ilk once test funskiyasini yaradiriq. icersinde de iki eded consolumuz var/ ilk a ni istifade edirik . a var ile yaradildiqi  ucun  bize undefined deyeri verecek. b let ile yaradildigi ucun bize initialization erroru verecek TDZ e gore. en sonda ise test funskiyamizi ise saliriq yeni cagiririq

//sual-7 Nəticəni təxmin et və izah et — addım-addım nə baş verir (əvvəlcə filter, sonra map).7

let arr = [1, 2, 3, 4, 5];
let result = arr.filter((num) => num % 2 === 0).map((num) => num * 10);
console.log(result);
[20, 40];

//ilk once arrayimizi filter metodu ile deyirikki her bir elementi 2 ye bolende qaliq 0 alinir . sonra hemin elementleri map ile bir arraya yigiriq 10 a vurmaq serti ile

//sual-8 Nəticə nə olacaq? counterA və counterB-nin bir-birinə təsir edib-etmədiyini izah et.

function outer() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

let counterA = outer();
let counterB = outer();

console.log(counterA()); //1
console.log(counterA()); //2
console.log(counterB()); //1

// ilk once outer funksiyamiz yaradilir. icersindede count deyisenine 0 menimsedilir baslangic deyer olaraq. onun da return u bir funksiyadir hemin funskuyadaa countun deyerinin uzerine 1 vahid gelmesi isdenilir ve hemin funksiaynin da returnu countun en son deyeridir. asagida ilk once counterA ya outer() cagirib menimsedirik. bu zaman. counterB ye de hemcinin. consolda ise ilk once counterA ni cagiriq yeni ilk deyer 1 olur. yene counterA ni cagirriq bu zaman da deyer 2 olur. 3cu de ise counterB ni ilk defe cagirriq bu zaman da netice 1 olur

//sual-9  Hər sətrin nəticəsini ayrı-ayrı təxmin et və səbəbini izah et (type coercion baxımından).

console.log(1 + "1"); // 11 toplama zamani number string e cevirilir (1-i string olarsa) ve yan yana yazilir
console.log(1 + 1 + "1"); // burda da 21 olur numberler  1 ler toplanir yanina 1 gelir
console.log("1" + 1 + 1); // burdada 111 olur ilk once string geldiyi ucun hamsini stringe cevrir
console.log(10 - "4"); // cixma zamani string numbere cevrilir ve netice 6 olur
console.log("10" / "2"); // burdada her ikisi numbere cevrilir ve cavab 5 olur

//sual-10

let numbers = [3, 7, 1, 9, 4, 6];

let found = numbers.find((n) => n > 5); // 5 den boyuk ilk elementi gosderir cavab 7
let allPositive = numbers.every((n) => n > 0); // hamsi 0dan boyukdurmu cavab true olur
let hasEven = numbers.some((n) => n % 2 === 0); // hec olmasa biri 2ye bolnende qaliqda 0 qalirmi cavab true

console.log(found, allPositive, hasEven);
