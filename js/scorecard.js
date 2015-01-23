var Scorecard = function() {

  this.pinCount = 0;
  this.totalScore = 0;

};

Scorecard.prototype.enterPins = function(changePinsBy) {
  if (changePinsBy > 10 || changePinsBy < 0) {
    return 'Please enter a valid number';
  }
  else {
    this.pinCount += changePinsBy;
  };
};


