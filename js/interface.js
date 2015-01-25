$(function() {

  // SETUP
  var scorecard = new Scorecard();
  var $newThrowForm = $('#newThrowForm');
  var $totalScoreDisplay = $('#totalScoreDisplay');
  var $textInput = $('input:text');

  // ADD THROW SCORE
  $newThrowForm.on('submit', function(e) {
    e.preventDefault();
    var newNumber = $textInput.val();
    var x = parseInt(newNumber, 10);
    scorecard.enterPins(x);
    $('li:last').after('<li>' + newNumber + '</li>');
    $textInput.val('');
  });

  // SHOW TOTAL SCORE
  $totalScoreDisplay.on('click', function() {
    scorecard.totalCalculator();
    $('h2').text(scorecard.totalScore);
  });

});



