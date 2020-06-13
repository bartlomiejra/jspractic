class Article {
constructor(title){
    this.title = title;
}


getTitle(){
    console.log(this);
}
}

let book = new Article('the wither');
book.getTitle();