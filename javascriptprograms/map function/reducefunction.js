//to get the sum of the array by using reduce function
var arr=[1,2,3,4,5];
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);

// to get least element using if condition in reduce function

var min=arr.reduce((num1,num2)=>{
    if(num1<num2)
    {
        return num1;
    }
    else{
        return num2;    }

})
console.log(min);

// to get least element using terminator operator in reduce function

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);

// finding highest salary from the eployye details

var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];

var highsal=employee.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1.salary:emp2.salary)
console.log(highsal);

//finding detail of employee having highest salary from the eployye details

var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];

var highsal=employee.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(highsal);
 // to get only name  and  salary from employee detail using reduce function

 var employee=[
    {eid:1000,ename:"ajay",salary:20000,desig:"developer"},
    {eid:1000,ename:"vjay",salary:21000,desig:"qa"},
    {eid:1000,ename:"jay",salary:26000,desig:"developer"},
    {eid:1000,ename:"djay",salary:27000,desig:"mrkt"}

];

var highsal=employee.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(highsal.ename+ " " +highsal.salary);