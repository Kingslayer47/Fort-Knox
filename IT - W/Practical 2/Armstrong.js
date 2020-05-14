
var x ;
x = prompt("Enter No.");
var a,b,c = x;
var i,ans = 0;

for(i =0; i <x.length;i++)
{
    
    a = c % 10;
    b = parseInt(c / 10);
    c = b;
    ans = ans + Math.pow(a,x.length);
    
}

if(ans == x)
{
    document.write("The no. is an Amrstrong");

}

else
{
    document.write("The no. is not an Amrstrong");
}