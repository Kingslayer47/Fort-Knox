#include<stdio.h>
#include<conio.h>

main()
{
	int a,b;
	float  add,sub,mul,div;
	clrscr();
	printf("Enter 2 values \n");
	scanf("%d",&a);
	scanf("%d",&b);

	add = a + b;
	sub = a - b;
	mul = a * b;
	div = a / b;

	printf("The answer for \n addition is %f \n subtraction is %f \n multiplication is %f \n division is %f",add,sub,mul,div );
	getch();





}