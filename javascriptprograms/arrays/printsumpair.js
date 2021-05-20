var num=8,one=[1,2,3,4,5,6]
for(let i=0;i,i<one.length;i++)
{
    for(let j=i+1;j<one.length;j++)
    {
        if(one[i]+one[j]==num)
        {
            console.log(one[i],one[j]);
            break;
        }
    }
}