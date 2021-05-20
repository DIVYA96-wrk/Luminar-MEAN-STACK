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

    static withdraw(acno){
        let users=Bank.getAccountdetail();
        let amount=withdraw.value;
        console.log(amount);
        if(amount<users[acno]["balance"]){
            users[acno]["balance"]-=amount;
            alert(`your  account of number ${acno} has been debited with amount ${amount} aval bal:${users[acno]["balance"]}`)
        }
        else{
            alert("transaction has been cancelled")
        }

    }
 
    static login(){
        let accno=acc.value;
        let uname=use.value;
        let pwd=pass.value;
 
        let uss=Bank.authenticate(accno,uname,pwd);
 
        if (uss==1){
          // alert("login success");
          let users=Bank.withdraw(accno);
        }
 
        else if(uss ==0){
         alert("invalid username or password") 
        }
        else if(uss==-1){
            alert("invalid account number")
        }
 
     
 
    }
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 