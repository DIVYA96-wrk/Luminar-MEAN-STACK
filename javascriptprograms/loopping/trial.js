var n=0,a=[],num=11
a=[1,2,3,4,5,6,7,8,9] ;
for(i=n+1;i<a.length;i++)//n=0,i=1|n=1
{
if(a[n]+a[i]==num)
{
    console.log(a[n],a[i]);//1,6 |
    n=n+1;
    i=n;
   
    }
    else if(i==a.length-1) 
    {
        n=n+1;
        i=n;
    }
}
                                                         
