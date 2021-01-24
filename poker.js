var cards = require('./cardDeck')

var discardPile = [];

// Hand size that can change based on what game is played
var handSize = 5;

var playerHands = [
    [],
    [],
    [],
    [],
    [{ value: 8, title: 'Eight', suit: 'Hearts' }, { value: 9, title: 'nine', suit: 'Hearts' }, { value: 7, title: 'Seven', suit: 'Hearts' }, { value: 10, title: 'Ten', suit: 'diamonds' }, { value: 11, title: 'Jack', suit: 'Hearts' }],
    [],
    [],
    [],
]

// Number of players that can change based on number of users or player selection
var playerCount = 4;

var drawCard = () => {
    var card = null;
    if (cards.deck.length === 0) {
        console.log('Deck is Empty')
    } else {
        card = cards.deck[Math.floor(Math.random() * cards.deck.length)];
        cards.deck.splice(Math.floor(Math.random() * cards.deck.length), 1)
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


var checkHandRank = (playerHand) => {
    var suits = []
    var values = []

    for (let i = 0; i < playerHand.length; i++) {
        suits.push(playerHand[i].suit)
        values.push(playerHand[i].value)
    }

    // Condensed.length will be used to help check hands
    var condensedValues = [...new Set(values)];
    var condensedSuits = [...new Set(suits)];
    var sequentialCheck = () => {
        values.sort(function(a, b){return a-b})
        let output = true;
        for (let i = 0; i < (values.length - 1); i++) {
            if (values[i] !== (values[i+1] - 1)) {
                output = false;
            }            
        }
        return output
    }

    if (condensedValues.length === 5 && sequentialCheck() === true && condensedSuits.length === 1 && values.includes(14)) {
        // Royal Flush
        return 1
    } else if (condensedValues.length === 5 && sequentialCheck() === true && condensedSuits.length === 1 && !values.includes(14)) {
        // Straight flush
        return 2
    } else if (condensedValues.length === 2) {
        // 4 of a kind or full house
        let value1 = null;
        let value2 = null;
        let value1Count = 0;
        let value2Count = 0;
        for (let i = 0; i < values.length; i++) {
            if (value1 === null) {
                value1 = values[i]
            } else if (value1 !== null && value2 === null){
                value2 = values[i]
            }
            
            if (values[i] === value1) {
                value1Count += 1;
            } else if (values[i] === value2) {
                value2Count += 1;
            }
        }

        if (value1Count === 4 || value2Count === 4) {
            // 4 of a kind
            return 3
        } else if (value1Count === 3 || value2Count === 3) {
            // Full house
            return 4
        } else {
            console.log('Error 3 or 4')
        }
    } else if (sequentialCheck() === false && condensedSuits.length === 1) {
        // Flush
        return 5
    } else if (sequentialCheck() === true && condensedSuits.length > 1) {
        // Straight
        return 6
    }



    console.log('Suits: ', suits);
    console.log('Condensed Suits: ', condensedSuits);
    console.log('Values: ', values);
    console.log('Condensed Values: ', condensedValues)
    console.log('Sequential Check: ', sequentialCheck());
    console.log(' ')
}


var playGame = () => {
    // Start by 'dealing' cards to each player based on desired hand size and # of players
    for (let x = 0; x < handSize; x++) {
        for (let i = 0; i < playerCount; i++) {
            playerHands[i].push(drawCard())
        }
    }

    // Function to check for winning hand
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
// showHands()
for (let y = 0; y < playerCount + 1; y++) {
    console.log(checkHandRank(playerHands[y]))
}
