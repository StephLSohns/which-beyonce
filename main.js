var deck = new Deck();



var gameSpace = document.querySelector('.game-space');
// var flipVerticalFwd = document.querySelector('.flip-vertical-fwd');

gameSpace.addEventListener('click', function() {
  cardFlip(event);
});



function cardFlip(event) {
  // var cardsArray = deck.cards;
  // var selectedCard = event.target;
  // for(var i = 0; i < cardsArray.length; i++) {
  // if (selectedCard.classList.contains('cards')) {
  //   selectedCard.classList.add(`bey${cardsArray[i].matchInfo}`);
  // }

  }
  deck.checkSelectedCards();
}


  // console.log("this card");



window.onload = createDeck();


function createDeck() {
  deck.fillDeck();
  showCards();
  //display cards

}

function showCards (event) {
  var cardsArray = deck.cards;
  for(var i = 0; i < cardsArray.length; i++) {
  gameSpace.innerHTML+= `<div class="cards card-${cardsArray[i].cardId} bey${cardsArray[i].matchId}" data-id="card-${cardsArray[i].matchInfo}">
    <p>${i + 1}</p>
  </div>`
}
  //toggle
}
