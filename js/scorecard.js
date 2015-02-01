var Scorecard = function() {

  this.pinCount1 = null;
  this.strike = false;
  this.awardStrikeBonus = false;
  this.pinCount2 = null;
  this.spare = false;
  this.awardSpareBonus = false;
  this.frameScore = null;
  this.frameArray = [];
  this.frameCount = this.frameArray.length;
  this.lastFrame = false;
  this.totalScore = null;
  this.resetValue = null;

};

Scorecard.prototype.enterPins = function(changePinsBy) {
  if (this.frameCount === 10) throw new Error ('The game is over');
  if (changePinsBy > 10 || changePinsBy < 0) throw new Error ('Please enter a valid number');
  if (this.pinCount1 === null) {
    this.pinCount1 += changePinsBy;
    this.strikeCheck();
  }
  else if (this.pinCount1 + changePinsBy < 11) {
    this.pinCount2 += changePinsBy;
    this.spareCheck();
  }
  else {
    throw new Error ('Please enter a valid number');
  };
};

Scorecard.prototype.strikeCheck = function() {
  if (this.pinCount1 === 10) {
    this.pinCount2 = 0;
    this.strike = true;
  }
};

Scorecard.prototype.spareCheck = function() {
  if (this.pinCount1 + this.pinCount2 === 10) {
    this.spare = true;
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
  else if (this.awardSpareBonus === true) {
    this.frameScore = (2 * pinCount1) + pinCount2;
  }
  else {
    this.frameScore = pinCount1 + pinCount2;
  };
  this.frameArray.push(this.frameScore);
  this.checkBonuses();
  this.resetFrame();
  this.gameCheck();
};

Scorecard.prototype.checkBonuses = function() {
  if (this.strike === true) {
    this.awardStrikeBonus = true;
  }
  else if (this.spare === true) {
    this.awardSpareBonus = true;
  }
  else {
    this.awardStrikeBonus = false;
    this.awardSpareBonus = false;
  };
};

Scorecard.prototype.resetFrame = function() {
  this.pinCount1 = this.resetValue;
  this.pinCount2 = this.resetValue;
  this.strike = this.resetValue;
  this.spare = this.resetValue;
  this.frameScore = this.resetValue;
  this.totalScore = this.resetValue;
};

Scorecard.prototype.gameCheck = function() {
  if (this.frameCount === 9) this.lastFrame = true;
};

Scorecard.prototype.resetAll = function() {
  this.resetFrame();
  this.frameArray = [];
};








