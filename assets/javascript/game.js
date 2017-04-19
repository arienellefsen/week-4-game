//1 - Get DOM Elements
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
var count=0;
var countWin=0;
var countLoose = 0;


// 2- Generate Random number to match between 19 - 120
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// 3 - Generate cristal
function generateCristal() {
    
    for (i = 1; i < 5; i++) {
        cristalImages = '<img src=' + imagestring + i + extension + ' value = ' + generateNumber(1, 12) + ' id = ' + i + '>';
        $('#cristals').append(cristalImages);
        console.log(cristalImages);
    };
    // 4 - Attached on click event on cristal		
    $("img").on("click", function() {
        cValue = $(this).attr('value');
        result.push(cValue);
        console.log(sum += result);
        scoreUser(result);

        //5 - Calculate user's score
        //Everytime you user's click sum values
        function scoreUser(result) {
            for (i = 1, sum = 0; i < result.length; sum += result[i++]);
            console.log(eval(result.join("+")));
            totalNumber = eval(result.join("+"));
            userScore.text(totalNumber);

            //6 - Create validation if user's click is equal to randon number
            if (totalNumber == numberGuess) {
               var scorewin;
               	scorewin = true;
               
               	scoreGame(scorewin);
               	

                //gameScore(score);
                //win.text("Win:" + winScore++);
                resetGame();

                //7-Call fucntion to reset the game and start a new one

            } else if (totalNumber > numberGuess) {
             scorewin = false;
             	scoreGame(scorewin);
             resetGame();

            }
        }
    });
};

function scoreGame(scorewin){
 
	if(scorewin === true){

		
	  countWin =+ countWin +1;
	  win.text("Win: " + countWin);
	  console.log("My win score: " +countWin);

	}else if (scorewin === false){
		countLoose =+ countLoose +1;
		looses.text("Looses: " +countLoose);
	    console.log("My looses score: " +countLoose);
	}
}

function resetGame() {
    totalNumber = '';
    userScore.text(totalNumber);
    result = [];
    $('#cristals').text('');
    var winScore;
    randomNumber.text('');
    init();
}

//Need to clean old cristals
//Need to display new randon number - ok
function init() {
    generateCristal();
    numberGuess = generateNumber(1, 15);
    randomNumber.text(numberGuess);
    console.log("NumberGuess init: " +numberGuess );
    console.log("totalNumber init: " +totalNumber);
//gameScore();
}

init();