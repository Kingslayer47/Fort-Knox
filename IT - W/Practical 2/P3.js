var st1 = prompt("Enter Username");
if(st1 == "Admin")
{
    var st2 = prompt("Enter Password");
    if(st2 == "TheMaster")
    {
        document.write("Welcome");
    }

    else if(st2 == "" || st2 == null)
    {
        document.write("Cancelled");
    }

    else
    {
        document.write("Wrong Password");
    }
}
else if(st1 == "" || st1 == null)
    {
        document.write("Cancelled");
    }

else
{
    document.write("I don't know you");
}