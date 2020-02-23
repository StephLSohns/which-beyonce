class Deck {
  constructor(){
    this.cards = [];//array of all the cards 10*
    this.matchedCards = [];//array with each pair 5*
    this.selectedCards = [];//two user selected cards *2

  }




pushSelectedCards() {
    var cards = this.cards;
    var selectedCard = event.target;
    var selectedCards = this.selectedCards;
    var selectedObject = null;

    for(var i = 0; i < this.cards.length; i++) {
      if (selectedCard.dataset.index == cards[i].cardId && selectedCards.length < 2) {
          this.selectedCards.push(cards[i]);
          // selectedObject = cards[i];
          // console.log(selectedCards);
          cards[i].selected = true;
        }else if (this.selectedCards.length == 2) {
        //   this.checkSelectedCards();
        }

    }
}
  checkSelectedCards(event) {
    var objectId = null;
    var misMatch = null;
    var currentCard = event.target;
    //both cards disappear
    //adds a counter to sidebar
  if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
    this.matchedCards.push(this.selectedCards);
    this.selectedCards[0].matched = true;
    this.selectedCards[1].matched = true;
    objectId = this.selectedCards[0].matchInfo;
    this.selectedCards = [];
    console.log(objectId);
  }
  var cardsToHide = document.querySelectorAll(`.cards[data-id="${objectId}"]`);
  for(var i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('hidden');
  }


  // var cardsToggle1 = document.querySelectorAll(`.cards[data-id="${selectedCard[0].cardId}"]`);
  // var cardsToggle1 = document.querySelectorAll(`.cards[data-id="${selectedCard[0].cardId}"]`);
  // var allCards = document.querySelectorAll('.cards');
  //
  // if (this.selectedCards[0].matchInfo != this.selectedCards[1].matchInfo) {
  //     setTimeout(function() {
  //       if (allCards.classList.contains('selected')) {
  //
  //       }
  //   }, 2000);
  // }
  // if (misMatch && this.selectedCards.length == 2) {
  //   this.selectedCards.
  // }


}

delayTwoSeconds () {
  console.log("delay two seconds");
}

    //clear selected cards when no match//

    //called after first card
    //checking for a match
    //match = the two cards disappear
    //no match = two cards flip back over after two seconds
    //clear selected cards when no match//




  shuffle() {
    //for (var i = this.cards.length - 1; i > 0; i--) {
    //var j = Math.floor(Math.random() * (i + 1));
    // [this.cards[i].matchInfo, this.cards[j].matchInfo] =
    // [this.cards[j].matchInfo, this.cards[i].matchInfo];
  // }randomize placement of all cards (this.cards)
   }



    //clear selected cards when no match//

    //called after first card
    //checking for a match
    //match = the two cards disappear
    //no match = two cards flip back over after two seconds


  moveToMatched() {
    // this.matchedCards.push(this.selectedCards);
    // this.selectedCards[0].matched = true;
    // this.selectedCards[1].matched = true;
    // // console.log(this.matchedCards);
    // this.selectedCards = [];
  }

    //when a user matches two like cards
    //those cards are pushed to the matched array
    //also one picture representing that match is moved to matched boxes



  fillDeck() {
    var zeroIndex = 0;
  for(var i = 1; i < 6; i++) {
    zeroIndex++;
    var card = new Card(zeroIndex, i);
    this.cards.push(card);
  }
    var fiveIndex = 5;
  for(var i = 1; i < 6; i++) {
    fiveIndex++;
    var card = new Card(fiveIndex, i);
    this.cards.push(card);
  }
  console.log(this.cards);
  //push new cards to cards array
  }
}
