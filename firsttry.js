document.getElementById("demo1").innerHTML="This is a dynamic text message"
document.getElementById("demo2").innerHTML="Hello Javascript!"
document.getElementById("mybtn").onclick=displaydate;
document.write("Great!!!!!");
console.log("awesome");
console.log(3+2);

document.write(3+2);

function displaydate()
{
   document.getElementById("mydate").innerHTML=Date(); 
}

//using the Var element to create variables.
var x; //declaration of a variable
x=10; // initialization of a variable

var y=20; //declaration and initialization

var t=30, h=40;

document.write(x);
console.log(x);
document.write(y);
console.log(y);
document.write(t);
console.log(t);
document.write(h);
console.log(h);
document.write(x+y);
console.log(x+y);
document.write(h+y);
console.log(h+y);


//using the let element to create variables
let Fname;//declaration
Fname="Esther"; // initialization

document.write(Fname);


//difference between var and let
console.log(z);// prints but the first returns undefined
var z=100;
console.log(z);

// console.log(s);// returns and error. cannot print before initializing a variable.
// let s=100;
// console.log(s);


//using the const element to create variables
const gender = "female";
console.log(gender);
document.write(gender);
// gender = "male";// incorrecnt syntax because the value cannot be changed.
// console.log(gender);
// document.write(gender);