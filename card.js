class Card {
  constructor(cardId, matchInfo) {
    this.cardId = cardId; //1-10
    this.matchInfo = matchInfo;//1-5
    this.selected = false;
    this.matched = false;

  }
}
    //if this instance matches -> moveToMatched()
    //this.matched = true;
