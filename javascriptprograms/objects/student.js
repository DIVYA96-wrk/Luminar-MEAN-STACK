var student={
    rol:100, name:"vinu", course:"bca", total:100

}

console.log(student["name"]);
console.log("grade"in student);
student["grade"]="b plus";
student["total"]+=50
console.log(student);



for(let key in student){
    console.log(key);
    console.log(student[key]);
}
