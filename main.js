var deck = new Deck();


var gameSpace = document.querySelector('.game-space');
var lockCards = false;
// var flipVerticalFwd = document.querySelector('.flip-vertical-fwd');
gameSpace.addEventListener('click', cardFlip);



function cardFlip(event) {

  var selectedCard = event.target;
  var canFlip = true;
  if (lockCards) {
  timer = setInterval(function() {
      return
    }, 2000)
  }
    if (deck.selectedCards.length < 2 && selectedCard.matches('.cards')) {
      selectedCard.classList.toggle(`bey${selectedCard.dataset.id}`)
      selectedCard.classList.add('selected');

      var selectedCardId = parseInt(selectedCard.dataset.index) - 1;
      var selectedCardInstance = deck.cards[selectedCardId];

      deck.pushSelectedCards(selectedCardInstance);
    }
    if (deck.selectedCards.length === 2) {

      checkSelectedCards();
      lockCards = true;
    }

  }

function checkSelectedCards() {
    var objectId = null;
    if (deck.selectedCards[0].matchInfo === deck.selectedCards[1].matchInfo && deck.selectedCards[0].cardId != deck.selectedCards[1].cardId) {
      objectId = deck.selectedCards[0].matchInfo;
      var matchedCardsInstance = [deck.selectedCards[0], deck.selectedCards[1]]
      var cardsToHide = document.querySelectorAll(`.cards[data-id="${objectId}"]`);
      for(var i = 0; i < cardsToHide.length; i++) {
        cardsToHide[i].classList.add('hidden');
        deck.moveToMatched(matchedCardsInstance);
      }
    updateMatchCount();
  } else {
    noMatch();
  }
}

function updateMatchCount() {
  var matchCount = getMatchCount();
  var matchCounter = document.querySelector('.match-counter');
   matchCounter.innerText = matchCount;
}

function getMatchCount() {
  return deck.matchedCards.length / 2;
}


function noMatch() {
  var firstCard = deck.selectedCards[0].cardId;
  var secondCard = deck.selectedCards[1].cardId;
  var firstIndex = deck.selectedCards[0].matchInfo;
  var secondIndex = deck.selectedCards[1].matchInfo;
  if (deck.selectedCards[0].matchInfo != deck.selectedCards[1].matchInfo) {
    var firstSelectedCard = document.querySelector(`.cards[data-index="${firstCard}"]`);//1-10
    var secondSelectedCard = document.querySelector(`.cards[data-index="${secondCard}"]`);//1-10
    setTimeout(function() {
    firstSelectedCard.classList.toggle(`bey${firstIndex}`);//1-5
    secondSelectedCard.classList.toggle(`bey${secondIndex}`);//1-5
  }, 2000);
    }
    deck.selectedCards = [];
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
