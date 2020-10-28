


let _displayWinner = function(winner) {
    let trophyImage = $('<img>').attr('src', 'assets/images/trophy.png').width('140px').addClass('animated tada');
    let x = $('<div>').html('<br>End of Round<br> <h3>' + winner.name + '</h3>' + '<h5 class="txt-lightblue">Score: ' + winner.score + '</h5>').prepend(trophyImage);
    $('#winner-div').append(x);
}