// ************ Sub-Functions for Click event for Deal Cards ************ //


function deal(tray, total, faceDown){
  let persistingDeck = JSON.parse(localStorage.getItem("myDeck")) ? JSON.parse(localStorage.getItem("myDeck")) : shuffledSixDeck;
  let newCard = (persistingDeck.pop())
  const myDeck = JSON.stringify(persistingDeck)
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
  tray.appendChild(card)
  total.innerHTML = pointTotal(tray.children)
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
  const tokenTotal = document.querySelector(".token-total")
  const result = document.querySelector(".result")
  clear(playerTray, result, dealerTray)
  deal(playerTray, playerTotal, false)
  deal(dealerTray, dealerTotal, true)
  deal(playerTray, playerTotal, false)
  deal(dealerTray, dealerTotal, false)
  if (playerTray.childElementCount > 0) {
    drawCard.classList.add("d-none")
  }
  else {
    drawCard.classList.remove("d-none")
  }
  hitButton.classList.remove("d-none")
  standButton.classList.remove("d-none")
  if (Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Player Blackjack!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + (Number(betAmount)*1.5)
    endOfHand()
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) !== 21) {
    result.innerHTML = "Dealer Blackjack!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - Number(betAmount)
    endOfHand()
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Push!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML)
    endOfHand()
  }
})

// ************ Betting Functionality ************ //

let betAmount;

document.querySelector(".bet-submission").addEventListener("submit", function(event) {
  const tokenTotal = document.querySelector(".token-total")
  event.preventDefault()
  betAmount = document.querySelector(".bet-input").value
  document.querySelector(".bet-submission").classList.add("d-none")
  document.querySelector(".sub-bet").innerHTML = "Your Bet: " + betAmount
  document.querySelector(".bet-col").appendChild(document.querySelector(".sub-bet"))
  document.querySelector(".draw").classList.remove("d-none")
  document.querySelector(".bet-input").setAttribute("max", tokenTotal.innerHTML)
})
