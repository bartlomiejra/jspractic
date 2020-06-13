let playlist = ['Back in black', 'Highest in the room' , 'Bad bunny', 'Astts'];
let currentTrack = playlist[0];
// zmieniamy zmienne var na lat wtedy zmienna w pentli for tworzy nowy zakres 
for (let i = 0; i < playlist.length; i++){
    //global scope
    let currentTrack = playlist[i];
    console.log(`current: ${currentTrack}`);
}
console.log(`Featured track: ${currentTrack}`);
 // słowo kluczowe const tworzy zmienną która nie może być zmieniona jest to zmienna stała - jakkolwiek dziwnie by to nie brzmiało.
 