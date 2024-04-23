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

    methodAsyncAwait: async function() {
        try {
            const result1 = await modulePromise.promiseSetTimeOut(2000, "Faire mes courses");
            console.log(result1);
            const result2 = await modulePromise.promiseSetTimeOut(3000, "Faire la vaisselle");
            console.log(result2);
            const result3 = await modulePromise.promiseSetTimeOut(5000);
            console.log(result3);
        } catch(error) {
            console.log(error);
        }
    },

    methodThen: function() {
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
    },

    init: function() {
        console.log('modulePromise.init');
        modulePromise.methodThen();
        modulePromise.methodAsyncAwait();
    }
}