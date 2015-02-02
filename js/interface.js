$(function() {

  // SETUP
  var scorecard = new Scorecard();
  var $message = $('#message');
  var $newThrowForm = $('#newThrowForm');
  var $textInput = $('input:text');
  var $reset = $('#reset');

  $message.show();

  // ADD THROW SCORE
  $newThrowForm.on('submit', function(e) {
    e.preventDefault();
    var newInput = $textInput.val();
    var newNumber = parseInt(newInput, 10);
    scorecard.enterPins(newNumber);
    $('li:last').after('<li>' + newInput + '</li>');
    $textInput.val('');
    updateTotal();
    messageDisplay();
  });

  // CHANGE ENTER PINS MESSAGE
  function messageDisplay() {
    if ($message.text() === 'First Throw') {
      $message.text('Second Throw');
    }
    else {
      $message.text('First Throw');
    };
  }

  // SHOW TOTAL SCORE AUTOMATICALLY
  function updateTotal() {
    if (scorecard.pinCount2 !== null) {
      scorecard.totalCalculator();
      $('h2').text(scorecard.totalScore);
    };
  }

  // RESET BUTTON
  $reset.on('click', function() {
    scorecard.resetAll();
    $('li:not(#first)').remove();
    $('h2').text('0');
  });

}());




