// Get DOM Elements
var randomNumber = $("#random-number");
var win = $("#win");
var looses = $("#losses");
var userScore = $("#user-score");
var imgCristalUrl = "./assets/images/cristal-0";
var extension = '.png';
var cristalImages = '',
    i;
var imagestring = imgCristalUrl;
var cValue;
var result = [];
var sum;
var looseScore;
var totalNumber;
var count = 0;
var countWin = 0;
var countLoose = 0;
var classCristal = 'cristals';

//1- Start game
init();

// 2- Generate Random number to match between 19 - 120
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 3 - Generate crystals
function generateCristal() {
    for (i = 1; i < 5; i++) {
        cristalImages = '<img src=' + imagestring + i + extension + ' value = ' + generateNumber(1, 12) + ' id = ' + classCristal + '>';
        $('#cristals').append(cristalImages);
        console.log(cristalImages);
    };

    // 4 - Attached on click event on crystal images		
    $("img").on("click", function() {
        cValue = $(this).attr('value');
        result.push(cValue);
        scoreUser(result);

        //5 - Calculate user's score
        //Everytime you user's click sum values
        function scoreUser(result) {
            for (i = 1, sum = 0; i < result.length; sum += result[i++]);
            totalNumber = eval(result.join("+"));
            userScore.text(totalNumber);
            //6 - Create validation if user's click is equal to randon number
            if (totalNumber == numberGuess) {
                var scorewin;
                scorewin = true;
                scoreGame(scorewin);
                //7-Call function to reset the game and start a new one
            } else if (totalNumber > numberGuess) {
                scorewin = false;
                scoreGame(scorewin);
                resetGame();
            }
        }
    });
};

//8-Call function to flash element if user wins
function flashIt(element, times, klass, delay) {
    for (var i = 0; i < times; i++) {
        setTimeout(function() {
            $(element).toggleClass(klass);
        }, delay + (300 * i));
    };
};

//9- Call funnction if user win
function scoreClass(scorewin) {
    if (scorewin === true) {
        flashIt('#user-score', 10, 'i_flash2', 500);
    } else if (scorewin === false) {}
}
//10-Calculate user's score
function scoreGame(scorewin) {
    if (scorewin === true) {
        scoreClass(scorewin);
        countWin = +countWin + 1;
        win.text("Win: " + countWin);
        //resetGame();
    } else if (scorewin === false) {
        countLoose = +countLoose + 1;
        looses.text("Looses: " + countLoose);
        $('.game').removeClass("win-class");
    }
}

//11-Reset elements after calculating score
function resetGame() {
    result = [];
    $('#cristals').text('');
    var winScore;
    randomNumber.text('');
    totalNumber = '';
    userScore.text(totalNumber);
    init();
}

//12- Initialize game function
function init() {
    generateCristal();
    numberGuess = generateNumber(1, 15);
    randomNumber.text(numberGuess);
}
//13- If page is loaded for the first time show game instructions
$(document).ready(function() {
    if (localStorage.getItem('popState') != 'shown') {
        $(".instructions").slideDown("slow").delay(1000).fadeIn();
        localStorage.setItem('popState', 'shown')
        $("#game-container").css("opacity", "0");
        $("#button-start").on("click", function() {
            $(".instructions").fadeOut("slow");
            $("#game-container").slideUp("slows").fadeIn("slow").delay(9000).css("opacity", "0.9");
        });
    }

});