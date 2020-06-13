function Media(type, name, author){
    this.type = type;
    this.name = name;
    this.author = author;
}

Media.prototype.getFullName = function(){
    return `${this.name} (${this.author})`;
};

function Song(name, author){
Media.call(this, 'song', name, author);
}
Song.prototype = Object.create(Media.prototype);

const mySong = new Song('Arrival to Earth', 'Steve Jablonsky'); 
console.log(mySong.getFullName());

// const myBook = new Media('book', 'Way of the Peaceful Warrior', 'Dan Millman');
// console.log(myBook.getFullName());