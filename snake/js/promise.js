const modulePromise = {

    /* JUSTE POUR LE FONCTIONNEMENT => FETCH FONCTIONNE COMME CA */
    promiseSetTimeOut: function(timeout, message) {
        console.log('promiseSetTimeOut');

        // résolve : requête résolue => tout se passe bien
        // reject : requête échouée (problème réseau, problème bdd down etc.) => ça fonctionne un peu comme un throw 

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
            const result1 = await modulePromise.promiseSetTimeOut(2000, "[ASYNC/AWAIT] - Faire mes courses");
            console.log(result1);
            const result2 = await modulePromise.promiseSetTimeOut(3000);
            console.log(result2);
            const result3 = await modulePromise.promiseSetTimeOut(5000, "[ASYNC/AWAIT] - Dernière tâche");
            console.log(result3);
        } catch(error) {
            // en cas de reject
            console.log(`[ASYNC/AWAIT] - Erreur déclenchée suite à un reject`)
            console.log(error);
        }
    },

    methodThen: function() {
        // test setTimeOut
        modulePromise.promiseSetTimeOut(2000, "[THEN] - Faire mes courses").then((result) => {
            // Lorque tu auras la réponse (plus tard) de ce fetch, execute moi ce bloc là
            // Uniquement si la promesse a renvoyée ? resolve
            console.log(result);
            return modulePromise.promiseSetTimeOut(3000);
        }).then((result) => {
            console.log(result);
            return modulePromise.promiseSetTimeOut(5000);
        }).catch((error) => {
            // catch permet de capturer l'évènement reject (perte de réseau, etc.)
            console.log(`[THEN] - Erreur déclenchée suite au then`)
            console.log(error);
        });
    },

    init: function() {
        console.log('modulePromise.init');
        //modulePromise.methodThen();
        modulePromise.methodAsyncAwait();
    }
}