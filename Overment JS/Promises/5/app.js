// /Create own Promises

const promise = new Promise((resolve, reject) => {
setTimeout(()

)
    reject(new Error('Obietnica nie rozwiązana pomyślnie!'));
    
});

 promise
 .then(result => console.log(result))
 .catch(reason => console.log(reason));
 
