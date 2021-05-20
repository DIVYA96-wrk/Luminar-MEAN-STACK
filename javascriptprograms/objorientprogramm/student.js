class Employee{
    constructor(id,name,salary,designation)
    {
        //intializing employee objects roll,no ,name...
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.designation=designation;

    }
    printEmp(){
        console.log(   `ID = ${this.id}` );
        console.log(   `Name = ${this.name}` );
        console.log(   `Salary = ${this.salary}` );
        console.log(   `Designation = ${this.designation}` );

    }
}
//objects
//refeerence=new classname()

var obj1=new Employee(1001,"jay",2000,"software trainee")
obj1.printEmp()

