// different ways of creating an array
let cars =["wish", "passo", "vitz", "alex"];

let femaleNames = new Array("prudence", "justice", "truth");

console.log(femaleNames);
console.log(cars);

// accessing array elements using their index. 
// the array index begins from 0.
console.log(cars[2]);

// changing the value of an array element in an array
femaleNames[2]="Jael";
console.log(femaleNames);

// variables of different types in the same array
let worker =["Asaba", "priscialla", 20, "brown", 5.7, false];
console.log(worker);

// having objects in an array
let person1=
{
    names: "Allan",
    age:19
};
let person2=
{
    names: "kato",
    age:15
};
let persons = [person1, person2];
console.log(persons);
console.log(persons.length);


// for loop in arrays
let arr=[10,20,30,40];
for(let i=0; i<=arr.length-1; i++)
{
    console.log(arr[i]);
}

// looping elements from an array using the for/of loop
// prints all the elements of an array
for (ele of arr) 
{
    console.log(ele);
    document.write(ele);
}

// array methods

let vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans"];

// toString()  and join()
//tostring method converts an array top a string by separating the values using commas

console.log(vegetables.toString());
console.log(vegetables.join("|"));//A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

// pop(). this removes the last element from the array.
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans"];
// vegetables.pop(); Also removes the element but doesnt print it out.
console.log(vegetables.pop());//returns the element removed from the array
console.log(vegetables);

// push(). this helps to add a new element to the array at the end

vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans"];
// vegetables.push("sukuma"); adds a new element but doesnt print or return it.
console.log(vegetables.push("sukuma")); //returns the length of the array
console.log(vegetables)

//shift(). removes the first array element and pushes the rest to lower indexes
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans", "sukuma"];
// vegetables.shift();
console.log(vegetables.shift());
console.log(vegetables);

// unshift(). adds a new element to the array at the beginning and shift the rest to higher index.
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans", "sukuma"];
// vegetables.unshift();
console.log(vegetables.unshift("greens"));
console.log(vegetables);


// delete elements from an array/ you have to pass the index number of the element you want to delete.
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans", "sukuma"];
delete vegetables[3];
console.log(vegetables);

// concat(). helps to join or merge two or more arrays into one
let arr1=[15,34];
let arr2=["a", "b", "c"];
console.log(arr1.concat(arr2));

let arr3 = [true, "strong"];
console.log(arr1.concat(arr2, arr3));

//slice(). slices some elements from the array , get the piece of an array into a new array.
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans", "sukuma"];
vegetables.slice();
console.log(vegetables.slice(3));//removes the first three elements of the array

// sort(). used to sort the elements of the array. in ascending or descending order
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans", "sukuma"];
console.log(vegetables.sort());

let nums = [10,50,65,79,43,98,50,45];
console.log(nums.sort());

// reverse() reverses the array.
vegetables =["spinach", "nakati", "cabbage", "ovacado", "beans", "sukuma"];
console.log(vegetables.reverse());//the last element becomes the first and the first becomes thelast
