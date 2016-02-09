function calculateScore(balls) {
	
	var score=0;
	for (var i=0; i<balls.length ; i++ ) {
		if(isStrike(balls[i])){
			score += (parseInt(balls[i+1]) + parseInt(balls[i+2]) + 10);
		}else{
			score += parseInt(balls[i]);
		}
	}
	
	return score;
}

function isStrike(ball){
	return ball === 'X';
}