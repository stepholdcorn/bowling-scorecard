describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by default', function() {

    it('should have a pin count of zero', function() {
      expect(scorecard.pinCount).toEqual(0);
    });

    it('should have a total score of zero', function() {
      expect(scorecard.totalScore).toEqual(0);
    });

  });

});
