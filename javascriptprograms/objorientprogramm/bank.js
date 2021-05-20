class Bank{
    //method for creating account
    constructor(acno,minbal,actype)
    {
        this.acno=acno;
        this.bname="sbi";
        this.bal=minbal;
        this.ifcs_code='sbi12345';
        this.actype=actype;
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log(`your ${this.bname} account of number ${this.acno} has been credited with amount ${amount} aval bal:${this.bal}`);
    }

    withdraw(amount){
        if (amount<this.bal){
            this.bal-=amount
            console.log(`your ${this.bname} account ${this.acno} has been debited with ampount ${amount} aval bal:${this.bal}`);
        }
        else{
            console.log("transction has been cancelled ");
        }
    }
bankenq(){
    console.log("your avalaible balance ="+this.bal);

}
}
var obj1=new Bank(1000,5000,'savings')
var obj2=new Bank(1001,3000,'savings')
var obj3=new Bank(1002,10000,'current')
var obj4=new Bank(1000,15000,'savings')
//account details of savings account
 var users=[]
 users.push(obj1)
 users.push(obj2)
 users.push(obj3)
 users.push(obj4)
 obj1.deposit(100)
// to find the savings account holder details
var savingsaccount=users.filter(acc=>acc.actype=="savings")
console.log(savingsaccount);
//to sort the account holders according to their balance.
var sortingacc=users.sort((acc1,acc2)=>acc1.bal-acc2.bal)
console.log(sortingacc);  
//to find out the highest deposit account holder detail 
var highdepo=users.reduce((acc1,acc2)=>acc1.bal>acc2.bal?acc1:acc2)
console.log(highdepo);