var deck = new Deck();
var card = new Card(1,1);
var card = new Card(2,1);
var card = new Card(3,2);
var card = new Card(4,2);
var card = new Card(1,2);
var card = new Card(1,2);


var gameSpace = document.querySelector('.game-space');


gameSpace.addEventListener('click', function() {
  cardFlip(event);
});




function cardFlip(event) {
  if (event.target.classList.contains('cards')) {
    event.target.classList.add('test');
    console.log(event.target);

    deck.checkSelectedCards();
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

  for(var i = 0; i < 10; i++)
  gameSpace.innerHTML+= `<div class="cards card-${[i]}" data-id="card-${[i]}">
    <p>${[i]}</p>
  </div>`
  //toggle

}
