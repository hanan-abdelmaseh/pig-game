/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
/*
*/
// variables:
var scores, roundScore, activePlayer, gamePlaying;
init();
// to get the btns
var btnNew = document.querySelector('.btn-new');
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector('.btn-hold');


btnRoll.addEventListener('click', function() {
    if (gamePlaying) {
        // we will create random number for dice 
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);
        // display the result
        var diceImg1 = document.getElementById('dice-1');
        var diceImg2 = document.getElementById('dice-2');
        // display the img
        diceImg1.style.display = 'block';
        diceImg2.style.display = 'block';
        diceImg1.src = 'dice-' + dice1 + '.png';
        diceImg2.src = 'dice-' + dice2 + '.png';
        // update the results


        if (dice1 !== 1 || dice2 !== 1) {
            // add score
            var current = document.querySelector('#current-' + activePlayer);
            var initalScore = dice1 + dice2;
            roundScore += initalScore;
            current.textContent = roundScore;
        } else {
            // next player
            nextPlayer();

        }
    }
})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}
btnHold.addEventListener('click', function() {
    if (gamePlaying) {


        // update the score
        scores[activePlayer] += roundScore;
        // update  ui
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        var finalScore = document.getElementById('finalScore').value;

        if (scores[activePlayer] >= finalScore) {
            document.querySelector("#name-" + activePlayer).textContent = "winner!"
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            nextPlayer();
        }


    }

});
btnNew.addEventListener('click', function() {
    init();

});

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // at start img not display
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}
















































/*

//variables::
var scores, activePlayer, roundScore, gameActive;
gameActive = true;
init();
// activePlayer = 0;
// // this becouse i have 2 players
// scores = [0, 0];
// roundScore = 0;


// contol the score and the result at the begin:
// var score0 = document.getElementById("score-0");
//var score1 = document.getElementById("score-1");

// set their values to zero at begin :
//score0.textContent = 0;
//score1.textContent = 0;

// hide the image at first :
//document.getElementById("dice-1").style.display = "none";
//document.getElementById("dice-2").style.display = "none";
// control the btn :
var btnNew = document.querySelector('.btn-new');
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector('.btn-hold');

// the point is when i click on the button it create randon number
btnRoll.addEventListener('click', function() {
    if (gameActive) {

        // then this number show the same image =randon number
        //1- create random number i have 2 :
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);

        //2-now show the image
        var img1 = document.getElementById("dice-1");
        var img2 = document.getElementById("dice-2");

        // make the src of the image the same as random number
        img1.style.display = "block";
        img2.style.display = "block";
        img1.src = "dice-" + dice1 + ".png";
        img2.src = "dice-" + dice2 + ".png";
        //  control the score 
        if (dice1 !== 1 && dice2 !== 1) {

            roundScore += (dice1 + dice2);
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

    }

});

btnHold.addEventListener('click', function() {
    if (gameActive) {
        //  add current score 
        scores[activePlayer] += roundScore;
        //update ui
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //check if the current player is winner or not 
        var finalScore = document.getElementById('finalScore').value;


        if (scores[activePlayer] >= finalScore) {
            document.getElementById('name-' + activePlayer).textContent = "winner";
            //hide the img
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            //add winner class to the winner 
            document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
            gameActive = false;
        } else {
            //nextplayer
            nextPlayer();
        }


    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    // to control the active class 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // hide dice when second player start

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

btnNew.addEventListener('click', init)
    // this is th initalize function 
function init() {
    //to return all to the begin
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    // remove winner class from all + remove active 
    document.querySelector('.player-0-panel').classList.remove("winner");
    document.querySelector('.player-1-panel').classList.remove("winner");
    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-1-panel').classList.remove("active");
    // add active to the first player 
    document.querySelector('.player-0-panel').classList.add("active");
    // keep names as past 
    document.getElementById('name-0').textContent = "player 1";
    document.getElementById('name-1').textContent = "player 2";
}
*/