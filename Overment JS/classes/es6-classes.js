class Media {
    constructor(type, name, author) {
        this.type = type;
        this.name = name;
        this.author = author;
    }

    getFullName() {
        return `${this.name} (${this.author})`;  
    }
      }
    

      class Song extends Media {
          constructor(name, author){
              super('song', name, author)
          }
      }

      const song = new Song ('Arrival to Earth', 'Steve Jablonsky');
      console.log(song.getFullName());
