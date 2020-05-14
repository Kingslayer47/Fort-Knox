var n1 = promt("Enter no. of unit consumed");
var ans = 1;
if(n1 >=0 && n1<=100)
{
    ans = n1 * 1.5;
}

else if(n1 >=101 && n1<=200)
{
    ans = n1 * 2.5;
}

else if(n1 >=201 && n1<=300)
{
    ans = n1 * 3.0;
}

else if(n1 >=301 && n1<=450)
{
    ans = n1 * 4.5;
}

else if(n1 >450)
{
    ans = n1 * 6.0;
}

else
{
    document.write("Invalid Input");
}

document.write("Answer = " + ans);