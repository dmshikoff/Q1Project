// ************ Sub-Functions for Hit and Stand ************ //

function isAceValue11(element){
  return Number(element.getAttribute("data")) === 11
}

function pointTotal(array) {
  let total = 0
  for (let i of array) {
    total += Number(i.getAttribute("data"))
  }
  return total
}

function acesToOne(cards){
  let total = pointTotal(cards)
  while(total > 21 && Array.from(cards).filter(isAceValue11).length !== 0){
    const card = Array.from(cards).filter(isAceValue11)[0]
    card.setAttribute("data", 1)
    total = pointTotal(cards)
  }
  return total
}

function endOfHand() {
  hitButton.classList.add("d-none")
  standButton.classList.add("d-none")
  form.classList.remove("d-none")
  let faceImg = dealerTray.firstElementChild.getAttribute("data-img")
  dealerTray.firstElementChild.setAttribute("src", faceImg)
  submittedBet.innerHTML = ""
  betInput.setAttribute("max", tokenTotal.innerHTML)
}

function hitPlayer() {
  let img = document.createElement("img")
  let newCard = (shuffledSixDecks.pop())
  img.setAttribute("src", newCard.img)
  img.setAttribute("data", newCard.points)
  img.setAttribute("data-cName", newCard.name)
  playerTray.appendChild(img)
  let total = acesToOne(playerTray.children)
  playerTotal.innerHTML = total
}

function hitDealer() {
  let img = document.createElement("img")
  let newCard = (shuffledSixDecks.pop())
  img.setAttribute("src", newCard.img)
  img.setAttribute("data", newCard.points)
  img.setAttribute("data-cName", newCard.name)
  dealerTray.appendChild(img)
  let total = acesToOne(dealerTray.children)
  dealerTotal.innerHTML = total
}


// ************ Hit and Stand ************ //

hit.addEventListener("click", function(event) {
  hitPlayer()
  if (Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Player Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + Number(betAmount)
    endOfHand()
  } else if (Number(playerTotal.innerHTML) > 21) {
    result.innerHTML = "Player Bust!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - Number(betAmount)
    endOfHand()
  }
})

stand.addEventListener("click", function(event) {
  while(Number(dealerTotal.innerHTML) < 17){
    hitDealer()
  }
  if(Number(dealerTotal.innerHTML) < Number(playerTotal.innerHTML) && [17,18,19,20].includes(Number(dealerTotal.innerHTML))){
    result.innerHTML = "Player Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + Number(betAmount)
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) > Number(playerTotal.innerHTML) && Number(dealerTotal.innerHTML) < 21){
    result.innerHTML = "Dealer Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - Number(betAmount)
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) > 21){
    result.innerHTML = "Dealer Busts!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + Number(betAmount)
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) === Number(playerTotal.innerHTML)){
    result.innerHTML = "Push!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML)
    endOfHand()
  }
})
