document.addEventListener('DOMContentLoaded', () => {
    // array of cards
    const cardArray = [
        {
            name:'new york',
            img: 'images/nyc.png'
        },
        {
            name:'new york',
            img: 'images/nyc.png'
        },
        {
            name:'london',
            img: 'images/london.png'
        },
        {
            name:'london',
            img: 'images/london.png'
        },
        {
            name:'tokyo',
            img: 'images/tokyo.png'
        },
        {
            name:'tokyo',
            img: 'images/tokyo.png'
        },
        {
            name:'paris',
            img: 'images/paris.png'
        },
        {
            name:'paris',
            img: 'images/paris.png'
        },
        {
            name:'taj mahal',
            img: 'images/tajmahal.png'
        },
        {
            name:'taj mahal',
            img: 'images/tajmahal.png'
        },
        {
            name:'pisa',
            img: 'images/pisa.png'
        },
        {
            name:'pisa',
            img: 'images/pisa.png'
        }
    ]

// game board
const grid = document.querySelector('.grid');
const result = document.getElementById('result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/cardback.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
        
    }
}
// check for card matches
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosen[0]
    const optionTwoId = cardsChosen[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert("It\'s a match!")
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        cardsWon.push(cardsChosen)
    } else {
       cards[optionOneId].setAttribute('src', 'images/cardback.png') 
       cards[optionTwoId].setAttribute('src', 'images/cardback.png') 
       alert("Try again")
    }
    cardsChosen = []
    cardsChosenId = []
    result.textContent = cardsWon.length
    if(cardsWon.length === cardArray/2) {
        result.textContent = "You found all the matches :)"
    }
}

// flip card over
function flipCard(){
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
}
}

createBoard()
})

