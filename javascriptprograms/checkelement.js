var num=3,array=[]
array=[1,2,3,4];
flag=0;
for(let i of array){
    if(i==num)
    {
        flag=1;
        break;
    }

}
if(flag>0)
{
    console.log("element found");
}
else{
    console.log("element not found");
}