var deckOfCards = [
    '1 of Hearts', '1 of Clubs', '1 of Diamonds', '1 of Spades',
    '2 of Hearts', '2 of Clubs', '2 of Diamonds', '2 of Spades',
    '3 of Hearts', '3 of Clubs', '3 of Diamonds', '3 of Spades',
    '4 of Hearts', '4 of Clubs', '4 of Diamonds', '4 of Spades',
    '5 of Hearts', '5 of Clubs', '5 of Diamonds', '5 of Spades',
    '6 of Hearts', '6 of Clubs', '6 of Diamonds', '6 of Spades',
    '7 of Hearts', '7 of Clubs', '7 of Diamonds', '7 of Spades',
    '8 of Hearts', '8 of Clubs', '8 of Diamonds', '8 of Spades',
    '9 of Hearts', '9 of Clubs', '9 of Diamonds', '9 of Spades',
    '10 of Hearts', '10 of Clubs', '10 of Diamonds', '10 of Spades',
    'Jack of Hearts', 'Jack of Clubs', 'Jack of Diamonds', 'Jack of Spades',
    'Queen of Hearts', 'Queen of Clubs', 'Queen of Diamonds', 'Queen of Spades',
    'King of Hearts', 'King of Clubs', 'King of Diamonds', 'King of Spades',
    'Ace of Hearts', 'Ace of Clubs', 'Ace of Diamonds', 'Ace of Spades',
]

var discardPile = [];

var hand = [];

var drawCard = () => {
    if (deckOfCards.length === 0) {
        console.log('Deck is Empty')
    } else {
        hand.push(deckOfCards[Math.floor(Math.random() * deckOfCards.length)]);
        console.log('Hand', hand);
        deckOfCards.splice((deckOfCards[Math.floor(Math.random() * deckOfCards.length)]), 1)
    }
}

var discard = () => {
    if (hand.length === 0) {
        console.log('Hand is Empty')
    } else {
        
    }
}

drawCard()