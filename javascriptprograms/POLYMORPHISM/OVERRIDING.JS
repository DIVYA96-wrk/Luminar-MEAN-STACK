//METHOD OVERRIDING
//sdifferent class and same method signature
class Parent{
    phone(){
        console.log("note 10 pro");
    }
}

class Child extends Parent{
    phone(){
        super.phone()
        console.log("iphone 13");
        
    }
}
var ch=new Child;
ch.phone();