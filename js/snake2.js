const snake2 = {
    state: {
        direction: 'down',
        body: [
            {x: 9, y: 10},
            {x: 9, y: 9},
            {x: 9, y: 8},
            {x: 9, y: 7},
        ]
    },

    display: function() {
        // remove all snake
        const snakeElements = document.querySelectorAll('.snake2');
        snakeElements.forEach(function(snakeElement) {
            snakeElement.remove();
        });

        // display snake
        for(let i = 0; i < this.state.body.length; i++) {
            const currentCase = document.createElement('div');

            const nbCases = map.nbCases;
            const sizeMap = map.rootElement.offsetWidth;

            console.log(sizeMap, nbCases)

            const sizeCase = Number(sizeMap / nbCases);
            const positionX = this.state.body[i].x * sizeCase;
            const positionY = this.state.body[i].y * sizeCase;

            console.log(positionX, positionY)

            // position absolute
            currentCase.classList.add('snake2');
            currentCase.style.position = 'absolute';
            currentCase.style.left = "calc(" + positionX + "px)";
            currentCase.style.top = "calc(" + positionY + "px - 1px)";
            currentCase.style.width = sizeCase + 'px';
            currentCase.style.height = sizeCase + 'px';

            if(i === 0) {
                currentCase.style.backgroundColor = 'red';
            } else {
                currentCase.style.backgroundColor = 'white';
            }
            currentCase.style.boxSizing = 'border-box';
            currentCase.style.border = '1px solid red';
            
            currentCase.style.gridRowStart = this.state.body[i].y;
            currentCase.style.gridColumnStart = this.state.body[i].x;
            map.rootElement.appendChild(currentCase);
        }
    },

    deplace: function() {
        const newHead = {
            x: this.state.body[0].x,
            y: this.state.body[0].y
        };

        switch(this.state.direction) {
            case 'right':
                newHead.x++;
                break;
            case 'left':
                newHead.x--;
                break;
            case 'up':
                newHead.y--;
                break;
            case 'down':
                newHead.y++;
                break;
        }

        if(newHead.x < 0) newHead.x = map.nbCases - 1;
        if(newHead.x >= map.nbCases) newHead.x = 0;
        if(newHead.y < 0) newHead.y = map.nbCases - 1;
        if(newHead.y >= map.nbCases) newHead.y = 0;

        // insérer le nouvel élément de tête
        this.state.body.unshift(newHead);
        // supprimer le dernier élément de la queue
        this.state.body.pop();
    },

    update: function() {
        console.log('snake2.update');
        snake2.deplace();
        snake2.display();
    },

    init: function() {
        console.log('snake2.init');
        snake2.display();

        setInterval(snake2.update, 500);
    },
}