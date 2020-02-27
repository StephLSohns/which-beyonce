var deck = new Deck();

var playNewGame = document.querySelector('.play-new-btns')
var gameSpace = document.querySelector('.game-space');
var mainPage = document.querySelector('.game');
var lockCards = false;
var startTime;
var endTime;
var totalTime;
var totalSeconds;
var totalMiliseconds;
var allTimes = JSON.parse(localStorage.getItem('times')) || [];
var topTime = allTimes[0] || "0";
var secondTime = allTimes[1] || "0";
var thirdTime = allTimes[2] || "0";
var secondTimeDisplay = document.querySelector('.second-place');
var topTimeDisplay = document.querySelector('.first-place');
var thirdTimeDisplay = document.querySelector('.third-place');


topTimeDisplay.innerText = `${topTime}`;
secondTimeDisplay.innerText = `${secondTime}`;
thirdTimeDisplay.innerText = `${thirdTime}`;


gameSpace.addEventListener('click', cardFlip);


window.onload = createDeck();


//This function is called every time a card on the DOM is clicked
//It displays the image associated with the card, and pushed the instance of
//that card into the deck.selectedCards array when two cards are selected.
function cardFlip(event) {
  var selectedCard = event.target;

  if (deck.selectedCards.length < 2 && selectedCard.matches('.cards') && !lockCards) {
      selectedCard.classList.toggle(`bey${selectedCard.dataset.id}`);


    var selectedCardId = parseInt(selectedCard.dataset.index);
    var selectedCardInstance = deck.cards.find(function(card) {
      return card.cardId === selectedCardId
    })

    deck.pushSelectedCards(selectedCardInstance);
  }

  if (deck.selectedCards.length === 2) {
      lockCards = true;
      checkSelectedCards();
  }
}
//This function checks the deck class selectedCards array for a match
//If there is a match, it hides the cards on the DOM, and calls the updateMatchCount and fillLeftBoxes functions
//If there is no match, it calls the noMatch function
function checkSelectedCards() {
  var objectId = null;
  var cardOne = deck.selectedCards[0];
  var cardTwo = deck.selectedCards[1];
  if (cardOne.matchInfo === cardTwo.matchInfo && cardOne.cardId != cardTwo.cardId) {
      objectId = cardOne.matchInfo;
      var matchedCardsInstance = [cardOne, cardTwo]
      var cardsToHide = document.querySelectorAll(`.cards[data-id="${objectId}"]`);
  for (var i = 0; i < cardsToHide.length; i++) {
      cardsToHide[i].classList.add('hidden');
      deck.moveToMatched(matchedCardsInstance);
  }
    lockCards = false;
    updateMatchCount();
    fillLeftBoxes(objectId);
} else {
    noMatch();
  }
}

//Updates the match count on the DOM main game page each time there's a match
function updateMatchCount() {
    var matchCount = getMatchCount();
    var matchCounter = document.querySelector('.match-counter');
    matchCounter.innerText = matchCount;
}

//This function returns a number 1-5, which is used for DOM display purposes
function getMatchCount() {
    return deck.matchedCards.length / 2;
}

//This function flips non-matched cards back over after one second and resets the selectedCards array
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
    secondSelectedCard.classList.toggle(`bey${secondIndex}`);//1
    lockCards = false;
  }, 1000);

    }

    deck.selectedCards = [];
}

//Takes in the objectId (unique 1-5 number) and the return of getMatchCount to display elements on DOM
function fillLeftBoxes(objectId) {
  var boxNum = getMatchCount();
  var selectedBox = document.querySelector(`.box-${boxNum}`)
      selectedBox.classList.add(`bey${objectId}`)
  if (boxNum === 5) {
      endTime = new Date();
      getTime();
      showWinPage();
    }
  }

//Converts milliseconds to seconds
  function getTime() {
     totalMiliseconds = (endTime - startTime);
     totalSeconds = (totalMiliseconds / 1000);

  }

//toggles win page on the DOM
  function showWinPage() {
    mainPage.innerHTML = "";
    mainPage.insertAdjacentHTML('afterbegin',
    `
    <main class="win-page">
          <div class="inside-background">
            <h1 class="congrats-heading">Congratulations!</h1>
          <div class="win-info">
            <p class="total-matches">All 5 matches were found in</p>
            <p class="final-win-time">${totalSeconds} Seconds!</p>
          </div>
          <div class="play-new-btns">
            <button class="win-page-btn">Play Again</button>
            <button class="win-page-btn">New Game</button>
            </div>
          </div>
    </main>`);

    saveTime();

}

//Pushes most recent time into an array that is then sorted and stored in local storage
  function saveTime() {
    debugger
    allTimes.push(totalSeconds);
    sortTimes();
    var stringTimes = JSON.stringify(allTimes);
    localStorage.setItem('times', stringTimes);

  }

//Sorts times before they are stored locally,
  function sortTimes() {
    allTimes.sort(function(a, b) {
      return a - b;
    })

  }



//Called on page load, it starts game timer and fills the cards array on the deck class, as well as calls the
//function which creates our cards on the DOM
function createDeck() {
  startTime = new Date();
  deck.fillDeck();
  showCards();
}


//Creates cards on the DOM, and assigns them unique 1-10 values, and semi-unique 1-5 values
function showCards (event) {
  var cardsArray = deck.cards;
  for(var i = 0; i < cardsArray.length; i++) {
  gameSpace.innerHTML+= `<div class="cards card-${cardsArray[i].cardId}" data-id="${cardsArray[i].matchInfo}" data-index="${cardsArray[i].cardId}">
    <p class="b-class">B</p>
  </div>`
  }
}
