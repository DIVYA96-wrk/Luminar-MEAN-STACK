class Parent{
    m1()
    {
        console.log("cat");
    }
}
class Child1 extends Parent{
    m2(){
        console.log("dog");
    }
}
class Child2 extends Child1{
    m3(){
        console.log("cow");
    }
}
var ch=new Child2()
ch.m3();
ch.m2();
ch.m1();
console.log("------");
 var ch2=new Child1();
 ch.m2();
 ch.m1();
 console.log("------");
 var ch3=new Parent();
 ch.m1();
 console.log("------");