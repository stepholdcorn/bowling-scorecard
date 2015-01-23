describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by default', function() {

    it('should not have a pin count', function() {
      expect(scorecard.pinCount1).toBe(null);
    });

    it('should not have a total score', function() {
      expect(scorecard.totalScore).toBe(null);
    });

    it('should not have any stored frame scores', function() {
      expect(scorecard.frameArray.length).toEqual(0);
    });

  });

  describe('pin count', function() {

    it('should be able to be inputted'), function() {
      scorecard.enterPins(4);
      expect(scorecard.pinCount1).toEqual(4);
    };

    it('should be between 0 and 10', function() {
      expect(scorecard.enterPins(-3)).toEqual('Please enter a valid number');
    });

    it('should not increase if number is not between 0 and 10', function() {
      scorecard.enterPins(12);
      expect(scorecard.pinCount1).toBe(null);
    });

    it('should be stored separately for each throw in a frame'), function() {
      scorecard.enterPins(4);
      scorecard.enterPins(3);
      expect(scorecard.pinCount1).toEqual(4);
      expect(scorecard.pinCount2).toEqual(3);
    };

  });

  describe('score', function() {

    it('should be the sum of the frame', function() {
      scorecard.totalCalculator(4, 3);
      expect(scorecard.totalScore).toEqual(7);
    });

    it('should be added to the frame array', function() {
      scorecard.totalCalculator(4, 3);
      expect(scorecard.frameArray[0]).toEqual(7);
    });

  });

});
