let movies = {
    'pirates': {
        title: 'Pirates of the Caribbean: Dead Man Tell No Tales',
        cast: []
    },
    'transformers':{
        title: 'Transformers: The lastKnight',
        cast: []
    }
};

function setCast(name, ...actors){
    actors.forEach((actor) => movies[name].cast.push(actor));
}


setCast('pirates', 'Johny Depp', 'javier Bardem', 'Kaya Scedelario');

setCast('transformers', 'Mark Wahlberg', 'Antony Hopking', 'Laura Haddock');
    
console.log(movies);