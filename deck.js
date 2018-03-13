// ************ Unshuffed Deck ************ //

const cardDeck = [{
    name: "ace",
    suit: "spade",
    points: 11,
    img: "/img/AS.jpg"
  },
  {
    name: "ace",
    suit: "heart",
    points: 11,
    img: "/img/AH.jpg"
  },
  {
    name: "ace",
    suit: "club",
    points: 11,
    img: "/img/AC.jpg"
  },
  {
    name: "ace",
    suit: "diamond",
    points: 11,
    img: "/img/AD.jpg"
  },
  {
    name: "king",
    suit: "spade",
    points: 10,
    img: "/img/KS.jpg"
  },
  {
    name: "king",
    suit: "heart",
    points: 10,
    img: "/img/KH.jpg"
  },
  {
    name: "king",
    suit: "club",
    points: 10,
    img: "/img/KC.jpg"
  },
  {
    name: "king",
    suit: "diamond",
    points: 10,
    img: "/img/KD.jpg"
  },
  {
    name: "queen",
    suit: "spade",
    points: 10,
    img: "/img/QS.jpg"
  },
  {
    name: "queen",
    suit: "heart",
    points: 10,
    img: "/img/QH.jpg"
  },
  {
    name: "queen",
    suit: "club",
    points: 10,
    img: "/img/QC.jpg"
  },
  {
    name: "queen",
    suit: "diamond",
    points: 10,
    img: "/img/QD.jpg"
  },
  {
    name: "jack",
    suit: "spade",
    points: 10,
    img: "/img/JS.jpg"
  },
  {
    name: "jack",
    suit: "heart",
    points: 10,
    img: "/img/JH.jpg"
  },
  {
    name: "jack",
    suit: "club",
    points: 10,
    img: "/img/JC.jpg"
  },
  {
    name: "jack",
    suit: "diamond",
    points: 10,
    img: "/img/JD.jpg"
  },
  {
    name: "ten",
    suit: "spade",
    points: 10,
    img: "/img/10S.jpg"
  },
  {
    name: "ten",
    suit: "heart",
    points: 10,
    img: "/img/10H.jpg"
  },
  {
    name: "ten",
    suit: "club",
    points: 10,
    img: "/img/10C.jpg"
  },
  {
    name: "ten",
    suit: "diamond",
    points: 10,
    img: "/img/10D.jpg"
  },
  {
    name: "nine",
    suit: "spade",
    points: 9,
    img: "/img/9S.jpg"
  },
  {
    name: "nine",
    suit: "heart",
    points: 9,
    img: "/img/9H.jpg"
  },
  {
    name: "nine",
    suit: "club",
    points: 9,
    img: "/img/9C.jpg"
  },
  {
    name: "nine",
    suit: "diamond",
    points: 9,
    img: "/img/9D.jpg"
  },
  {
    name: "eight",
    suit: "spade",
    points: 8,
    img: "/img/8S.jpg"
  },
  {
    name: "eight",
    suit: "heart",
    points: 8,
    img: "/img/8H.jpg"
  },
  {
    name: "eight",
    suit: "club",
    points: 8,
    img: "/img/8C.jpg"
  },
  {
    name: "eight",
    suit: "diamond",
    points: 8,
    img: "/img/8D.jpg"
  },
  {
    name: "seven",
    suit: "spade",
    points: 7,
    img: "/img/7S.jpg"
  },
  {
    name: "seven",
    suit: "heart",
    points: 7,
    img: "/img/7H.jpg"
  },
  {
    name: "seven",
    suit: "club",
    points: 7,
    img: "/img/7C.jpg"
  },
  {
    name: "seven",
    suit: "diamond",
    points: 7,
    img: "/img/7D.jpg"
  },
  {
    name: "six",
    suit: "spade",
    points: 6,
    img: "/img/6S.jpg"
  },
  {
    name: "six",
    suit: "heart",
    points: 6,
    img: "/img/6H.jpg"
  },
  {
    name: "six",
    suit: "club",
    points: 6,
    img: "/img/6C.jpg"
  },
  {
    name: "six",
    suit: "diamond",
    points: 6,
    img: "/img/6D.jpg"
  },
  {
    name: "five",
    suit: "spade",
    points: 5,
    img: "/img/5S.jpg"
  },
  {
    name: "five",
    suit: "heart",
    points: 5,
    img: "/img/5H.jpg"
  },
  {
    name: "five",
    suit: "club",
    points: 5,
    img: "/img/5C.jpg"
  },
  {
    name: "five",
    suit: "diamond",
    points: 5,
    img: "/img/5D.jpg"
  },
  {
    name: "four",
    suit: "spade",
    points: 4,
    img: "/img/4S.jpg"
  },
  {
    name: "four",
    suit: "heart",
    points: 4,
    img: "/img/4H.jpg"
  },
  {
    name: "four",
    suit: "club",
    points: 4,
    img: "/img/4C.jpg"
  },
  {
    name: "four",
    suit: "diamond",
    points: 4,
    img: "/img/4D.jpg"
  },
  {
    name: "three",
    suit: "spade",
    points: 3,
    img: "/img/3S.jpg"
  },
  {
    name: "three",
    suit: "heart",
    points: 3,
    img: "/img/3H.jpg"
  },
  {
    name: "three",
    suit: "club",
    points: 3,
    img: "/img/3C.jpg"
  },
  {
    name: "three",
    suit: "diamond",
    points: 3,
    img: "/img/3D.jpg"
  },
  {
    name: "two",
    suit: "spade",
    points: 2,
    img: "/img/2S.jpg"
  },
  {
    name: "two",
    suit: "heart",
    points: 2,
    img: "/img/2H.jpg"
  },
  {
    name: "two",
    suit: "club",
    points: 2,
    img: "/img/2C.jpg"
  },
  {
    name: "two",
    suit: "diamond",
    points: 2,
    img: "/img/2D.jpg"
  }
]

// ************ Function to shuffle deck ************ //

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  let shuffledDeck = []
  while (array.length !== 0) {
    const randomCard = array.splice(randomNumber(0, array.length - 1), 1)[0]
    shuffledDeck.push(randomCard)
  }
  return shuffledDeck
}

function sixDecks(array) {
  let sixDecks = []
  while(sixDecks.length < 312){
    sixDecks = sixDecks.concat(array)
  }
  return sixDecks
}

// ************ Global Variables ************ //

const shuffledSixDecks = shuffle(sixDecks(cardDeck))
const dealerTray = document.querySelector(".dealer-tray")
const playerTray = document.querySelector(".player-tray")
const playerTotal = document.querySelector(".player-total")
const dealerTotal = document.querySelector(".dealer-total")

document.querySelector(".token-total").innerHTML = JSON.parse(localStorage.getItem("myTokens")) ? JSON.parse(localStorage.getItem("myTokens")) : 500;

document.querySelector(".bet-input").setAttribute("max", document.querySelector(".token-total").innerHTML)
