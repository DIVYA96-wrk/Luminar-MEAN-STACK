var lolim=1,uplim=50,i,j,flag=0;
for(let  i=lolim; i<=uplim; i++)
{
    if (i==1)
    {
        flag=1;
    }
    for(let  j=2;j<i;j++)
    {
        
     if(i%j!=0)
        {
            flag=1;
            continue;
            
        }
        else 
        {
            flag=8;
            break;
        }
    }
    if(flag==1) 
       {
        console.log(i);}
        
       
          
    
        
        
    }

