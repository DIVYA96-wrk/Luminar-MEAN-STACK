//using filter to find the even number in the array
var arr=[1,2,3,4,5]
var  even=arr.filter(num=>num%2==0)
console.log(even); 


//using filter to find employee having salaryt greater than 25000
var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];
var  sal=employee.filter(emp=>emp.salary>25000)
console.log(sal);
var  nam=employee.filter(emp=>emp.desig=="developer")
console.log(nam);


//using filter to find only employee name and salary having salaryt greater than 25000 using filter and for loop
var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];
var  sal=employee.filter(emp=>emp.salary>25000)
for (emp of sal)
{
    console.log(emp.ename+","+emp.salary);
}

////using filter to find only employee name and salary having salaryt greater than 25000 using filter and map function
var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];
var  sal=employee.filter(emp=>emp.salary>25000).map(emp=>emp.ename,emp.salary)
console.log(sal);