

// const promise = Promise.resolve(Promise.reject(Error(`Ooops`)));
// console.log(promise);






// function fetchUser(id){
//     //localstorage | server
//     const user = localStorage.getItem(`user-${id}`);



// return user 
// ? Promise.resolve(user)
// : user.find.(user => {
//     localStorage.setItem(`user-${id}`, user);
//     return user;
// });
// }
// fetchUser(id).then();




// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() =>resolve(1), 5000)),
//     new Promise((resolve, reject) => setTimeout(() =>reject(Error('Ops')), 2000)),
//     new Promise((resolve, reject) => setTimeout(() =>resolve(3), 1000))
// ]).then(response => {
//     console.log(response);
// }).catch(err => console.log(err));

const names = ["apple", "microsoft"];
const requests = names.map(name => 
    axios.get(`http://api.github.com/user/${name}`)
    );

    Promise.all(requests)
    .then(data => data.map(user => user.data))
    .then(user.forEach(user => console.log(user.login)))
    .catch(alert);


// działa podobnie do all ale wynik jest wynikiem obietnicy która wykona się najszybciej pierwsza doeibgnie na mete - wyścig 
    Promise.race([
            new Promise((resolve, reject) => setTimeout(() =>resolve(1), 5000)),
            new Promise((resolve, reject) => setTimeout(() =>reject(Error('Ops')), 2000)),
            new Promise((resolve, reject) => setTimeout(() =>resolve(3), 1000))
        ]).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    






// const thenable = {
//     then: function(rosolved, rejected){
//         rejected("Opps");
//     }
// };






// const promise = Promise.resolve(Promise.reject(Error(`Obietnica odrzucona`)));
// console.log(promise);