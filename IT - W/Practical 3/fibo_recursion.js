var n = prompt("Enter limit");
                var a = 0 , b = 1 , c;
                document.write("0  1" );
            
                function fibo(n)
                {

                        for(var i =1;i<n;i++)
                    {
            

                            c = a + b;
                            a = b;
                            b = c;
                            document.write("  " + c + "   ");
                        
            
                    }

                }

                while(n>0)
                {
                    fibo(n);
                }