
// ************ Unshuffed Deck ************ //

const cardDeck = [
  {
    name: "ace",
    suit: "spade",
    points: 11,
    img: "AS.jpg"
  },
  {
    name: "ace",
    suit: "heart",
    points: 11,
    img: "AH.jpg"
  },
  {
    name: "ace",
    suit: "club",
    points: 11,
    img: "AC.jpg"
  },
  {
    name: "ace",
    suit: "diamond",
    points: 11,
    img: "AD.jpg"
  },
  {
    name: "king",
    suit: "spade",
    points: 10,
    img: "KS.jpg"
  },
  {
    name: "king",
    suit: "heart",
    points: 10,
    img: "KH.jpg"
  },
  {
    name: "king",
    suit: "club",
    points: 10,
    img: "KC.jpg"
  },
  {
    name: "king",
    suit: "diamond",
    points: 10,
    img: "KD.jpg"
  },
  {
    name: "queen",
    suit: "spade",
    points: 10,
    img: "QS.jpg"
  },
  {
    name: "queen",
    suit: "heart",
    points: 10,
    img: "QH.jpg"
  },
  {
    name: "queen",
    suit: "club",
    points: 10,
    img: "QC.jpg"
  },
  {
    name: "queen",
    suit: "diamond",
    points: 10,
    img: "QD.jpg"
  },
  {
    name: "jack",
    suit: "spade",
    points: 10,
    img: "JS.jpg"
  },
  {
    name: "jack",
    suit: "heart",
    points: 10,
    img: "JH.jpg"
  },
  {
    name: "jack",
    suit: "club",
    points: 10,
    img: "JC.jpg"
  },
  {
    name: "jack",
    suit: "diamond",
    points: 10,
    img: "JD.jpg"
  },
  {
    name: "ten",
    suit: "spade",
    points: 10,
    img: "10S.jpg"
  },
  {
    name: "ten",
    suit: "heart",
    points: 10,
    img: "10H.jpg"
  },
  {
    name: "ten",
    suit: "club",
    points: 10,
    img: "10C.jpg"
  },
  {
    name: "ten",
    suit: "diamond",
    points: 10,
    img: "10D.jpg"
  },
  {
    name: "nine",
    suit: "spade",
    points: 9,
    img: "9S.jpg"
  },
  {
    name: "nine",
    suit: "heart",
    points: 9,
    img: "9H.jpg"
  },
  {
    name: "nine",
    suit: "club",
    points: 9,
    img: "9C.jpg"
  },
  {
    name: "nine",
    suit: "diamond",
    points: 9,
    img: "9D.jpg"
  },
  {
    name: "eight",
    suit: "spade",
    points: 8,
    img: "8S.jpg"
  },
  {
    name: "eight",
    suit: "heart",
    points: 8,
    img: "8H.jpg"
  },
  {
    name: "eight",
    suit: "club",
    points: 8,
    img: "8C.jpg"
  },
  {
    name: "eight",
    suit: "diamond",
    points: 8,
    img: "8D.jpg"
  },
  {
    name: "seven",
    suit: "spade",
    points: 7,
    img: "7S.jpg"
  },
  {
    name: "seven",
    suit: "heart",
    points: 7,
    img: "7H.jpg"
  },
  {
    name: "seven",
    suit: "club",
    points: 7,
    img: "7C.jpg"
  },
  {
    name: "seven",
    suit: "diamond",
    points: 7,
    img: "7D.jpg"
  },
  {
    name: "six",
    suit: "spade",
    points: 6,
    img: "6S.jpg"
  },
  {
    name: "six",
    suit: "heart",
    points: 6,
    img: "6H.jpg"
  },
  {
    name: "six",
    suit: "club",
    points: 6,
    img: "6C.jpg"
  },
  {
    name: "six",
    suit: "diamond",
    points: 6,
    img: "6D.jpg"
  },
  {
    name: "five",
    suit: "spade",
    points: 5,
    img: "5S.jpg"
  },
  {
    name: "five",
    suit: "heart",
    points: 5,
    img: "5H.jpg"
  },
  {
    name: "five",
    suit: "club",
    points: 5,
    img: "5C.jpg"
  },
  {
    name: "five",
    suit: "diamond",
    points: 5,
    img: "5D.jpg"
  },
  {
    name: "four",
    suit: "spade",
    points: 4,
    img: "4S.jpg"
  },
  {
    name: "four",
    suit: "heart",
    points: 4,
    img: "4H.jpg"
  },
  {
    name: "four",
    suit: "club",
    points: 4,
    img: "4C.jpg"
  },
  {
    name: "four",
    suit: "diamond",
    points: 4,
    img: "4D.jpg"
  },
  {
    name: "three",
    suit: "spade",
    points: 3,
    img: "3S.jpg"
  },
  {
    name: "three",
    suit: "heart",
    points: 3,
    img: "3H.jpg"
  },
  {
    name: "three",
    suit: "club",
    points: 3,
    img: "3C.jpg"
  },
  {
    name: "three",
    suit: "diamond",
    points: 3,
    img: "3D.jpg"
  },
  {
    name: "two",
    suit: "spade",
    points: 2,
    img: "2S.jpg"
  },
  {
    name: "two",
    suit: "heart",
    points: 2,
    img: "2H.jpg"
  },
  {
    name: "two",
    suit: "club",
    points: 2,
    img: "2C.jpg"
  },
  {
    name: "two",
    suit: "diamond",
    points: 2,
    img: "2D.jpg"
  }
]

// ************ Function to shuffle deck ************ //

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array){
  let shuffledDeck = []
  while(array.length !== 0){
    const randomCard = array.splice(randomNumber(0, array.length - 1), 1)[0]
    shuffledDeck.push(randomCard)
  }
  return shuffledDeck
}

const shuffledDeck = shuffle(cardDeck)

const dealerTray = document.querySelector(".dealer-tray")
const playerTray = document.querySelector(".player-tray")
const hit = document.querySelector(".hit")
const stand = document.querySelector(".stand")
const drawCard = document.querySelector(".draw")
const playerTotal = document.querySelector(".player-total")
const hitButton = document.querySelector(".actionHit")
const standButton = document.querySelector(".actionStand")


// ************ Click events for Hit and Stand ************ //



hit.addEventListener("click", function(event){
  let img = document.createElement("img")
  let newCard = (shuffledDeck.pop())
  img.setAttribute("src", newCard.img)
  img.setAttribute("data", newCard.points)
  playerTray.appendChild(img)
  playerTotal.innerHTML = playerPointTotal(playerTray.children)
})

stand.addEventListener("click", function(event){
  
})


// ************ Click event for Deal Cards ************ //


drawCard.addEventListener("click", function(event){
  let newCard1 = shuffledDeck.splice(shuffledDeck.length - 1, 1)[0]
  let newCard2 = shuffledDeck.splice(shuffledDeck.length - 2, 1)[0]
  let card1 = document.createElement("img")
  card1.setAttribute("src", newCard1.img)
  card1.setAttribute("data", newCard1.points)
  let card2 = document.createElement("img")
  card2.setAttribute("src", newCard2.img)
  card2.setAttribute("data", newCard2.points)
  let cardBack1 = document.createElement("img")
  cardBack1.setAttribute("src", "bicycleRed.png")
  let cardBack2 = document.createElement("img")
  cardBack2.setAttribute("src", "bicycleRed.png")
  playerTray.appendChild(card1)
  playerTray.appendChild(card2)
  dealerTray.appendChild(cardBack1)
  dealerTray.appendChild(cardBack2)
  if(playerTray.childElementCount > 0){
    drawCard.classList.add("d-none")
  }
  else {
    drawCard.classList.remove("d-none")
  }
  hitButton.classList.remove("d-none")
  standButton.classList.remove("d-none")
  playerTotal.innerHTML = 0
  playerTotal.innerHTML = playerPointTotal(playerTray.children)
})


// ************ Display Player Card Total ************ //

function playerPointTotal(array) {
  let total = 0
  for(let i of array){
    total += Number(i.getAttribute("data"))
  }
  return total
}
