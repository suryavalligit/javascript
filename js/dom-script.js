

document.getElementById("domtask1").innerHTML = location.href;

document.getElementById("domtask2").innerHTML = navigator.userAgent;

var a = new Date();
var b = a.toLocaleDateString();
function sample() {
    document.getElementById("domtask3").innerHTML = b;
}
window.setTimeout(sample, 2000);

var a1 = new Date();
var b1 = a1.toLocaleTimeString();
function sample1() {
    document.getElementById("domtask4").innerHTML = b1;
}
window.setInterval(sample1, 2000);



//Element Methods

document.getElementById("domtask5").innerHTML = "<img id='myimg' class='place-img' alt='text' />"
function myFunction1() {
    document.getElementById("myimg").setAttribute("src", "images/placeholder.jpg");
}

document.getElementById("domtask6").innerHTML = "<img src='images/placeholder.jpg' id='myimg2' class='place-img' alt='text' />"
function myFunction2() {
    document.getElementById("myimg2").removeAttribute("src");
}



// var a = 10;
// var b = 20;
// var c = a + b;
// document.getElementById("s1").innerHTML = c;

// ////////////////////////click-event
// document.getElementById("div1").addEventListener("click", sample);
// function sample() {
//     document.getElementById("div1").innerHTML = "Clicked at" + new Date().toLocaleTimeString();
// }

// ////////////////////////dblclick-event
// document.getElementById("div2").addEventListener("dblclick", sample1);
// function sample1() {
//     document.getElementById("div2").innerHTML = "Double-Clicked at" + new Date().toLocaleTimeString();
// }

// ////////////////////////click-event-task
// document.getElementById("text7").addEventListener("click", sample2);
// function sample2() {
//     var priceno = Number(document.getElementById("text5").value);
//     var taxno = Number(document.getElementById("text6").value);
//     var Netprice = priceno + taxno;
//     document.getElementById("text8").value = Netprice;
// }

// ////////////////////////mouseover-event-task
// document.getElementById("div3").addEventListener("mouseover", sample3);
// function sample3() {
//     document.getElementById("div3").style.backgroundColor = "blue";
// }

// ////////////////////////mouseout-event-task
// document.getElementById("div4").addEventListener("mouseout", sample4);
// function sample4() {
//     document.getElementById("div3").style.backgroundColor = "red";
// }

// ////////////////////////mousemove-event-task
// document.getElementById("div5").addEventListener("mousemove", sample5);
// function sample5(event) {
//     console.log(event.pageX + "," + event.pageY);
// }

// ////////////////////////mousemove-event-task
// document.getElementById("text9").addEventListener("keydown", sample6);
// function sample6() {
//     var s = Number(document.getElementById("text9").value);
//     document.getElementById("text10").value = s;
// }