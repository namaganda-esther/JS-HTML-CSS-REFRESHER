let d; //initialzation
d = new Date();//declaration
// console.log(d);
console.log(d.getDate());// gets the day 1-31
console.log(d.getMonth()); // gets the month 0-11, returns index of the month
console.log(d.getFullYear()); // returns the current year
console.log(d.getDate()+" "+d.getMonth()+" "+d.getFullYear());

console.log(d.getHours()); //0-23
console.log(d.getMinutes());//0-59
console.log(d.getSeconds());//0-59

//digital clock code
function showtime()
{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let session = "AM";
    if(h==0){
        h=12;
    }
    
    if(h>12){
        h=h-12;// changes the hours to 12 hours clock
        session = "PM";
    }
    // if(h<10)
    // {
    //     h="0"+h;// single digit hours will begin with a zero.
    // }

    // if(m<10)
    // {
    //     m="0"+h;// single digit minutes will begin with a zero.
    // }
       
    // if(s<10)
    // {
    //     s="0"+h;// single digit seconds will begin with a zero.
    // }
    h=(h<10)? "0"+h:h;// single digit hours will begin with a zero.
    m=(m<10)? "0"+m:m;
    s=(s<10)? "0"+s:s;


       
    let time = h+":"+m+":"+s+" "+session;
    document.getElementById("dc").innerHTML=time;
    setTimeout(showtime,1000);//functions calls itself after every 1 second, updates
}

showtime();