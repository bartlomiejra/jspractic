// // /Create own Promises

// const p = new Promise((resolve, reject) => {
//  resolve(5); 
// });

// //  p.then(result => result * 2)
//  p.then(result => data)
// //  .then(result => Promise.reject(Error("Błąd")))
// //  .then(result => new Promise((resolve, reject) => resolve(15)));
//  .then(result => console.log(result))
//  .catch(reason => console.log(reason))
//  .finally(() => console.log('Akcja Zakończona'));


const movies = [ { id:1, category_id:1, titkle: "Alita: Battle Angle"}];
const categories = [ { id: 1, name: "sci-fi"}];

//movie_id
function fetchMovie(id){
    return new Promise((resolve,reject) => {
        const movie = movie.find(,pvoe => movie.id=== id);
        movie ? resolve(movie) : reject(Error(`No movie was found`));
    });
}

function populateCategory(movie){
    return new Promise((resolve, reject) => {
        const category = categories.find(category => category.id === movie.category.id)
        if (category) {
            movie.category= category;
            resolve(movie);
        }
        reject(Error(`No category was found`));
    });
}


fetchMovie(1)
.then(movie => populateCategory(movie))
.then(resolt => console.log(result))
.catch(reason => console.log(reason));
