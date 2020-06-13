// /Czym jest Promise? Asynchroniczny JavaScript #1/7 | overment
// const arr = [1,2,3]
// arr.forEach(element => { console.log(element)});
// console.log('Finished.');


const iTunesPromise = axios.get('https://itunes.apple.com/search?term=alita battle angel&media=music');
console.log(iTunes);


iTunesPromise.then(response => console.log(response.data));