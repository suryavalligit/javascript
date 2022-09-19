
// 'use strict'

//ES5 / ES6
//Classes

class employee_list {
    empId;
    empName;
    empSalary;

    getEmployeeName() {
        return this.empName;
    }

    hike_salary(amount) {
        this.empSalary = this.empSalary + amount;
    }
}

var employee1 = new employee_list();
employee1.empId = 001;
employee1.empName = 'Emp-1';
employee1.empSalary = 3000;
document.getElementById("es6task1").innerHTML = `Employee Details listed below :`;
document.getElementById("es6task2").innerHTML = `Employee Id : ${employee1.empId}, Employee Name : ${employee1.getEmployeeName()} & Employee Salary : ${employee1.empSalary}`;
employee1.hike_salary(800);
document.getElementById("es6task3").innerHTML = `Hiked Employee Salary : ${employee1.empSalary}`;


//Constructors

class person_details {
    person_name; // if you want to initialize the fixed value. you don't need the constructor. But if you want to initialize different values for different properties, then only you may require the constructor and you pass the value every time through parameters.
    age;
    email;

    //Constructor executes - when you invoke the class(When you create new object based on the class)
    constructor(pName, ag, em) {
        this.person_name = pName;
        this.age = ag;
        this.email = em;
    }
}

var person1 = new person_details('Scott', 20, 'scot@gmail.com');
document.getElementById("es6task4").innerHTML = `Person Name : ${person1.person_name}, Person Age : ${person1.age}, Person Email : ${person1.email}`;

//Constructor used on class based object oriented javascript
//Constructor function used on prototype based javascript


//private properties and methods - properties and methods shouldn't be accessible from outside the class.

class customer {
    customerId;
    customerName;
    #creditCardNumber;
    #debitCardNumber;

    constructor(customerId, customerName, creditCardNumber, debitCardNumber) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.#creditCardNumber = creditCardNumber;
        this.#debitCardNumber = debitCardNumber;
        console.log(this.#getdebitCardNumber);
    }

    getcreditCardNumber() {
        return this.#creditCardNumber;  //you can't directly able to access private properties but indirectly you can able to access properties by using methods.
    }
    #getdebitCardNumber = function () {
        return this.#debitCardNumber;
    }
}

var customer_details = new customer(101, 'Scott', 1234, 6789);
document.getElementById("es6task5").innerHTML = `Customer ID : ${customer_details.customerId}, Customer Name : ${customer_details.customerName}, Customer CreditCardNumber : ${customer_details.getcreditCardNumber()}`;


//Set and Get Methods - Validate the codes and then assign values to properties.
//In the below program - We should not allow wrong values or undefined values into the property.

class Person {
    #personName;
    #personAge;

    //Person Name - set and get
    setPersonName(value) {
        if (value == null || value == undefined) {
            console.error('Null or undefined is not allowed');
        }
        else if (value.length >= 30) {
            console.error('Person Name length can not be greater than 30 characters');
        }
        else {
            this.#personName = value;
        }
    }

    getPersonName() {
        return this.#personName;
    }

    setPersonAge(value) {
        if (value >= 0 && value <= 100) {
            this.#personAge = value;
        }
        else {
            console.error('Age must be in between 0 to 100 only');
        }
    }

    getPersonAge() {
        return this.#personAge;
    }
}

var person_property = new Person();
person_property.setPersonName('Smith');
person_property.setPersonAge(30);
// console.log(person_property.getPersonName);
// console.log(person_property.getPersonAge);

//polymorphism with classes

//parent class = base class = super class
class personDetails {
    personName;
    personAge;

    constructor(personName, personAge) {
        this.personName = personName;
        this.personAge = personAge;
    }

    getDetails() {
        return `PersonName1: ${this.personName}, PersonAge1: ${this.personAge}`;
    }
}

//child class = derived class = sub class
class Developer extends personDetails {
    MainField;

    constructor(personName, personAge, MainField) {
        super(personName, personAge); //invokes parent class's constructor
        this.MainField = MainField;
    }

    getDetails() {
        return `${super.getDetails()}, MainField: ${this.MainField}`;
    }
}

var s = new personDetails("John", 30);
console.log(s);
console.log(s.getDetails);

var ss = new Developer("Jones", 25, "Web");
console.log(ss);
console.log(ss.getDetails);


//ES6 Classes - Coding Challenge

class carcl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }


    accelerate() {
        this.speed += 10;
        document.getElementById("es6task11").innerHTML = `${this.make} is going at ${this.speed}km/hr`;
    }

    brake() {
        this.speed -= 5;
        document.getElementById("es6task12").innerHTML = `${this.make} is going at ${this.speed}km/hr`;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new carcl('Ford', 120);
document.getElementById("es6task13").innerHTML = ford.speedUS;
ford.accelerate();
ford.brake();
ford.accelerate();
ford.speedUS = 50;