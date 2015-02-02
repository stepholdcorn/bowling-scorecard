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
  if (this.gameOver()) throw new Error ('The game is over');
  if (this.invalidEntry(changePinsBy)) throw new Error ('Please enter a valid number');
  if (this.pinCount1 === null) {
    this.pinCount1 += changePinsBy;
    this.strikeCheck();
  }
  else {
    this.pinCount2 += changePinsBy;
    this.spareCheck();
  };
};

Scorecard.prototype.gameOver = function() {
  return this.frameCount === 10;
};

Scorecard.prototype.invalidEntry = function(changePinsBy) {
  return changePinsBy > 10 || changePinsBy < 0 || this.pinCount1 + changePinsBy > 10;
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
  }
};

Scorecard.prototype.totalCalculator = function(frameArray) {
  this.frame();
  for (var i = 0; i < this.frameArray.length; i++) {
    this.totalScore += this.frameArray[i];
  };
};

Scorecard.prototype.frame = function(pinCount1, pinCount2) {
  this.frameCalculator(pinCount1, pinCount2);
  this.frameArray.push(this.frameScore);
  this.addBonuses();
  this.resetFrame();
  this.frameCheck();
};

Scorecard.prototype.frameCalculator = function(pinCount1, pinCount2) {
  if (this.hasStrikeBonus()) {
    this.frameScore = 2 * (this.pinCount1 + this.pinCount2);
  } else if (this.hasSpareBonus()) {
    this.frameScore = (2 * this.pinCount1) + this.pinCount2;
  } else {
    this.frameScore = this.pinCount1 + this.pinCount2;
  };
};

Scorecard.prototype.hasStrikeBonus = function() {
  return this.awardStrikeBonus === true;
}

Scorecard.prototype.hasSpareBonus = function(first_argument) {
  return this.awardSpareBonus === true;
};

Scorecard.prototype.addBonuses = function() {
  if (this.strike === true) {
    this.awardStrikeBonus = true;
  } else if (this.spare === true) {
    this.awardSpareBonus = true;
  } else {
    this.awardStrikeBonus = false;
    this.awardSpareBonus = false;
  };
};

Scorecard.prototype.resetFrame = function() {
  this.pinCount1 = this.pinCount2 = this.strike = this.spare = this.frameScore = this.totalScore = this.resetValue;
};

Scorecard.prototype.frameCheck = function() {
  if (this.frameCount === 9) this.lastFrame = true;
};

Scorecard.prototype.resetAll = function() {
  this.resetFrame();
  this.frameArray = [];
};



