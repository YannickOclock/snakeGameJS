const modulePromise = {

    promiseSetTimeOut: function(timeout, message) {
        console.log('promiseSetTimeOut');
        const promise = new Promise((resolve, reject) => {
            if(!message) reject('Il manque un message');
            setTimeout(() => {
                resolve(message);
            }, timeout);
        });
        return promise;
    },

    init: function() {
        // test setTimeOut
        modulePromise.promiseSetTimeOut(2000, "Faire mes courses").then((result) => {
            console.log(result);
            return modulePromise.promiseSetTimeOut(3000, "Faire la vaisselle");
        }).then((result) => {
            console.log(result);
            return modulePromise.promiseSetTimeOut(5000);
        }).catch((error) => {
            console.log(error);
        });
    }
}