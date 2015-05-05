$(document).ready(function(){
  var wallet = 100;

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
      $('span').text("congratz!");
      doubleMoney();
    } else if (Math.abs(guess - correctGuess) == 1){
      $('span').text("close, you can keep your money");
    } else {
    $('span').text("sorry, no good");
      loseMoney();
    };
  }

  function loseMoney(){
    wallet-=bet;
  }
   
  function doubleMoney(){
    bet*=2;
    wallet+=bet;
    console.log(wallet);
  }; 


  var count = 0;
  var guess,
      correctGuess;
  $(".button").click(function(e){
    e.preventDefault();
    count++;
    if (count % 3 === 1 || count % 3 === 0) {
      $(".container").toggleClass("invisible");
      makeBet();
      makeRandomNumber();
    };

    if (count % 3 === 2 || count % 3 === 1){
      $(".second_container").toggleClass("invisible");
      makeGuess();
      if (count % 3 === 2){
        checkGuess();
      }
    }

    if (count % 3 === 0 || count % 3 === 2){ 
      $(".third_container").toggleClass("invisible");
      $("#wallet").text("Wallet amount:" + wallet);
      $("#input_guess").text("your guess was: " + guess);
      $("#number").text("The correct guess was: " + correctGuess);
    }
   
  });

});








