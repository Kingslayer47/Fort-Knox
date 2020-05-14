
      
        
      var num = 
      {
          n1:prompt("Enter no."),
          n2:function (n1)
          {
            var sum = 0;
            for(var i = 0; i < n1; i++) 
            {
              if(n1%i==0)
              {
                sum = sum + i;
              }
            }

            if(n1 == sum)
            {
              document.write("The no. is a perfect no.");
            }

            else
            {
              document.write("The no. is not a perfect no.");
            }
            return sum;
          }
        }

        var x = num.n1;
        var y = num.n2(x);

    