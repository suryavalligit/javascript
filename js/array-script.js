
'use strict'


//Array of objects

var students = [
    { studentName: 'Surya', Age: '24' },
    { studentName: 'Karthi', Age: '25' }
]

for (let i = 0; i < students.length; i++) {
    document.getElementById("arrtask1").innerHTML = `Name: ${students[i].studentName}, Age: ${students[i].Age}`;
}


//Array Methods

var arr1 = ['value0', 'value1', 'value2', 'value3', 'value4', 'value5'];
document.getElementById("arrtask2").innerHTML = arr1;

function myFunction1() {
    arr1.splice(1, 1);
    document.getElementById("arrtask2").innerHTML = arr1;
}

function myreset1() {
    arr1.splice(1, 0, 'value1');
    document.getElementById("arrtask2").innerHTML = arr1;
}

var prices1 = [10, 20, 30, 40];
document.getElementById("arrtask3").innerHTML = `Before push & pop : ${prices1}`;

function myFunction2() {
    prices1.push(50, 60);
    document.getElementById("arrtask3").innerHTML = `After push : ${prices1}`;
}
function myFunction3() {
    prices1.pop()
    document.getElementById("arrtask3").innerHTML = `After pop : ${prices1}`;
}
function myreset2() {
    document.getElementById("arrtask3").innerHTML = `Before push & pop : ${prices1}`;
}



let fruits = ["Apple", "Orange", "Pear"];
document.getElementById("arrtask4").innerHTML = `Before shift & unshift : ${fruits}`;

function myFunction4() {
    fruits.shift();
    document.getElementById("arrtask4").innerHTML = `After shift : ${fruits}`;
}
function myFunction5() {
    fruits.unshift('Apple');
    document.getElementById("arrtask4").innerHTML = `After unshift : ${fruits}`;
}
function myreset3() {
    document.getElementById("arrtask4").innerHTML = `Before shift & unshift : ${fruits}`;
}


//Sorting an arrays 

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arrtask5").innerHTML = fruits1;
function myFunction6() {
    document.getElementById("arrtask5").innerHTML = fruits1.sort();
}

//sort an array acsending
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("arrtask6").innerHTML = points;
function myFunction7() {
    let key1 = points.sort(function (a, b) { return a - b });
    document.getElementById("arrtask6").innerHTML = key1;
}

//sort an array descending
const points1 = [40, 100, 1, 5, 25, 10];
document.getElementById("arrtask7").innerHTML = points1;
function myFunction8() {
    let key2 = points1.sort(function (a, b) { return b - a });
    document.getElementById("arrtask7").innerHTML = key2;
}



let arr = ["Object0", "Object1", "Object2", "Object3"];
document.getElementById("arrtask8").innerHTML = arr;
function myFunction9() {
    document.getElementById("arrtask8").innerHTML = arr.slice(1, 3);
}



// var products1 = [
//     { id: 1, productName: 'TV', price: 1000 },
//     { id: 2, productName: 'Fridge', price: 3300 },
//     { id: 3, productName: 'Phone', price: 3000 },
//     { id: 4, productName: 'Fan', price: 4000 }
// ]

// function myFunction10() {
//     document.getElementById("arrtask9").innerHTML = products1.every(
//         (p) => {
//             return p.price >= 1000;
//         }
//     );
// }

// function myFunction11() {
//     document.getElementById("arrtask10").innerHTML = products1.some(
//         (p) => {
//             return p.price >= 3000;
//         }
//     );
// }

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction12);

document.getElementById("arrtask11").innerHTML = over18;

function myFunction12(value) {
    return value > 18;
}


const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction13);

document.getElementById("arrtask12").innerHTML = numbers2;
function myFunction13(value) {
    return value * 2;
}


const fruitsinc = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arrtask13").innerHTML = fruitsinc.includes("Mango");






//Coding Challenge 1

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    const dogs = dogsJuliaCorrected.concat(dogsKate);

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            document.getElementById("arrtask14").innerHTML = `Dog number ${i + 1} is an adult, and is ${dog} years old`;
        } else {
            document.getElementById("arrtask14").innerHTML = `Dog number ${i + 1} is still a puppy`;
        }
    });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);



//Coding Challenge 2

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    return average;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);



//Coding Challenge 3

// Test Data:
// const dogs = [
//     {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
//     {weight: 8, curFood: 200, owners: ['Matilda']},
//     {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
//     {weight: 32, curFood: 340, owners: ['Michael']},
// ];


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => Math.trunc((dog.recFood = dog.weight ** 0.75 * 28)));
console.log(dogs);



const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);



const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);



const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);



console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too little`);



console.log(dogs.some(dog => dog.curFood === dog.recFood));

const checkEatingOkay = function (dog) {
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
}
console.log(dogs.some(checkEatingOkay));


console.log(dogs.filter(checkEatingOkay));


const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);