$(function(){


  function makeBet(){
    bet = $("input#bet").val();
    return bet;
  }

  function makeRandomNumber(){
    correctGuess = Math.floor((Math.random() * 10) + 1);
    return correctGuess;
  }

  function makeGuess(){
    guess = $("input#guess").val();
    return guess;
  }

  function checkGuess(){
    if (guess == correctGuess) {
      $("#third-p").text("congratz! you earned: $" + (bet*2));
      doubleMoney();
    } else if (Math.abs(guess - correctGuess) == 1){
      $("#third-p").text("close, you can keep your money: $" + bet);
    } else {
    $("#third-p").text("sorry, no good, I'm taking $" + bet);
      loseMoney();
    };
  }

  function loseMoney(){
    wallet-=bet;
    if (wallet < 5) { 
      $("#third-p").text("You can't afford another bet, You Lose!");
      $("#again").toggleClass("invisible");
      $("#last").toggleClass("invisible");
    }
  }

  $("#again").click(function(){
      location.reload();
  });
   
  function doubleMoney(){
    bet*=2;
    wallet+=bet;
  }; 

  var wallet = 10;
  var count = 0;
  var guess,
      correctGuess,
      bet;

  $("#first-button").click(function(e){
    e.preventDefault();
    if ($("input#bet").val() <=10 && $("input#bet").val() >= 5){
      $("#first").toggleClass("invisible");
      $("#second").toggleClass("invisible");
      makeBet();
      makeRandomNumber();
  
    } else {
      $("#first-p").text("Try Again! place a bet between $5 and $10")
    }
  });



  $("#second-button").click(function(e){
    e.preventDefault();
      if ($("input#guess").val() <=10 && $("input#bet").val() >= 1){
      $("#second").toggleClass("invisible");
      $("#third").toggleClass("invisible");
      makeGuess();
      checkGuess();
      $("#wallet").text("Wallet amount: $" + wallet);
      $("#input_guess").text("your guess was: " + guess);
      $("#number").text("The correct guess was: " + correctGuess);
    } else {
      $("#first-p").text("Try Again! place a bet between $5 and $10")
    }
  });


  $("#last").click(function(e){
    e.preventDefault();
    $("#third").toggleClass("invisible");
    $("#first").toggleClass("invisible");
  })

});




