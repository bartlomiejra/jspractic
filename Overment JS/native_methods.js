//overment - Poznaj JavaScript - Operacje na tablicach


let playlist = ["25/8", "I'm the one", "Shape of You", "HUMBLE", "Swalla"];

// playlist.forEach((track, index) => console.log(`${index}: ${track}`));


//mapowanie tabllicy playlist tworzymy nową tablice lowerTracks każdy element tablicy będzie miał małe litery
let lowerTracks = playlist.map((track, index) => track.toLowerCase());
console.log( lowerTracks);




//filtrowanie do 3 elementów listy
let filteredTracks = playlist.filter((track, index) => index < 3);
console.log(filteredTracks);


// fukcja reduce liczy znaki, przyjmuje dwie wartości wartość czyli sume znaków poprzedniego wywołania fukcji oraz znaków bierzącego utworu, fukcja przyjmuje też drugi argument izt initial value i zostaje on uzyty w przypadku pierwszego wywołania w naszym przypadku jest to 0 i do niej dodajemy liczbe znaków z pozostałych utworów.
let charCount = playlist.reduce((count, track) => count += track.length, 0);
console.log(charCount);
 

    