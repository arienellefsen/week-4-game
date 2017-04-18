//1 - Get DOM Elements
var randomNumber = $("#random-number");
var win = $("#win");
var looses = $("#looses");
var cristal1 = $("#cristal-01");
var cristal2 = $("#cristal-02");
var cristal3 = $("#cristal-03");
var cristal4 = $("#cristal-04");
var userScore = $("#user-score");
var cristal01 = $("#cristal01");
var imgCristalUrl = "./assets/images/cristal-0";
var extension = '.png';
var cristalImages = '', i;
var imagestring = imgCristalUrl;


// 2- Generate Random number to match between 19 - 120
function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
randomNumber.text(generateNumber(19,120));

// 3 - Generate cristal
function generateCristal(){	
debugger;
	  for(i=1; i < 5; i++) {
		cristalImages ='<img src='+imagestring+i+extension+' value = '+generateNumber(1, 12)+' id = '+i+'>';
 		$('#cristals').append(cristalImages);
		console.log(cristalImages);
		};

		$(this).on( "click", function() {
  		alert($("img").attr( "src" ) );
});
};

function notify(cristalImages){
	alert("Click" + cristalImages.text);
}


	




generateCristal();



