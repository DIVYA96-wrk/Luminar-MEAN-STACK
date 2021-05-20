var arr=[12,4,7,1,2] , num=2,flag=0;
arr.sort((i,j)=>i-j);
var low=0, upp=arr.length-1;
while(low<=upp)
{
    let mid=Math.floor(low+upp/2);
    if(num>arr[mid])
    {
        low=mid+1;
    }
    else if(num<arr[mid])
    {
        upp=mid-1;
    }
    else if (num==arr[mid])
    {
        flag=1;
        break;
    }
    low++;
}
if(flag>0)
{
    console.log("element found");
}
else{
    console.log("element not found");
}


