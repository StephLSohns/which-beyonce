class Deck {
  constructor(){
    this.cards = [];//array of all the cards 10*
    this.matchedCards = [];//array with each pair 5*
    this.selectedCards = [];//two user selected cards *2

  }

  checkSelectedCards() {
    //clear selected cards when no match//

    //called after first card
    //checking for a match
    //match = the two cards disappear
    //no match = two cards flip back over after two seconds
    //clear selected cards when no match//
  }



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
    //when a user matches two like cards
    //those cards are pushed to the matched array
    //also one picture representing that match is moved to matched boxes

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
  console.log(this.cards);
  //push new cards to cards array
  }
}
