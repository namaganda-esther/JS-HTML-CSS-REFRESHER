///adding a new property to a function///

function student()
{
    this.name ="john";
    this.gender = "male";
}

// this is how the prototype is used to add new properties to a class and its accessed by all classes
student.prototype.age = 35;

stu1 = new student();//creating a new object stu1
console.log(stu1.name);
console.log(stu1.gender);

// stu1.age = 35;// adding a new object to class student.
console.log(stu1.name, stu1.gender, stu1.age);


// creating a new student
stu2 = new student();
console.log(stu2.name, stu2.gender, stu2.age);//stu2 accesses the name and gender properties because they are in the function student


///adding a new property to a class
class Employee
{
    constructor(eid,ename)
    {
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.sal=50000;

empobj = new Employee(101, "Priscilla");
console.log(empobj.eid, empobj.ename, empobj.sal);

emp2obj = new Employee(102, "Allan");
console.log(emp2obj.eid, emp2obj.ename, emp2obj.sal);


///adding a new function to the class using prototype.
class Employees
{
    constructor(eid,ename)
    {
        this.eid = eid;
        this.ename = ename;
    }
}

Employees.prototype.sal=50000;

Employees.prototype.display = function()
                              {
                                console.log(this.eid, this.ename, this.sal);
                              }

obj1 = new Employees(101, "Priscilla");
obj1.display();

obj2 = new Employees(102, "Allan");
obj2.display();