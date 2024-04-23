const game = {
    init: function() {
        console.log('game.init');
        document.addEventListener('keydown', this.handleKeyDown);
    },
    handleKeyDown: function(event) {
        console.log('game.handleKeyDown');
        if(event.key === 'ArrowUp') {
            snake.state.direction = 'up';
        } else if(event.key === 'ArrowDown') {
            snake.state.direction = 'down';
        }
        else if(event.key === 'ArrowRight') {
            snake.state.direction = 'right';
        }
        else if(event.key === 'ArrowLeft') {
            snake.state.direction = 'left';
        }
    }
};