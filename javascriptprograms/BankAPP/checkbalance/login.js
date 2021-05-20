class Bank{
    static getAccountdetail(){
     var users={
         1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
         1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
         1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
         1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
     }
 
     return users;
     
    }
 
    static authenticate(acno,username,password){
        let user=Bank.getAccountdetail()
        if(acno in user)
        {
            if(username==user[acno]["username"] & password==user[acno]["password"]){
                return 1;
            }
 
            else{
                return 0;
            }
        }
        else{
            return -1;
        }
    }
 
    static login(){
        let accno=acc.value;
        let uname=use.value;
        let pwd=pass.value;
 
        let uss=Bank.authenticate(accno,uname,pwd);
 
        if (uss==1){
          // alert("login success");
          window.location.href="BANKcheckba.html"
        }
 
        else if(uss ==0){
         alert("invalid username or password") 
        }
        else if(uss==-1){
            alert("invalid account number")
        }
 
     
 
    }
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*var acno=1000;
 var username="userone";
 var password="userone";
 /*function login(acno,username,password)
 {
 
     if (acno in users){
            let uname=users[acno]["username"]
            let pwd=users[acno]["password"]
            if(uname==username & pwd==password)
            {
                console.log(users[acno]["balance"]);
            }
             else{
                console.log("invalid username or password");}}
     
     else{
         console.log("invalid user");
     }
 }
 login(acno,username,password); */





/*var users={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}

var acno=1000;
var username="userone"
var password="userone"



function login(acno,username,password)
{
    
    if (acno in users){
           let uname=users[acno]["username"]
           let pwd=users[acno]["password"]
           if(uname==username & pwd==password)
           {
              console.log("login success") ;
           }
            else{
               console.log("invalid username or password");;}}
    
    else{
        console.log("invalid ");
    }
}
login(acno,username,password); */



/*class Bank{
   static getAccountDetails(){
        let users={
            1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
            1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
            1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
            1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}

    }
    return users
}
 static authenticate(acno,username,password){
     let users=Bank.getAccountDetails()
     if (acno in users) {
         if(username==users[acno])

     }
 } */

