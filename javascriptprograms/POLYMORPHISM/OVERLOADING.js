//polymorphism means many forms or more than many  forms

//method overloading (same method name and differnet number of parameter)// BUT JAVASCRIPT DOESN'T SUPPORT OVERLOADING
  // FOR JAVASCRIPT RECENTLY IMPLEMENTED METHOD WILL BE WORK
//method overriding

// -------METHOD OVERLOADING------///

class Calculation{
         add(){
             console.log("no arg method");
         }
         add(num1){
             console.log("single arg method");
         }
         add(num1,num2){
             console.log("two arg method");
         }
}
//same method name different number of parameter
//execute recently implemented method

var calc=new Calculation
calc.add(10,20);
calc.add(10);
calc.add();
  
///---------METHOD OVERRIDING-----/////
