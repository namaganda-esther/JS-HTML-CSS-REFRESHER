// example 1

let person=
{
    firstname: "Esther",
    lastname: "Namaganda",
    age: 40,
    weight: 90
}

// accessing Objects in Js
console.log(person["firstname"])
console.log(person.weight);

// adding a new property to the existing object
person["height"] = 5.4;
person.color= "brown";

console.log(person.color);

// updating values of property
person.weight = 60;
console.log(person.weight);

// removing the property from an object
delete person.age;
console.log(person.age);


// for/in loop used to iterate each property of the object. 
// used to read all the properties
console.log("...........looping objects........");
for(let x in person)
{
    // console.log(x);//prints only propert names.
    // console.log(person[x]);//prints the property values

    console.log(x+" "+person[x]);
}

// example 2 object properties with methods

let employee=
{
    employeename: "Asaba",
    employeeid: 1001,
    job: "Teacher",
    basicSalary: 600000,  
    bonus: function()//declaring and initializing a method in js
            {
               return((this.basicSalary *10)/100);
            }
};
console.log(employee.employeename);
// accessing a method in Js.
console.log(employee.bonus());
