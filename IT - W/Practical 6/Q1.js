var cname = prompt("Enter College Name");
var v = confirm("Are you sure");

if(v)
{
    if(cname == "UVPCE")
    {
        setTimeout(window.open("https://www.uvpce.ac.in"),2000);
    }

    else
    {
        myWindow.close();
    }
}