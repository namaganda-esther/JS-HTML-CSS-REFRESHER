//recreacting the implementation of method of the parent class in the child class
//without changing the structure but just the values.
//overidding is only possible where there is inheriance.

class Bank
{
    roi()
    {
        return 0;
    }
}

class Axis extends Bank
{
    roi()
    {
        return 10.5;
    }
}

class SBI extends Bank
{
    roi()
    {
        return 12.5;
    }
}

sbi = new SBI();
console.log(sbi.roi());

ax = new Axis();
console.log(ax.roi());