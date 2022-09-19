
// 'use strict'

//Data types
var a = 10;
var b = String(a);
document.getElementById("dt-task1").innerHTML = `Format - Number to String, Provided input - 10, Value - ${b} , DataType - ${typeof b}`;

//number() function - used to convert string value into "number" data type.
//input : alphabet/alphanumerical - output NaN(Not a number) (NaN - It is a number data type)
//input : empty / space - output 0

var m = "10";
var m1 = Number(m);
var m2 = parseInt(m);
var n = "abcd";
var n1 = Number(n);
var n2 = parseInt(n);
document.getElementById("dt-task2").innerHTML = `Format - String to Number, Provided input - "10", Value - ${m1} , DataType - ${typeof m1}`;
document.getElementById("dt-task3").innerHTML = `Format - String to Number, Provided input - "abcd", Value - ${n1} , DataType - ${typeof n1}`;


//parseInt() function - used to convert string to number data type
//parseInt() doesn't support decimal values. but if we give decimal values, it take only square off the number into whole value.
//syntax - parseInt(string value)    -----   number


//parsefloat() function - same as parseInt() but parseFloat() supports decimal values.

//toFixed() function - It also converts string to number.
//syntax - numbervalue.toFixed(no. of decimals);
var x = 20;
var y = x.toFixed(2);
document.getElementById("dt-task4").innerHTML = `Format - Number to String, Provided input - 20, Value - ${y} , DataType - ${typeof y}`;


//length - represents the count of characters.
var z = "apple";
var za = z.length;
document.getElementById("dt-task5").innerHTML = `Format - String to Number, Provided input - "apple", Length - ${za} , DataType - ${typeof za}`;


//charAt() - returns the character at a given position in a string
var text = "HELLO WORLD";
document.getElementById("dt-task6").innerHTML = `Format - Character position, Provided input - "HELLO WORLD", Output - ${text.charAt(0)}`;


//charCodeAt() - returns the unicode of the character at a given position in a string
let text1 = "HELLO WORLD";
document.getElementById("dt-task7").innerHTML = `Format - Character position at Unicode, Provided input - "HELLO WORLD", Output - ${text1.charCodeAt(0)}`;


//slice(), substring()  - extract a part of a string and returns the extracted parts in a new string(end not included)
//slice() - accepts both positive and negative indexes
let text2 = "Apple, Banana, Kiwi";
document.getElementById("dt-task8").innerHTML = `Format - Slice Text, Provided input - "Apple, Banana, Kiwi", Output - ${text2.slice(7, 13)}`;

//substring() - accepts only positive index
let text3 = "Apple, text,a Kiwi";
document.getElementById("dt-task9").innerHTML = `Format - substring Text, Provided input - "Apple, text,a Kiwi", Output - ${text3.substring(7, 13)}`;


//replace() - used to replace one string with another string.
var text5 = "welcome to New Delhi";
document.getElementById("dt-task10").innerHTML = `Format - Replace Text, Provided input - "welcome to New Delhi", Output - ${text5.replace("New Delhi", "India")}`;


//indexOf() - Used to search the character/string in the actual string.
//If the given character/string is found in the actual string, it returns it's index. If it is not found, it returns -1.
let text11 = "Hyderabad";
document.getElementById("dt-task11").innerHTML = `Format - Index & lastIndex Text, Provided input - "Hyderabad", Output - ${text11.indexOf("e")}, ${text11.lastIndexOf("a")}`;




//Date - It is a constructor function
//These are used to perform manipulations/handling on dates.

//Below are getting sysytem date
//new Date() - To get system date and time.

//toLocaleDateString() - This will give month,date,year format - MM/DD/YY.

//toLocaleTimeString() - This will give hours,minutes,seconds,AM or PM format - h:m:s AM/PM

//getTime() - no. of milli seconds since 1/1/1970 12:00 AM.

//getDay() - Returns day of week (0 - 6)(Sunday to Saturday)

//getDate() - Displays Current Date

//getMonth() - Month[0 - 11] (Jan to Dec)

//getFullYear()
var a11 = new Date();
var b11 = a11.toLocaleDateString();
var c11 = a11.toLocaleTimeString();
var d11 = a11.getTime();
var e11 = a11.getDay();
var f11 = a11.getDate();
var g11 = a11.getMonth() + 1;
var h11 = a11.getFullYear();
var i11 = a11.getHours();
var j11 = a11.getMinutes();
var k11 = a11.getSeconds();
var l11 = a11.getMilliseconds();
document.getElementById("dt-task12").innerHTML = `System Date : ${a11}`;
document.getElementById("dt-task13").innerHTML = `toLocaleDateString : ${b11} & toLocaleTimeString : ${c11}`;
document.getElementById("dt-task14").innerHTML = `getTime : ${d11}, getDay : ${e11}, getDate : ${f11}, getMonth : ${g11}, getFullYear : ${h11}`;
document.getElementById("dt-task15").innerHTML = `getHours : ${i11}, getMinutes : ${j11}, getSeconds : ${k11}, getMilliseconds : ${l11}`;


//Below are setting custom date.
var a13 = new Date();
var b13 = a13.setFullYear(1998);
var c13 = a13.setMonth(4);
var d13 = a13.setDate(18);
console.log(a13.toLocaleDateString());

