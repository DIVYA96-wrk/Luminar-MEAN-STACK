var array=[2,4,3,5]; num=6,i=0
array.sort((i,j)=>i-j);
let low=0,upp=array.length-1;
while(low<upp)//                                    0<4 |     1<3 |
{
    if(array[low]+array[upp]==num) //              1+5=6 |  2+4=6  |
    {
        console.log(array[low],array[upp]); //     1,5   |  2,4    |
        low++;  //                              low=1    |  low=2
        upp--;//                                upp=3    |  upp=2  |
    
    }
    else if(array[low]+array[upp]<num)
    {
        low++;
    }
    else {
        upp--;
    }
}



