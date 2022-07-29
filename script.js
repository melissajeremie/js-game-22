// document.addEventListener('DOMContentLoaded', () => {
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
//const grid = document.querySelector('.grid');

// function createBoard() {
//     for (let i = 0; i < cardArray.length; i++) {
//         let card = document.createElement('img')
//         card.setAttribute('src', 'images/cardback.png')
//         card.setAttribute('data-id', i)
//         // card.addEventListener('click', flipcard)
//         grid.appendChild(card)
        
//     }
// }
// createBoard()
//})

function pickNums(n){
    let winners = []
    for(let i=0; i<n; i++){
        winners.push(Math.ceil(Math.random()*71))
    }
    return `Your winning numbers are ${winners} and MegaBall ` + Math.floor(Math.random()*25)
}
// console.log(pickNums(5))

function pickC4L(n){
    let c4lwinners = []
        for(let i=0; i<n; i++){
            c4lwinners.push(Math.ceil(Math.random()*61))
        }
        return `Your winning numbers are ${c4lwinners} and ` + Math.floor(Math.random()*4)
    }
console.log(pickC4L(5))
