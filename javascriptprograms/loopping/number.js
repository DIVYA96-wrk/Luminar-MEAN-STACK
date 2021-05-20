var sum=0,res=0,i=1,limit=5;
while(i<=limit)
{
    res=res*10+limit;
    console.log(res);
    sum=sum+res;
    i++;
    
}
console.log(`res=${sum}`);