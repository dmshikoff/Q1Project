// ************ Sub-Functions for Hitting and Standing ************ //

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
  const hitButton = document.querySelector(".actionHit")
  const standButton = document.querySelector(".actionStand")
  const form = document.querySelector(".bet-submission")
  const dealerTray = document.querySelector(".dealer-tray")
  const submittedBet = document.querySelector(".sub-bet")
  const betInput = document.querySelector(".bet-input")
  const tokenTotal = document.querySelector(".token-total")

  hitButton.classList.add("d-none")
  standButton.classList.add("d-none")
  form.classList.remove("d-none")
  let faceImg = dealerTray.firstElementChild.getAttribute("data-img")
  dealerTray.firstElementChild.setAttribute("src", faceImg)
  submittedBet.innerHTML = ""
  const myDeck = JSON.stringify(shuffledSixDecks)
  localStorage.setItem("myDeck", myDeck)
  if(Number(tokenTotal.innerHTML) === 0){
    tokenTotal.innerHTML = 500
    betInput.setAttribute("max", tokenTotal.innerHTML)
  }
  betInput.setAttribute("max", tokenTotal.innerHTML)
  const myTokens = JSON.stringify(tokenTotal.innerHTML)
  localStorage.setItem("myTokens", myTokens)
}

function hit(tray, total) {
  let img = document.createElement("img")
  let newCard = (shuffledSixDecks.pop())
  img.setAttribute("src", newCard.img)
  img.setAttribute("data", newCard.points)
  img.setAttribute("data-cName", newCard.name)
  tray.appendChild(img)
  let pointTotal = acesToOne(tray.children)
  total.innerHTML = pointTotal
}

// ************ Hit and Stand ************ //

document.querySelector(".hit").addEventListener("click", function(event) {
  const result = document.querySelector(".result")
  const tokenTotal = document.querySelector(".token-total")
  const total = Number(playerTotal.innerHTML)

  if (total < 21) return hit(playerTray, playerTotal)

  if (total === 21) {
    result.innerHTML = "Player Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + Number(betAmount)
  } else if (total > 21) {
    result.innerHTML = "Player Bust!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - Number(betAmount)
  }

  endOfHand()
})

document.querySelector(".stand").addEventListener("click", function(event) {
  const result = document.querySelector(".result")
  const tokenTotal = document.querySelector(".token-total")
  while(Number(dealerTotal.innerHTML) < 17){
    hit(dealerTray, dealerTotal)
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
