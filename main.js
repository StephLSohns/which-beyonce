var deck = new Deck();



var gameSpace = document.querySelector('.game-space');


gameSpace.addEventListener('click', function() {
  cardFlip(event);
});




function cardFlip(event) {




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
  for(var i = 1; i < 6; i++)
  gameSpace.innerHTML+= `<div class="cards card-${[i]}" data-id="card-${[i]}">
    <p>${[i]}</p>
  </div>`

  //toggle
}
