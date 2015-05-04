window.onload = function(){

var wallet = 100;
var button = document.getElementById('guess')  

button.addEventListener('click', function(){
  bet = prompt('place a bet between $5 - $10');
  var correctGuess = Math.floor((Math.random() * 10) + 1);
  var guess = prompt('enter a number');
  
    if (guess == correctGuess) {
      alert('congratz!!!');
      doubleMoney();
    } else if (Math.abs(guess - correctGuess) == 1){
      alert('close, you can keep your money')
    } else {
      alert('too bad');
      loseMoney();
    };

  console.log(guess);
  console.log(correctGuess);
  console.log(wallet)
  // console.log((guess - correctGuess).abs)
});

function loseMoney(){
  wallet-=bet;
}
 
function doubleMoney(){
  bet*=2;
  wallet+=bet;
  console.log(wallet);
}; 







};