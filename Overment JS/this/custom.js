function fetchData() {
    console.log(this.title);
}

//Call
fetchData.call(article);


//Apply
fetchData.apply(article);

//Bind
let bound = fetchData(article);
bound();


