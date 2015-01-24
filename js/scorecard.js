var Scorecard = function() {

  this.pinCount1 = null;
  this.strike = false;
  this.awardStrikeBonus = false;
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
    this.strikeCheck();
  }
  else {
    this.pinCount2 += changePinsBy;
  };
};

Scorecard.prototype.strikeCheck = function() {
  if (this.pinCount1 === 10) {
    this.pinCount2 = 0;
    this.strike = true;
    }
  else {
    this.pinCount2 = this.resetValue;
  };
};

Scorecard.prototype.totalCalculator = function(frameArray) {
  frameArray = frameArray || this.frameArray;
  this.frameCalculator();
  for (var i = 0; i < frameArray.length; i++) {
    this.totalScore += frameArray[i];
  };
};

Scorecard.prototype.frameCalculator = function(pinCount1, pinCount2) {
  pinCount1 = pinCount1 || this.pinCount1;
  pinCount2 = pinCount2 || this.pinCount2;
  if (this.awardStrikeBonus === true) {
    this.frameScore = 2 * (pinCount1 + pinCount2);
  }
  else {
    this.frameScore = pinCount1 + pinCount2;
  };
  this.frameArray.push(this.frameScore);
  this.checkStrikeBonus();
  this.resetFrame();
};

Scorecard.prototype.checkStrikeBonus = function() {
  if (this.strike === true) {
    this.awardStrikeBonus = true;
  }
  else {
    this.awardStrikeBonus = false;
  };
};

Scorecard.prototype.resetFrame = function() {
  this.pinCount1 = this.resetValue;
  this.pinCount2 = this.resetValue;
  this.strike = this.resetValue;
  this.frameScore = this.resetValue;
  this.totalScore = this.resetValue;
};

Scorecard.prototype.resetAll = function() {
  this.resetFrame();
  this.frameArray = [];
};








