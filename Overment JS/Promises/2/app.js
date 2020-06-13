function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener("load", event => resolve(img));
      img.addEventListener("error", reason => reject(new Error(`Failed to load ${url}`)));
      img.src = url;
    });
  }
  
  loadImageAsync("http://thecatapi.com/api/images/get?format=src&type=jpg&size=small")
    .then(img => document.querySelector('.image').appendChild(img))
    .catch(reason => console.log(reason));

// // /Create own Promises

// const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve("overment");
// }, 2000);
// });


//     //  reject(new Error('Obietnica nie rozwiązana pomyślnie!'));
    


//  promise
//  .then(result => console.log(result))
//  .catch(reason => console.log(reason));
 
