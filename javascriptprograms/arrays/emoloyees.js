var employees=[[1000,"ram","developer",2,25000],[1001,"ravi","developer",2,20000],[1002,"raj","ANALYST",2,26000],[1003,"ras","developer",2,19000]]
var count=0;
for(let employee of employees){
    if (employee[2]=="developer"){
        count++;
    }
}
console.log(count);

