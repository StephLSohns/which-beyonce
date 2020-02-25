var deck = new Deck();


var gameSpace = document.querySelector('.game-space');
// var flipVerticalFwd = document.querySelector('.flip-vertical-fwd');

gameSpace.addEventListener('click', cardFlip);



function cardFlip(event) {
  var cardsArray = deck.cards;
  var selectedCard = event.target;

    if (deck.selectedCards.length < 2 && selectedCard.matches('.cards')) {
      selectedCard.classList.toggle(`bey${selectedCard.dataset.id}`)
      selectedCard.classList.add('selected');

      var selectedCardId = parseInt(selectedCard.dataset.index) - 1;
      var selectedCardInstance = deck.cards[selectedCardId];
      console.log(selectedCardId, selectedCardInstance);

      deck.pushSelectedCards(selectedCardInstance);
    }
    if (deck.selectedCards.length === 2) {
      checkSelectedCards();
    }
  }

function checkSelectedCards() {
    var objectId = null;
    if (deck.selectedCards[0].matchInfo === deck.selectedCards[1].matchInfo) {
      objectId = deck.selectedCards[0].matchInfo;
      var matchedCardsInstance = [deck.selectedCards[0], deck.selectedCards[1]]
      var cardsToHide = document.querySelectorAll(`.cards[data-id="${objectId}"]`);
      for(var i = 0; i < cardsToHide.length; i++) {
        cardsToHide[i].classList.add('hidden');

       deck.moveToMatched(matchedCardsInstance);
       console.log(matchedCardsInstance);
    }
    updateMatchCount();
  } else {
    deck.noMatch();
  }
}

function updateMatchCount() {
  var matchCount = getMatchCount();
  var matchCounter = document.querySelector('.match-counter');
  matchCounter.innerText = matchCount;
}

function getMatchCount() {
  return deck.matchedCards.length;
}

  //if deck.selectedCards < 2
    //pushSelectedCards

    //else checkSelectedCards;
    //if match invoke updateMatchCount
    //push selectedCards to matchedCards if they match


    // deck.pushSelectedCards();

  //   if(deck.selectedCards.length == 2) {
  //     deck.checkSelectedCards(event)
  // }



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
