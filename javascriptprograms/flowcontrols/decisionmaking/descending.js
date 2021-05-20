var num1=20,num2=-20,num3=10
if( ((num1>num2)||(num1==num2)) && ((num2>num3)||(num2==num3)) )
{
    console.log(`order is ${num1} ${num2} ${num3}`);
}

else if ((num2>num1)&&((num1>num3)||(num1==num3)))
{
    console.log(`order is ${num2} ${num1} ${num3}`);
}
else if (((num2>num3)||(num2==num3)) &&(num3>num1))
{
    console.log(`order is ${num2} ${num3} ${num1}`);
}
else if (((num1>num3)||(num1==num3)) &&(num3>num2))
{
    console.log(`order is ${num1} ${num3} ${num2}`); 
}
else if (((num3>num1)||(num3==num1))&&(num1>num2))
{
    console.log(`order is ${num3} ${num1} ${num2}`);
}
else if (((num3>num2)||(num3==num2))&&(num2>num1))
{
    console.log(`order is ${num3} ${num2} ${num1}`);
}
else 
{
    console.log(`order is ${num3} ${num2} ${num1}`);
}