var Scorecard = function() {

  this.pinCount1 = null;
  this.pinCount2 = null;
  this.frameScore = null;
  this.frameArray = [];
  this.totalScore = null;
  this.resetValue = null;

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

Scorecard.prototype.frameCalculator = function(pinCount1, pinCount2) {
  pinCount1 = pinCount1 || this.pinCount1;
  pinCount2 = pinCount2 || this.pinCount2;
  this.frameScore = pinCount1 + pinCount2;
  this.frameArray.push(this.frameScore);
  this.pinCount1 = this.resetValue;
  this.pinCount2 = this.resetValue;
  this.frameScore = this.resetValue;
};

Scorecard.prototype.totalCalculator = function(frameArray) {
  frameArray = frameArray || this.frameArray;
  this.totalScore = this.resetValue;
  for (var i = 0; i < frameArray.length; i++) {
    this.totalScore += frameArray[i];
  };
};

Scorecard.prototype.resetAll = function() {
  this.pinCount1 = this.resetValue;
  this.pinCount2 = this.resetValue;
  this.frameScore = this.resetValue;
  this.frameArray = [];
  this.totalScore = this.resetValue;
};








