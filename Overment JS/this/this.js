'use strict';


function welcome() {
    console.log(`Hello ${this.name}`);

}

let users = [{
        name: 'Adam'
    },
    {
        name: 'Mike'
    }
];

// users.forEach(user => welcome.call(user));
welcome;
