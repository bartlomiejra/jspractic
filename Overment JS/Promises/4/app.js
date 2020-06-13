// /Create own Promises

const thenable = {
    then: function(rosolved, rejected){
        rejected("Opps");
    }
};






const promise = Promise.resolve(Promise.reject(Error(`Obietnica odrzucona`)));
console.log(promise);