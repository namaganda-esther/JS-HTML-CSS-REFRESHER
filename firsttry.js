document.getElementById("demo1").innerHTML="This is a dynamic text message"
document.getElementById("demo2").innerHTML="Hello Javascript!"
document.getElementById("mybtn").onclick=displaydate;

function displaydate()
{
   document.getElementById("mydate").innerHTML=Date(); 
}
