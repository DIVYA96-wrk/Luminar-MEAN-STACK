function populate(){
    let len=localStorage.length;
    let html_data=``
    for(let i=1;i<=len;i++){
        let book=JSON.parse(localStorage.getItem(localStorage.key(i)))
     html_data+=`<tr> <td> ${book.book_name} </td> <td>${book.author_name}</td> <td>${book.amount}`;
    
    
    }
    document.querySelector("#result").innerHTML=html_data;
}









function createBook(){
    let book_name=bookname.value;
    let author_name=author.value;
    let amount=price.value;
    let book={
        book_name:bookname.value,
        author_name:author.value,
        amount:price.value

    }
    localStorage.setItem(book_name,JSON.stringify(book));
    console.log(book);
    alert("book created successfully");

    let object=JSON.parse(localStorage.getItem(book_name));
    populate();
}

