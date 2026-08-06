//task1
function greet(name) {
    
   return  () => {
        console.log(`Hello: ${name}`);
    }
}

let result = greet("Shola") // burada innerGreet in sintaksisi gelir

result()
result()


//task2
function createCounter() {
    let count = 0;

    function counter() {
        count ++
        return count;
    }
    return counter
}

let totalCounter = createCounter()
console.log(totalCounter()); //1
console.log(totalCounter()); //2


//task3

function createAccount(initialBalance) {
    let balance = initialBalance
   
    function deposit(plus) {
        balance = balance + plus
    }

    function withdraw(minus) {
        balance = balance - minus
    }

    function getBalance() {
        return balance
    }

     return {
        deposit,
        withdraw,
        getBalance
    };

}

const myAccount = createAccount(100);

myAccount.deposit(50);

myAccount.withdraw(20);

console.log(myAccount.getBalance());



//task5

function multipler(x) {
    
    function firstMulti(number) {
        return x * number
    }

    return firstMulti;
}
const timesThere = multipler(3);
console.log(timesThere(5));
console.log(timesThere(10));
