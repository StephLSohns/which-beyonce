class Deck {
  constructor(){
    this.cards = [];//array of all the cards 10*
    this.matchedCards = [];//array with each matching pair 5*
    this.selectedCards = [];//two user selected cards *2 (which = match or noMatch)
  }

  pushSelectedCards(selectedCard) {
    this.selectedCards.push(selectedCard)
  }

  moveToMatched(matchedCardsInstance) {
    this.matchedCards.push(matchedCardsInstance);
    this.selectedCards = [];
  }

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

    this.shuffle();
  }

  shuffle() {
    var randomNum, replaceNum;
    for (var i = this.cards.length - 1; i > 0; i--) {
      randomNum = Math.floor(Math.random() * (i + 1));

      replaceNum = this.cards[i];
      this.cards[i] = this.cards[randomNum];
      this.cards[randomNum] = replaceNum;
    }
 }
}
