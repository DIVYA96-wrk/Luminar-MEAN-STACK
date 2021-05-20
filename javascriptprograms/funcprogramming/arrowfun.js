var add=(num1,num2)=>num1+num2;
var sub=(num1,num2)=>num1-num2;
var mul=(num1,num2)=>num1*num2;
var div=(num1,num2)=>num1/num2;
var cube=(num)=>num**3;
console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(10,5));
console.log(div(10,5));
console.log(cube(3));

/*fuction sub(num1,num2)
{
    if(num1<num2)
    {
        let tem=num1;
        num1=num2;
        num2=tem
    }
    return num1-num2;
} */

var sub=(num1,num2)=>{if(num1<num2)
{
    let tem=num1;
    num1=num2;
    num2=tem
}
return num1-num2; }

console.log(sub(10,20));