
"use strict";

//Variables - Coding Challenge

var a = 'John';
var admin = a;
document.getElementById("task1").innerHTML =
    "The name of the admin is: " + admin;


//Data Types - Coding Challenge

// let name1 = "Ilya";

// document.getElementById("task2").innerHTML = `${1} - It is the number DataType, ${"name"} - It is the string DataType, the expression is a variable so it displays the value of the variable - ${name1}`;



//Conditional Operator 'if' - Coding Challenge

function myFunction1() {
    let js_name = document.getElementById('textbox_id1').value
    if (js_name == 'ECMAScript') {
        document.getElementById("task3").innerHTML = "The Answer is Right";
    } else {
        document.getElementById("task3").innerHTML = "You don't know? ECMAScript";
    }
}

document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault()
});



document.getElementById('pwd').style.display = 'none';
function myFunction2() {
    let userName = document.getElementById('textbox_id2').value
    let pass = document.getElementById('entpwd').value
    if (userName == 'admin') {
        document.getElementById('pwd').style.display = 'block';
        if (pass == "1234") {
            document.getElementById("task4").innerHTML = "Welcome";
        } else if (pass === '' || pass === null) {
            document.getElementById("task4").innerHTML = "Don't leave the field empty.";
        } else {
            document.getElementById("task4").innerHTML = "Wrong password";
        }
    } else if (userName === '' || userName === null) {
        document.getElementById("task4").innerHTML = "Don't leave the field empty.";
    } else {
        document.getElementById("task4").innerHTML = "I don't know you.";
    }
}

document.getElementById("form2").addEventListener("submit", function (event) {
    event.preventDefault()
});


let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("task5").innerHTML = "Today is " + day;


// let arr = ["Apple", "Orange", "Pear"];

// for (let key in arr) {
//     document.getElementById("task6").innerHTML = arr[key]; // Apple, Orange, Pear
// }


// let fruits = ["Apple", "Orange", "Plum"];

// for (let fruit of fruits) {
//     document.getElementById("task7").innerHTML = fruit;
// }



//Functions Declaration


let name_list1 = 'John';
function showMessage() {
    name_list1 = "Bob";
    let message = 'Hello, ' + name_list1;
    document.getElementById("fntask2").innerHTML = `After the function call, The username is ${message}`;
}

document.getElementById("fntask1").innerHTML = `Before the function call, The username is ${name_list1}`;

showMessage();



//CallBack Functions
function callback1(name, age) {
    document.getElementById("fntask3").innerHTML = `Name : ${name}, age : ${age}`;
}
function dowork(name, age) {
    name = "Mr." + name;
    age++;
    callback1(name, age);
}

dowork("Scott", "20");



//function call another functions
let traininplatform = function (nx) {
    return 3 * nx;
}
let totaltrains = function (nx) {
    return traininplatform(nx);
}
let traincount = totaltrains(2);
document.getElementById("fntask4").innerHTML = `Number of trains arrive per platform is ${traincount}`;



//Arrow functions

let calcage5 = (firstname1, age3) => {
    return `Mr. ${firstname1} is ${age3} years old person`;
}
let funcvar1 = (calcage5("Kamal", "45"));
document.getElementById("fntask5").innerHTML = funcvar1;



//function returning functions

let greet = function (greeting) {
    return function (name) {
        document.getElementById("fntask6").innerHTML = `${greeting} ${name}`;
    }
}

let greeter = greet('Hey');
greeter('Jonas, you are succesfully returned a function');




//call() Method with Arguments

const persondetails2 = {
    fullname: function (city, country) {
        return "Mr." + this.firstName + " " + this.lastName + " " + "from" + " " + city + "," + country + " " + "successfully done call() method";
    }
}
const person3 = {
    firstName: "John",
    lastName: "Doe"
}

let persondet1 = (persondetails2.fullname.call(person3, "Oslo", "Norway"));
document.getElementById("fntask7").innerHTML = persondet1;


//apply() Method
const persondetails3 = {
    fullname: function (city, country) {
        return "Mr." + this.firstName + " " + this.lastName + " " + "from" + " " + city + "," + country + " " + "successfully done apply() method";
    }
}

const person4 = {
    firstName: "Scott",
    lastName: "Mary"
}

let persondet2 = (persondetails3.fullname.apply(person4, ["Oslo", "Norway"]));
document.getElementById("fntask8").innerHTML = persondet2;


//bind() method
const persondetails4 = {
    firstName: "John5",
    lastName: "Doe",
    fullname: function () {
        return "Mr." + this.firstName + " " + this.lastName + " " +
            "successfully done bind() method";
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let person5 = persondetails4.fullname.bind(member);
document.getElementById("fntask9").innerHTML = person5();