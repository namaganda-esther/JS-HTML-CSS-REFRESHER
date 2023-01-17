//working with strings

let s = "welcome"; //creating a new string variable
let y = new String(); // this is a new string object

// chatAt(). this extracts/retrieves a specific character based on the index passed.
console.log(s.charAt(2));

//concat(). two or more strings
console.log(s.concat("to church"));
console.log(s.concat("to School.").concat("you will learn"));

//replace(). replace function used to replace a specific character or a main string
s="come home";
console.log(s.replace("come","go"));

//substring. used to extract some portion of the actual string 
s="welcome";
console.log(s.substring(3,7));// the first is the index of where you want to start from, the second is the exact letter location

//toLowerCase() & toUpperCase()
s = "sparrow";
console.log(s.toUpperCase());

s = "SYSTEMS";
console.log(s.toLowerCase());

//split(). used to split a string variable
s = "come home";
let arr = s.split(' ');
console.log(arr[0]);
console.log(arr[1]);

//trim(). used to trim the left and right side of the string
s = "   welcome   ";
console.log(s);
console.log(s.trim());


//working with numbers
//numbers can be integers or decimals

let x = 100;//
let w = new Number(100);// creating a new number

let m = 90; //this is an integer

let n = 50.5; //this is a decimal number

let b = 25e2; //this is an exponential number

console.log(m,n,b);


//inInteger(). verifies whether the value is an integer or not
m = 45;
n = 3.14;
b = "sweet";
console.log(Number.isInteger(m));
console.log(Number.isInteger(n));
console.log(Number.isInteger(b));

//parseInt(). converts a string into a number.
b = "255";
console.log(typeof(b));
console.log(typeof(Number.parseInt(b)));

//parseFloat(). converts a decimal number
b = "3.14";
console.log(typeof(b));
console.log(typeof(Number.parseFloat(b)));


//toString().//converts a string into a number
let h = 56;
console.log(typeof(h));
console.log(typeof(Number.toString(h)));