// ************ Sub-Functions for Click event for Deal Cards ************ //

function dealPlayerCard() {
  let newCard = (shuffledSixDecks.pop())
  let pcard = document.createElement("img")
  pcard.setAttribute("src", newCard.img)
  pcard.setAttribute("data", newCard.points)
  pcard.setAttribute("data-cName", newCard.name)
  playerTray.appendChild(pcard)
  playerTotal.innerHTML = pointTotal(playerTray.children)
}

function dealDealerCard() {
  let newCard = (shuffledSixDecks.pop())
  let dcard = document.createElement("img")
  dcard.setAttribute("src", newCard.img)
  dcard.setAttribute("data", newCard.points)
  dcard.setAttribute("data-cName", newCard.name)
  dealerTray.appendChild(dcard)
  dealerTotal.innerHTML = pointTotal(dealerTray.children)
}

function dealDealerCardback() {
  let newCard = (shuffledSixDecks.pop())
  let cardBack = document.createElement("img")
  cardBack.setAttribute("src", "bicycleRed.png")
  cardBack.setAttribute("data-img", newCard.img)
  cardBack.setAttribute("data", newCard.points)
  cardBack.setAttribute("data-cName", newCard.name)
  dealerTray.appendChild(cardBack)
  dealerTotal.innerHTML = pointTotal(dealerTray.children)
}

function clearTotals() {
  playerTray.innerHTML = ""
  result.innerHTML = ""
  dealerTray.innerHTML = ""
}


// ************ Click event for Deal Cards ************ //

drawCard.addEventListener("click", function(event) {
  clearTotals()
  dealPlayerCard()
  dealDealerCardback()
  dealPlayerCard()
  dealDealerCard()
  if (playerTray.childElementCount > 0) {
    drawCard.classList.add("d-none")
  }
  else {
    drawCard.classList.remove("d-none")
  }
  hitButton.classList.remove("d-none")
  standButton.classList.remove("d-none")
  if (Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Player Blackjack!"
    endOfHand()
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) !== 21) {
    result.innerHTML = "Dealer Blackjack!"
    endOfHand()
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) === 21) {
    endOfHand()
  }
})
