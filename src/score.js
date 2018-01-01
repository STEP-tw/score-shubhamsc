const Score = function(initScore,pointsToAdd){
    this.score = initScore;
    this.points = pointsToAdd;
};

Score.prototype.addPoints = function(){
    this.score += this.points;
};

Score.prototype.getScore = function(){
    return this.score;
}