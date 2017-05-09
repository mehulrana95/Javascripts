/* -------------------- Concatination -------------------- */


// var myName = "Mehul";
// var mySname = "Rana";
//
// var concat = myName + " " + mySname;
//
//
/* -------------------- if else loop -------------------- */
//
//
// var a = 10;
// var b = 5;
//
// if(a < b){
//   alert("Value of a is less");
// }
// else{
//   alert("Value of b is less");
// }


/* -------------------- Ternary -------------------- */


// var a = 100;
// var b = 20;
//
// var c = (a > b) ? alert("A is greater") : alert("A is less");


/* -------------------- switch -------------------- */


// var fruit = "banana";
//
// switch (fruit) {
//     case "apple":
//         document.write("Apple")
//         break;
//
//     case "banana":
//         document.write("Banana")
//         break;
//
//     case "orange":
//         document.write("orange")
//         break;
//
//     default:
//         document.write("Out of stock");
//
// }


/* -------------------- while , do while loop -------------------- */


// var count = 0
//
// while (count < 10) {
//   document.write(count + " ");
//   document.write("Hello World <br>");
//   count++;
// }
//
// do {
//   document.write(count + " ");
//   document.write("Hello World <br>");
//   count++;
// } while (count < 5);


/* -------------------- for loop -------------------- */

// for (var count = 1; count <= 10; count++) {
//   document.write(" " + count + "<br>");
// }


/* -------------------- functions -------------------- */

// function sayHello(){
//   document.getElementById("hello").innerHTML="Hi";
// }
//
// sayHello();


/* -------------------- Function integrated to inner HTML -------------------- */

// function calc(){
//   var w = document.getElementById("width").value;
//   var h = document.getElementById("height").value;
//
//   var area = w * h;
//
//   document.getElementById("answer").value = area;
// }


/* -------------------- Array -------------------- */


// var studentName = [];
//
// studentName[0] = "Mehul";
// studentName[1] = "Rana";
//
// document.write(studentName[0]);


// var value = Math.floor(Math.random() * 6) + 1;
// document.getElementById("hello").innerHTML = value;
// console.log(value);
//
//
// var num = "50012";
// var convertnum = Number(num);  // number() function converts string to number
// document.write(convertnum  + "<br>");

var sent = "This is a sentence that has \" inverted closing quotes ";
var a = sent.length;
document.write("<br>" + sent + " - " + a  + "<br>");
console.log(a);

var b = sent.charAt(2);  //Displays Character at position 2 i.e 0,1,2 - i
document.write("<br>" + b + "<br>");

var c = sent.search("a");
document.write("<br>" + c + "<br>" );

var date = new Date();
var d1 = date.getDate();
var d2 = date.getMonth();
var d3 = date.getFullYear();
document.write(d1 + d2 + d3);
