//class with menthods declared in it without arguments
class Student
{
    setDetails()
    {
      this.sid = 101;
      this.sname = "Esther";
      this.grade = "A";  // all these are local variables  
    }
    display()
        {
            console.log(this.sid, this.sname, this.grade);
        }
}

let stu = new Student();
stu.setDetails();
stu.display();

//writing a class with arguments
class Animals
{
    setCharater(name, color, wild)
    {
           this.aname = name;
           this.acolor = color;
           this.awild = wild;
    }

    display()
    {
        console.log(this.aname, this.acolor, this.awild);
        document.write(this.aname, this.acolor, this.awild);
    }
}
let A = new Animals();
A.setCharater("lion", "Brown", "wild");
A.display();


//constructors and how to create it
class Phones
{
     constructor(pname, pcost, pbrand, pcolor)
    {
        this.phoneName = pname;
        this.phoneCost = pcost;
        this.phoneBrand = pbrand;
        this.phoneColor = pcolor;
    }
    display()
    {
        console.log(this.phoneName, this.phoneCost, this.phoneBrand, this.phoneColor);
    }
}
let P = new Phones("Infinix Hot 10s", 650000, "Techno", "Gold");
P.display();

let R = new Phones("Samsung S8", 800000, "Samsung", "Black");
R.display();
