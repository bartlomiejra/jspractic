
//słowo kluczowe async sprawia że funkcja za każdym razem zwruci obietnice, dzieki temu możemy skorzystać z then
// async function foo(){
//     return 1;
// }

// foo().then(alert);



// słowo Await pozwala odczytywać wartośc obietnicy bez wykorzystywanie funkcji then
async function foo(){
  const promise = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('finished!'), 1000);
  });
console.log(promise);
}
foo();