//concept of encapsulation

class Students
{
    constructor()
    {
        let name;
        let marks;
    }

    getName()// getters
    {
        return this.name;
    }
    setName(name)// setters
    {
        this.name = name;
    }

    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
        this.marks = marks;
    }
}
let S = new Students();
S.setName("esther");
S.setMarks(75);

console.log(S.getName());
console.log(S.getMarks());