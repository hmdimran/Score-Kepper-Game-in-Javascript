//Score Kepper Game Develop By Developer Imran 2019/06-may-2019

var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var reset = document.querySelector(".reset");

//all display Call here

var p1Display = document.querySelector(".p1Display");
var p2Display = document.querySelector(".p2Display");
var set_score_display = document.querySelector(".set_score_display");
var set_score = document.querySelector(".set_score");

// set_score_display.addEventListener("mouseover",function(){
// 	alert("hmmm hoiche");
// });

// all score veriable declear here

var p1Score = 0;
var p2Score = 0;
var setScore = 5;
var win_point;
var accept = false;
set_score_display.innerHTML = setScore;


player1.addEventListener("click",function(){
	if (!accept) {
		p1Score++;
		p1Display.innerHTML = p1Score;
		if (setScore === p1Score) {
			p1Display.classList.add("win");
			accept = true;
		}
	}
});


player2.addEventListener("click",function(){
	if (!accept) {
		p2Score++;
		p2Display.innerHTML = p2Score;
		if (setScore === p2Score) {
			p2Display.classList.add("win");
			accept = true;
		}
	}
});



reset.addEventListener("click",function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.innerHTML = p1Score;
	p2Display.innerHTML = p2Score;
	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
	accept = false;

});

set_score.addEventListener("change",function(){
	win_point = set_score.value;
	setScore  = Number(win_point);
	set_score_display.innerHTML = setScore;
	// alert("hmmm");
})