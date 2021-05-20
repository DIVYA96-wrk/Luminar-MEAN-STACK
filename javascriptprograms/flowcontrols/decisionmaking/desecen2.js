var num, i, j ,temp;
num=[10, 20 ,30];
for (let i = 0; i < 3; i++) 
{
 for (let j =i+1 ; j < 3;j++)
  {

    if (num[i]>num[j])
    { 
        temp=num[i];
        num[i]=num[j];
        num[j]=temp;

    }
     
 }
    
}
console.log( "sorted order is \n");
for (let i =0;i < 3;i++) {

   console.log(`${num[i]}`);
    
}