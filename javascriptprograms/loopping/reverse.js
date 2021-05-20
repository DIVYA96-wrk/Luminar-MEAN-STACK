var num=501,i,res=0;

while (num!=0) {
    i=num%10;
    
    res=res*10+i;
    num=Math.floor(num/10);
    
}
console.log(res);