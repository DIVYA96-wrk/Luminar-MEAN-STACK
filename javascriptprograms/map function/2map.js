var employee=[
    {eid:1000,ename:"ajay",salary:20000},
    {eid:1000,ename:"vjay",salary:21000},
    {eid:1000,ename:"jay",salary:22000},
    {eid:1000,ename:"djay",salary:25000}

];
//using for loop//

/*for (let emp of employee)
{
   console.log(emp.ename);
} */

// using map function//


var names=employee.map(emp=>emp.ename)
console.log(names);
// to make to upper case
var names=employee.map(emp=>emp.ename.toUpperCase())
console.log(names);

var salar=employee.map(emp=>emp.salary)
console.log(salar);
