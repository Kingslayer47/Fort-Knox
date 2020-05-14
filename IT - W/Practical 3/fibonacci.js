// 1, 1, 2, 3, 5, 8

function fib(n)
{
  if(n < 2)
  { 
    
    return n;
  
  }
  
  return fib(n - 1) + fib(n - 2);
}

var n = prompt("Enter no.");

var op = fib(n);

document.write("Answer is " + op);