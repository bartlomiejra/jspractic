  () => { /*..*/}; //no parameter
  x => { /*..*/}; //one parameter, and identifier
  (x, y) => { /*...*/}; //several parameters


  x => {return x * x}; // block
  x => x * x; // expression, equvalent to previous line 




  function Playlist(name){
      this.name = name;
  }

  Playlist.prototype.play = function (songs) {
    //   console.log(this.name); //Europe 
    // let self = this;
      //this wskazuje na obiekt window dlatego że this nie zalezy od tego w którym miejscu została wywołana finkcja lecz w jaki sposób ją wywołano - w tym przypadku colback nie jest jednoznacznie określony.
      return songs.map((song) =>  {
          console.log(this); //Global object - window
          return "Playing: " + this.name + ' - ' + song.title;

      }) ;
  };

  let myPlaylist = new Playlist('Europe');
  console.log(myPlaylist.play([{title: 'Carrie'},{title: 'Final countdown'}]));