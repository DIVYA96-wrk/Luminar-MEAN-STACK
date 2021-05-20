var n=0,a=[],num=7
a=[1,2,3,4,5,6] ;
for(i=n+1;i<a.length;i++)//n=0,i=1|n=1 i=2 | n=2 i=3 | n=3 i=4   |n=4 ,i=5     | n=5 , i=6 loop ends
{
if(a[n]+a[i]==num)//1+6=7         | 2+5 =7 | 3+4=7   | no        |   no        |
{
    console.log(a[n],a[i]);//1,6  | 2,5    | 3,4     | no print   | no print   |
    n=n+1;
    i=n;
   
    }
    else if(i==a.length-1) // when n=4  & i=5 
    {
        n=n+1; // n=5;
        i=n; // i=5; and after incerement loop ends.
    }
}