

var data = 
{
    firstname:prompt("Enter name"),
    rollno:prompt("Enter roll no."),
    marksheet :function()
    {
    
        var s1= prompt("Enter marks1");
    
        var s2= prompt("Enter marks2");
    
        var s3= prompt("Enter marks3");

        var avg = (s1+s2+s3) / 3;
        var high = Math.max(s1,s2,s3);
        var low = Math.min(s1,s2,s3);     
    }

}
        document,write("Name = " + data.firstname);
        document,write("Roll No. = " + data.lastname);

        document.write("Highest marks are =" + data.marksheet().high);
        document.write("<br>");
        document.write("Lowest marks are =" + data.marksheet().low);
        document.write("<br>");
        document.write("Average marks are =" + data.marksheet().avg);