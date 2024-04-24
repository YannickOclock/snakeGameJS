const map = {
    rootElement: null,
    nbCases: 25,

    createCases: function() {
        for (let i = 0; i < this.nbCases; i++) {
            for(let j = 0; j < this.nbCases; j++) {
                const currentCase = document.createElement('div');
                currentCase.classList.add('case');
                currentCase.style.width = 'calc(100% / ' + this.nbCases + ')';
                currentCase.style.height = 'calc(100% / ' + this.nbCases + ')';
                map.rootElement.appendChild(currentCase);
            }
        }   
    },

    display: function() {
        console.log('map.display');
        map.createCases();
    },

    init: function() {
        console.log('map init');
        map.rootElement = document.getElementById('snake');
        map.display();
    }
}