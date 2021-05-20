var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];
var empsort=employee.sort((emp1,emp2)=>emp1.salary-emp2.salary)
console.log(empsort);