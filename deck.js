// ************ Unshuffed Deck ************ //

const cardDeck = [{
    name: "ace",
    suit: "spade",
    points: 11,
    img: "/img/AS.png"
  },
  {
    name: "ace",
    suit: "heart",
    points: 11,
    img: "/img/AH.png"
  },
  {
    name: "ace",
    suit: "club",
    points: 11,
    img: "/img/AC.png"
  },
  {
    name: "ace",
    suit: "diamond",
    points: 11,
    img: "/img/AD.png"
  },
  {
    name: "king",
    suit: "spade",
    points: 10,
    img: "/img/KS.png"
  },
  {
    name: "king",
    suit: "heart",
    points: 10,
    img: "/img/KH.png"
  },
  {
    name: "king",
    suit: "club",
    points: 10,
    img: "/img/KC.png"
  },
  {
    name: "king",
    suit: "diamond",
    points: 10,
    img: "/img/KD.png"
  },
  {
    name: "queen",
    suit: "spade",
    points: 10,
    img: "/img/QS.png"
  },
  {
    name: "queen",
    suit: "heart",
    points: 10,
    img: "/img/QH.png"
  },
  {
    name: "queen",
    suit: "club",
    points: 10,
    img: "/img/QC.png"
  },
  {
    name: "queen",
    suit: "diamond",
    points: 10,
    img: "/img/QD.png"
  },
  {
    name: "jack",
    suit: "spade",
    points: 10,
    img: "/img/JS.png"
  },
  {
    name: "jack",
    suit: "heart",
    points: 10,
    img: "/img/JH.png"
  },
  {
    name: "jack",
    suit: "club",
    points: 10,
    img: "/img/JC.png"
  },
  {
    name: "jack",
    suit: "diamond",
    points: 10,
    img: "/img/JD.png"
  },
  {
    name: "ten",
    suit: "spade",
    points: 10,
    img: "/img/10S.png"
  },
  {
    name: "ten",
    suit: "heart",
    points: 10,
    img: "/img/10H.png"
  },
  {
    name: "ten",
    suit: "club",
    points: 10,
    img: "/img/10C.png"
  },
  {
    name: "ten",
    suit: "diamond",
    points: 10,
    img: "/img/10D.png"
  },
  {
    name: "nine",
    suit: "spade",
    points: 9,
    img: "/img/9S.png"
  },
  {
    name: "nine",
    suit: "heart",
    points: 9,
    img: "/img/9H.png"
  },
  {
    name: "nine",
    suit: "club",
    points: 9,
    img: "/img/9C.png"
  },
  {
    name: "nine",
    suit: "diamond",
    points: 9,
    img: "/img/9D.png"
  },
  {
    name: "eight",
    suit: "spade",
    points: 8,
    img: "/img/8S.png"
  },
  {
    name: "eight",
    suit: "heart",
    points: 8,
    img: "/img/8H.png"
  },
  {
    name: "eight",
    suit: "club",
    points: 8,
    img: "/img/8C.png"
  },
  {
    name: "eight",
    suit: "diamond",
    points: 8,
    img: "/img/8D.png"
  },
  {
    name: "seven",
    suit: "spade",
    points: 7,
    img: "/img/7S.png"
  },
  {
    name: "seven",
    suit: "heart",
    points: 7,
    img: "/img/7H.png"
  },
  {
    name: "seven",
    suit: "club",
    points: 7,
    img: "/img/7C.png"
  },
  {
    name: "seven",
    suit: "diamond",
    points: 7,
    img: "/img/7D.png"
  },
  {
    name: "six",
    suit: "spade",
    points: 6,
    img: "/img/6S.png"
  },
  {
    name: "six",
    suit: "heart",
    points: 6,
    img: "/img/6H.png"
  },
  {
    name: "six",
    suit: "club",
    points: 6,
    img: "/img/6C.png"
  },
  {
    name: "six",
    suit: "diamond",
    points: 6,
    img: "/img/6D.png"
  },
  {
    name: "five",
    suit: "spade",
    points: 5,
    img: "/img/5S.png"
  },
  {
    name: "five",
    suit: "heart",
    points: 5,
    img: "/img/5H.png"
  },
  {
    name: "five",
    suit: "club",
    points: 5,
    img: "/img/5C.png"
  },
  {
    name: "five",
    suit: "diamond",
    points: 5,
    img: "/img/5D.png"
  },
  {
    name: "four",
    suit: "spade",
    points: 4,
    img: "/img/4S.png"
  },
  {
    name: "four",
    suit: "heart",
    points: 4,
    img: "/img/4H.png"
  },
  {
    name: "four",
    suit: "club",
    points: 4,
    img: "/img/4C.png"
  },
  {
    name: "four",
    suit: "diamond",
    points: 4,
    img: "/img/4D.png"
  },
  {
    name: "three",
    suit: "spade",
    points: 3,
    img: "/img/3S.png"
  },
  {
    name: "three",
    suit: "heart",
    points: 3,
    img: "/img/3H.png"
  },
  {
    name: "three",
    suit: "club",
    points: 3,
    img: "/img/3C.png"
  },
  {
    name: "three",
    suit: "diamond",
    points: 3,
    img: "/img/3D.png"
  },
  {
    name: "two",
    suit: "spade",
    points: 2,
    img: "/img/2S.png"
  },
  {
    name: "two",
    suit: "heart",
    points: 2,
    img: "/img/2H.png"
  },
  {
    name: "two",
    suit: "club",
    points: 2,
    img: "/img/2C.png"
  },
  {
    name: "two",
    suit: "diamond",
    points: 2,
    img: "/img/2D.png"
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

document.querySelector(".odometer").innerHTML =  JSON.parse(localStorage.getItem("myTokens")) ? JSON.parse(localStorage.getItem("myTokens")) : 500;
