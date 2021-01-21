var cards = require('./cardDeck')

var discardPile = [];

var handSize = 5;

var playerHands = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]



var playerCount = 4;


// console.log(cards.deck)

var drawCard = () => {
    var card = null;
    if (cards.deck.length === 0) {
        console.log('Deck is Empty')
    } else {
        card = cards.deck[Math.floor(Math.random() * cards.deck.length)];
        cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1)
        console.log('cards.deck', cards.deck)
        return card
    }
}

var checkHand = () => {
    for (let i = 0; i < hand.length; i++) {
        console.log(`Card #${i + 1}: ${hand[i].value} of ${hand[i].suit}`);
    }
}

var discard = () => {
    if (hand.length === 0) {
        console.log('Hand is Empty')
    } else {

    }
}

var playGame = () => {
    for (let x = 0; x < handSize; x++) {
        for (let i = 0; i < playerCount; i++) {
            playerHands[i].push(drawCard())
        }
    }
}

var showHands = () => {
    for (let i = 0; i < playerCount; i++) {
        console.log(`Player ${i+1}'s Hand`)
        for (let x = 0; x < playerHands[i].length; x++) {
            console.log(`${playerHands[i][x].value} of ${playerHands[i][x].suit}`);
        }
        console.log(' '); 
    }
}

playGame()
showHands()
console.log(cards.deck)
