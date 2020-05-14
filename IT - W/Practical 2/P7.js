function isprime(n1)
{
    var i;
    
    for( i =2; i < n1;i++)
    {
        if(n1%i==0)
        {
            return 1;
        }
    }

    return n1;
}

var x = prompt("Enter no.");
var i;
for( i = 3; i <=x; i++)
{
    if(isprime(i) !=1)
    {
        document.write(i);
        document.write("<br>");

    }
}
