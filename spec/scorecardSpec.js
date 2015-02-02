describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by default', function() {

    it('should not have a pin count', function() {
      expect(scorecard.pinCount1).toBe(null);
    });

    it('should not have a frame score', function() {
      expect(scorecard.frameScore).toBe(null);
    });

    it('should not have any stored frame scores', function() {
      expect(scorecard.frameArray.length).toEqual(0);
    });

    it('should not have a total score', function() {
      expect(scorecard.totalScore).toBe(null);
    });

  });

  describe('Pin count', function() {

    it('should be able to be inputted', function() {
      scorecard.enterPins(4);
      expect(scorecard.pinCount1).toEqual(4);
    });

    it('should be between 0 and 10', function() {
      expect(function() { scorecard.enterPins(-3) }).toThrow(new Error ('Please enter a valid number'));
    });

    it('total should not be more than 10', function() {
      scorecard.enterPins(2);
      expect(function() { scorecard.enterPins(9) }).toThrow(new Error ('Please enter a valid number'));
    });

    it('should be stored separately for each throw in a frame', function() {
      scorecard.enterPins(4);
      scorecard.enterPins(3);
      expect(scorecard.pinCount1).toEqual(4);
      expect(scorecard.pinCount2).toEqual(3);
    });

    it('should be reset at the end of the frame', function() {
      scorecard.enterPins(4);
      scorecard.enterPins(3);
      scorecard.frame(4, 3);
      expect(scorecard.pinCount1).toBe(null);
      expect(scorecard.pinCount2).toBe(null);
    });

  });

  describe('strike', function() {

    it('second throw should be zero', function() {
      scorecard.enterPins(10);
      expect(scorecard.pinCount2).toEqual(0);
    });

    it('should add a bonus to the running total', function() {
      scorecard.enterPins(10);
      scorecard.totalCalculator();
      scorecard.enterPins(3);
      scorecard.enterPins(4);
      scorecard.totalCalculator();
      expect(scorecard.totalScore).toEqual(24);
    });

  });

  describe('spare', function() {

    it('should add a bonus to the running total', function() {
      scorecard.enterPins(2);
      scorecard.enterPins(8);
      scorecard.totalCalculator();
      scorecard.enterPins(4);
      scorecard.enterPins(3);
      scorecard.totalCalculator();
      expect(scorecard.totalScore).toEqual(21);
    });

  });

  describe('frame score', function() {

    it('should be added to the frame array', function() {
      scorecard.enterPins(3);
      scorecard.enterPins(4);
      scorecard.frame();
      expect(scorecard.frameArray[0]).toEqual(7);
    });

    it('should be reset at the end of the frame', function() {
      scorecard.frame(4, 3);
      expect(scorecard.frameScore).toBe(null);
    });

    it('should be able to reset the stored values at the end of the game', function() {
      scorecard.frame(4, 3);
      scorecard.resetAll();
      expect(scorecard.frameCount).toEqual(0);
    });

  });

  describe('total score', function() {

    it('should be the running total', function() {
      scorecard.enterPins(3);
      scorecard.enterPins(4);
      scorecard.totalCalculator();
      scorecard.enterPins(10);
      scorecard.totalCalculator();
      expect(scorecard.totalScore).toEqual(17);
    });

    it('should be able to be reset', function() {
      scorecard.totalCalculator([8,9]);
      scorecard.resetAll();
      expect(scorecard.totalScore).toEqual(null);
    });

  });

  describe('tenth frame', function() {
    it('signals the last frame of the game', function() {
      scorecard.frameCount = 9;
      scorecard.frameCheck();
      expect(scorecard.lastFrame).toBe(true);
    });

    it('prevents the player from starting an eleventh frame', function() {
      scorecard.frameCount = 10;
      expect(function() { scorecard.enterPins(4) }).toThrow(new Error ('The game is over'));
    });

  });

});
