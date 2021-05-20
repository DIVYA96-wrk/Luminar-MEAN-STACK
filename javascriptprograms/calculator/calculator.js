function displayBox(num){
varisplayBox=document.querySelector('#display')
    displayBox.value+=num;*/
    display.value+=num;

}

function evalvulateExpression(){
    var result=display.value
    let op=eval(result);
    alert(op);
    display.value=op;
}
 function cancelElement(){
     let curval=display.value;
     let result=curval.slice(0,-1);
     display.value=result
 }
 function clearBox(){
     display.value="";
 }