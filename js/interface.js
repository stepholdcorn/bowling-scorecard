$(function() {

  // SETUP
  var scorecard = new Scorecard ();
  var $newThrowForm = $('#newThrowForm');
  var $textInput = $('input:text');

  // ADD THROW SCORE
  $newThrowForm.on('submit', function(e) {
    e.preventDefault();
    var newNumber = $textInput.val();
    scorecard.enterPins(newNumber);
    $('li:last').after('<li>' + newNumber + '</li>');
    $textInput.val('');
  });

});



