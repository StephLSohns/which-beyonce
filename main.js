var deck = new Deck();


var gameSpace = document.querySelector('.game-space');
// var flipVerticalFwd = document.querySelector('.flip-vertical-fwd');

gameSpace.addEventListener('click', function() {
  cardFlip(event);
});



function cardFlip(event) {
  var cardsArray = deck.cards;
  var selectedCard = event.target;

  if (selectedCard.classList.contains('cards') && deck.selectedCards.length < 2) {
    selectedCard.classList.toggle(`bey${selectedCard.dataset.id}`)
    selectedCard.classList.add('selected');
    // console.log(selectedCard);
  } if (selectedCard.classList.contains('selected') && deck.selectedCards.length == 2) {
    selectedCard.classList.toggle(`bey${selectedCard.dataset.id}`);
    // deck.pushSelectedCards();
    }
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
  gameSpace.innerHTML+= `<div class="cards card-${cardsArray[i].cardId}" data-id="${cardsArray[i].matchInfo}" data-index="${cardsArray[i].cardId}">
    <p>${i + 1}</p>
  </div>`
}
  //toggle
}
