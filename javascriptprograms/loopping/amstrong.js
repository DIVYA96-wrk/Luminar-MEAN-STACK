var num=153,j,res=0;
var z;
z=num;
while (z!=0) {

    j=z%10;

    res=res+j**3;
    z=Math.floor(z/10);
}
if(num==res)
{
    console.log("number is amstrong");
}