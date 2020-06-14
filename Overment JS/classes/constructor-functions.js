
//Wersja z funkcjami



function Media(type, name, author){
    //przypisanie wartości poszczególnych argumentów do słowa kluczowego this
    this.type = type;
    this.name = name;
    this.author = author;

//wywołanie funkcji z uzyciem słowa kluczowego new oraz przekazanie argumentów
    // const myBook = new Media('book', 'Way of the Peaceful Warrior', 'Dan Millman');
// console.log(myBook.getFullName());
}

//metoda któraj zadanie będzie zwrucenie nazwy i autora razem
Media.prototype.getFullName = function(){
    return `${this.name} (${this.author})`;
};

function Song(name, author){
Media.call(this, 'song', name, author);
}
Song.prototype = Object.create(Media.prototype);

const mySong = new Song('Arrival to Earth', 'Steve Jablonsky'); 
console.log(mySong.getFullName());




