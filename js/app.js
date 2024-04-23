const app = {

    init: function() {
        console.log('app.init');
        map.init();
        snake.init();
        snake2.init();
        game.init();

        //modulePromise.init();
    }
}

document.addEventListener('DOMContentLoaded', app.init);