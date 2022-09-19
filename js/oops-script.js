

//Object Definition
var person = {
    person_name: "'Scott Merison'",
    birthyear: function () {
        return "Happy Birthday" + ' ' + this.person_name;
        //return `Happy Birthday ${this.person_name}`;
    }
};

var newpara = document.createElement("p");
newpara.innerHTML = person.birthyear();
document.getElementById("objtask").appendChild(newpara);


//Object Properties
let x = "";
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] }
    ]
}

for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j] + "<br>";
    }
}

document.getElementById("objtask1").innerHTML = x;


// Object Getters
const person4 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang1() {
        return this.language;
    }
};
document.getElementById("objtask4").innerHTML =
    `BY Default, Getting a Language is : ${person4.lang1}`;


//Object Setters
const person3 = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang2(value) {
        this.language = value;
    }
};
person3.lang2 = "au";
document.getElementById("objtask5").innerHTML =
    `Set and Display a Language is : ${person3.language}`;



//Inheritance using __proto__

var person1 = { firstname: "Smith", lastname: "John", country: "India" }; //parent o bject
var person2 = { age: 25, city: "Tirunelveli" }; //child object

person2.__proto__ = person1;

document.getElementById("objtask3").innerHTML = `Person Details :`;
document.getElementById("objtask2").innerHTML = `FirstName : ${person2.__proto__.firstname},  LastName : ${person2.__proto__.lastname}, Age : ${person2.age}, City : ${person2.city},Country : ${person2.__proto__.country}`;




// Constructor function
function person_det1(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    }
}
const myMother = new person_det1("Sally", "Rally", 48, "green");
myMother.changeName("---");
document.getElementById("objtask6").innerHTML =
    "My mother's last name is " + myMother.lastName;




// Object Prototypes
function Person_det2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person_det2.prototype.name = function () {
    return this.firstName + " " + this.lastName
};

const myFather = new Person_det2("Mr", "---", 50, "blue");
document.getElementById("objtask7").innerHTML =
    "My father is " + myFather.name();



//closure - simple example

function bankAccountDeposit() {

    var currentBalance = 1000;

    let deposit = function (depositAmount) {
        currentBalance = currentBalance + depositAmount;
        return `Account Balance: ${currentBalance}`;
    }
    return deposit;
}

var dp = bankAccountDeposit();
document.getElementById("objtask8").innerHTML = dp(200);




//Coding Challenge 1

const carlist = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

carlist.prototype.accelerate = function () {
    this.speed += 10;
    document.getElementById("objtask9").innerHTML = `${this.make} is going at ${this.speed}km/hr`;
};

carlist.prototype.brake = function () {
    this.speed -= 5;
    document.getElementById("objtask10").innerHTML = `${this.make} is going at ${this.speed}km/hr`;
};

const bmw = new carlist('BMW', 120);
const mercedes = new carlist('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();















