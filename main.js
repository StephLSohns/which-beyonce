var deck = new Deck();
var gameSpace = document.querySelector('.game-space');


gameSpace.addEventListener('click', function() {
  cardFlip(event);
});




function cardFlip(event) {
  if (event.target.classList.contains('cards')) {
    event.target.classList.add('test');
    console.log(event.target);

    deck.checkSelectedCards();
  }

  }



  // console.log("this card");



window.onload = createDeck();


function createDeck() {
  deck.fillDeck();
  showCards();

  //display cards

}

function showCards () {
  //toggle

}
