var Scorecard = function() {

  this.pinCount = 0;
  this.totalScore = 0;

};

Scorecard.prototype.enterPins = function(changePinsBy) {
  this.pinCount += changePinsBy;
};


