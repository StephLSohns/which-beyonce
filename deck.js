class Deck {
  constructor(){
    this.cards = [];//array of all the cards 10*
    this.matchedCards = [];//array with each matching pair 5*
    this.selectedCards = [];//two user selected cards *2 (which = match or noMatch)
  }



Hello

pushSelectedCards(selectedCard) {
  this.selectedCards.push(selectedCard)

    // for(var i = 0; i < this.cards.length; i++) {
    //   if (selectedCard.dataset.index == cards[i].cardId && selectedCards.length < 2) {
    //       this.selectedCards.push(cards[i]);
    //       // selectedObject = cards[i];
    //       // console.log(selectedCards);
    //       cards[i].selected = true;
    //     } else if (this.selectedCards.length == 2) {
    //     //   this.checkSelectedCards();
    //     }
    }

// pushSelectedCards() {
//     var cards = this.cards;
//     var selectedCard = event.target;
//     var selectedCards = this.selectedCards;
//     var selectedObject = null;

//     for(var i = 0; i < this.cards.length; i++) {
//       if (selectedCard.dataset.index == cards[i].cardId && selectedCards.length < 2) {
//           this.selectedCards.push(cards[i]);
//           // selectedObject = cards[i];
//           // console.log(this.selectedCards);
//           cards[i].selected = true;
//         }else if (this.selectedCards.length == 2) {
//         //   this.checkSelectedCards();
//         }

//     }
// }
//   checkSelectedCards(event) {
//     var objectId = null;
//     var firstCard = this.selectedCards[0].cardId;
//     var secondCard = this.selectedCards[1].cardId;
//     var firstIndex = this.selectedCards[0].matchInfo;
//     var secondIndex = this.selectedCards[1].matchInfo;
//     //both cards disappear
//     //adds a counter to sidebar
//   if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
//     this.matchedCards.push(this.selectedCards);
//     this.selectedCards[0].matched = true;
//     this.selectedCards[1].matched = true;
//     objectId = this.selectedCards[0].matchInfo;
//     this.selectedCards = [];

//     var cardsToHide = document.querySelectorAll(`.cards[data-id="${objectId}"]`);
//     for(var i = 0; i < cardsToHide.length; i++) {
//       cardsToHide[i].classList.add('hidden');
//     }
//     this.updateMatchCount();
//     } else {
//     this.noMatch(firstCard, secondCard, firstIndex, secondIndex);
//   }
//     return selectedCards[1].matchedInfo


//   checkSelectedCards() {
//     var objectId = null;
//     var firstCard = this.selectedCards[0].cardId;
//     var secondCard = this.selectedCards[1].cardId;
//     var firstIndex = this.selectedCards[0].matchInfo;
//     var secondIndex = this.selectedCards[1].matchInfo;
//     //both cards disappear
//     //adds a counter to sidebar
//   if (this.selectedCards[0].matchInfo === this.selectedCards[1].matchInfo) {
//     this.matchedCards.push(this.selectedCards);
//     this.selectedCards[0].matched = true;
//     this.selectedCards[1].matched = true;
//     objectId = this.selectedCards[0].matchInfo;
//     this.selectedCards = [];
//
//     var cardsToHide = document.querySelectorAll(`.cards[data-id="${objectId}"]`);
//     for(var i = 0; i < cardsToHide.length; i++) {
//       cardsToHide[i].classList.add('hidden');
//     }
//     // this.updateMatchCount();
//     } else {
//     this.noMatch(firstCard, secondCard, firstIndex, secondIndex);
//   }
// }
  // updateMatchCount() {
  //   var matchCount = this.getMatchCount();
  //   var matchCounter = document.querySelector('.match-counter');
  //   matchCounter.innerText = matchCount;
  // }
  // getMatchCount() {
  //   return this.matchedCards.length;
  // }

  // noMatch(firstCard, secondCard, firstIndex, secondIndex) {
  //   var firstSelectedCard = document.querySelector(`.cards[data-index="${firstCard}"]`);//1-10
  //   var secondSelectedCard = document.querySelector(`.cards[data-index="${secondCard}"]`);//1-10
  //
  //
  //   if (this.selectedCards[0].matchInfo != this.selectedCards[1].matchInfo) {
  //     setTimeout(function() {
  //     firstSelectedCard.classList.toggle(`bey${firstIndex}`);//1-5
  //     secondSelectedCard.classList.toggle(`bey${secondIndex}`);//1-5
  //   }, 2000);
  //     }
  //     this.selectedCards = [];
  //     console.log(this.selectedCards);
  // }

    //   setTimeout(function() {
    //
    //
    //
    //
    //
    //
    // }, 2000);


  // if (misMatch && this.selectedCards.length == 2) {
  //   this.selectedCards.
  // }




    //clear selected cards when no match//

    //called after first card
    //checking for a match
    //match = the two cards disappear
    //no match = two cards flip back over after two seconds
    //clear selected cards when no match//




  shuffle()
    //for (var i = this.cards.length - 1; i > 0; i--) {
    //var j = Math.floor(Math.random() * (i + 1));
    // [this.cards[i].matchInfo, this.cards[j].matchInfo] =
    // [this.cards[j].matchInfo, this.cards[i].matchInfo];
  // }randomize placement of all cards (this.cards)




    //clear selected cards when no match//

    //called after first card
    //checking for a match
    //match = the two cards disappear
    //no match = two cards flip back over after two seconds


  moveToMatched(matchedCardsInstance) 
    this.matchedCards.push(matchedCardsInstance);
    this.selectedCards = [];


    //when a user matches two like cards
    //those cards are pushed to the matched array
    //also one picture representing that match is moved to matched boxes
    //and the match counter goes up by one for each match (upto 5 only)



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
  //push new cards to cards array
  }
