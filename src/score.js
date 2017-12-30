const Score = function(initScore,pointsToAdd){
    this.score = initScore;
    this.points = pointsToAdd;
};

Score.prototype.addPoints = function(){
    this.score += this.points;
    return this.score;
};