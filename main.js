var deck = new Deck();



var gameSpace = document.querySelector('.game-space');
// var flipVerticalFwd = document.querySelector('.flip-vertical-fwd');

gameSpace.addEventListener('click', function() {
  cardFlip(event);
});



function cardFlip(event) {
  var cardsArray = deck.cards;
  var selectedCard = event.target;

  if (selectedCard.classList.contains('cards')) {
    selectedCard.classList.add(`bey${selectedCard.dataset.id}`)
    // selectedCard.classList.add(`bey${cardsArray[i].matchInfo}`)
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
  gameSpace.innerHTML+= `<div class="cards card-${cardsArray[i].cardId}" data-id="${cardsArray[i].matchInfo}">
    <p>${i + 1}</p>
  </div>`
}
  //toggle
}
