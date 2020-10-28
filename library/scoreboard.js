let _makeScoreBoard = function(players) {

    let _makeLines = function() {
        let ticks = $('<div>').attr('id', 'ticks')
        for (let i = 30; i >= 0; i--) {
            ticks.append($('<div>').addClass('tick').append($('<p>').text(i)))
        }
        wrapper.append(ticks)
    }

    let wrapper = $('<div>').attr('id', 'points-table-wrapper')
    let container = $('<div>').addClass('score-flex-container');
    wrapper.append(container)
    $('#left-board').append($('<h5>').text('Scoreboard').addClass('gold')).append(wrapper);

    _makeLines();
}

