var scorecard = new Scorecard ();

$(document).ready(function(){

  $('#first-throw').click(function() {
    var pins1 = $("input[name=pins1]").val();
      scorecard.enterPins(pins1);
      $('.score').append("<p>"+pins1+"</p>");
  });

  $('#second-throw').click(function() {
    var pins2 = $("input[name=pins2]").val();
      scorecard.enterPins(pins2);
      $('.score').append("<p>"+pins2+"</p>");
  });

});


