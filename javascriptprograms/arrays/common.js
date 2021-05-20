var arr1=[10,30,20,50,40] , arr2=[9,20,10,22,21,50], a=0, b=0;
arr1.sort((i,j)=>i-j)
arr2.sort((i,j)=>i-j)
while(a<arr1.length)
{
    if(arr1[a]==arr2[b])
    {
        console.log(arr1[a]);
        a++;
        b++;
    }
    else if(arr1[a]<arr2[b])
    {
        a++;
    }
    else{
        b++;
    }
}