class Car {
    constructor(muherrik, yanacag) {
        this.muherrik = muherrik;
        this.yanacag = yanacag
    }

    startEngine() {
         if (this.muherrik) {
            console.log("muherrik isleyir");
            
            if (!this.yanacag) {
                console.log("yanacag lazimdir");
                
            }
         }else{
            console.log("muherrik islemir");
            
         }
    }

    stopEngine() {
        if (this.muherrik) {
            console.log("muherriki dayandir");
        }else{
            console.log("muherrik sonuludu");
            
        }
    }

    checkFuelLevel() {
        console.log(this.yanacag);
        
    }
}


const car1 = new Car (true,80);
car1.startEngine();
car1.stopEngine();
car1.checkFuelLevel();



//task2

class Account {
    constructor(name,email,phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber
    }
}

class BankAccount extends Account {
    constructor (name,email,phoneNumber,accountNumber, balance) {
        super (name,email,phoneNumber)
           this.accountNumber = accountNumber;
           this.balance = balance
    }

    deposit(amount) {
         this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }

    displayBankAccountInfo() {
        console.log(`Account name: ${this.name}, Account email: ${this.email},PhoneNumber: ${this.phoneNumber}, AccountNumber: ${this.accountNumber}, Balance: ${this.balance}`);
        
    }
}

const person1Account = new BankAccount ("John Doe", "johndoe@gmail.com", "123-456-7890", "987654321", 1000);

person1Account.displayBankAccountInfo();
person1Account.deposit(500);
person1Account.withdraw(300);
person1Account.displayBankAccountInfo();