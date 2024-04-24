console.log('intro async')

// Instruction 1
setTimeout(function() {
    console.log('[INTROJS] - Faire la vaisselle')
}, 5000);

// Instruction 2
setTimeout(function() {
    console.log('[INTROJS] - Faire les courses')
}, 2000);


// Combiner l'instruction 2 à l'intérieur de l'instruction 1
setTimeout(function() {
    console.log('[INTROJS] - Faire une todo 1')
    setTimeout(function() {
        console.log('[INTROJS] - Faire une todo 2')
        setTimeout(function() {
            console.log('[INTROJS] - Faire une todo 3')
            setTimeout(function() {
                console.log('[INTROJS] - Faire une todo 4')
                setTimeout(function() {
                    console.log('[INTROJS] - Faire une todo 5')
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 5000);
