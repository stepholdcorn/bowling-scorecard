$(function() {

  // SETUP
  var scorecard = new Scorecard();
  var $message = $('#message');
  var $newThrowForm = $('#newThrowForm');
  var $totalScoreDisplay = $('#totalScoreDisplay');
  var $textInput = $('input:text');

  $message.show();
  // ADD THROW SCORE
  $newThrowForm.on('submit', function(e) {
    e.preventDefault();
    var newInput = $textInput.val();
    var newNumber = parseInt(newInput, 10);
    scorecard.enterPins(newNumber);
    $('li:last').after('<li>' + newInput + '</li>');
    $textInput.val('');
    messageCheck();
  });

  // CHANGE ENTER PINS MESSAGE
  function messageCheck() {
    if($message.text() === 'First Throw') {
      $message.text('Second Throw');
    }
    else {
      $message.text('First Throw');
    };
  }

  // SHOW TOTAL SCORE
  $totalScoreDisplay.on('click', function() {
    scorecard.totalCalculator();
    $('h2').text(scorecard.totalScore);
  });

});




