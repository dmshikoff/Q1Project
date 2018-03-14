// ************ Sub-Functions for Click event for Deal Cards ************ //

function deal(tray, total, faceDown, placement, cardNumber){
  let persistingDeck = JSON.parse(localStorage.getItem("myDeck")) ? JSON.parse(localStorage.getItem("myDeck")) : shuffledSixDecks;
  let newCard = (persistingDeck.pop())
  const myDeck = JSON.stringify(persistingDeck)
  // let deck = document.querySelector(cardNumber)
  localStorage.setItem("myDeck", myDeck)
  let card = document.createElement("img")
  if(faceDown){
    card.setAttribute("src", "bicycleRed.png")
    card.setAttribute("data-img", newCard.img)
  }
  else {
    card.setAttribute("src", newCard.img)
  }
  card.setAttribute("data", newCard.points)
  card.setAttribute("data-cName", newCard.name)
  total.innerHTML = pointTotal(tray.children)
  // deck.classList.add(placement)
  // setTimeout(function() {
  //   tray.appendChild(card)
  //   deck.classList.add("d-none")
  //   deck.classList.remove(placement)
  //   deck.classList.remove("d-none")
  // }, 250)
  tray.appendChild(card)
}

function clear(){
  for(const e in arguments)
    arguments[e].innerHTML = ''
}


// ************ Click event for Deal Cards ************ //

document.querySelector(".draw").addEventListener("click", function(event) {
  const drawCard = document.querySelector(".draw")
  const hitButton = document.querySelector(".actionHit")
  const standButton = document.querySelector(".actionStand")
  const tokenTotal = document.querySelector(".odometer")
  const result = document.querySelector(".result")
  const slider = document.querySelector(".slider")
  let deck = document.querySelector(".dealCard")
  slider.classList.add("d-none")
  clear(playerTray, result, dealerTray)
  deal(playerTray, playerTotal, false, "pDealtCard1", ".dealCard1")
  deal(dealerTray, dealerTotal, true)
  deal(playerTray, playerTotal, false, "pDealtCard2", ".dealCard2")
  deal(dealerTray, dealerTotal, false)
  drawCard.classList.add("d-none")
  hitButton.classList.remove("d-none")
  standButton.classList.remove("d-none")
  if (Number(playerTotal.innerHTML) === 21 && Number(dealerTotal.innerHTML) !== 21) {
    result.innerHTML = "Player Blackjack!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + Math.ceil(betAmount(slider.value)*1.5)
    endOfHand()
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) !== 21) {
    result.innerHTML = "Dealer Blackjack!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - betAmount(slider.value)
    endOfHand()
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Push!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML)
    endOfHand()
  }
})

// ************ Betting Functionality ************ //

// let betAmount;

function betAmount(value){
  let betAmount;
  if(Number(value) === 1){
    betAmount = 5
  }
  if(Number(value) === 34){
    betAmount = 25
  }
  if(Number(value) === 67){
    betAmount = 50
  }
  if(Number(value) === 100){
    betAmount = 100
  }
  return betAmount
}
