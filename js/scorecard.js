var Scorecard = function() {

  this.pinCount1 = null;
  this.pinCount2 = null;
  this.totalScore = null;

};

Scorecard.prototype.enterPins = function(changePinsBy) {
  if (changePinsBy > 10 || changePinsBy < 0) {
    return 'Please enter a valid number';
  }
  else if (this.pinCount1 === null) {
    this.pinCount1 += changePinsBy;
  }
  else {
    this.pinCount2 += changePinsBy;
  };
};

Scorecard.prototype.totalCalculator = function(pinCount1, pinCount2) {
  pinCount1 = pinCount1 || this.pinCount1;
  pinCount2 = pinCount2 || this.pinCount2;
  this.totalScore = pinCount1 + pinCount2;
};


