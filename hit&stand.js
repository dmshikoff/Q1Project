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
  const dealerTray = document.querySelector(".dealer-tray")
  const submittedBet = document.querySelector(".sub-bet")
  const betInput = document.querySelector(".bet-input")
  const tokenTotal = document.querySelector(".odometer")
  const deal = document.querySelector(".draw")
  const slider = document.querySelector(".slider")
  hitButton.classList.add("d-none")
  standButton.classList.add("d-none")
  deal.classList.remove("d-none")
  slider.classList.remove("d-none")
  let faceImg = dealerTray.firstElementChild.getAttribute("data-img")
  dealerTray.firstElementChild.setAttribute("src", faceImg)
  // const myDeck = JSON.stringify(shuffledSixDecks)
  // localStorage.setItem("myDeck", myDeck)
  if(Number(tokenTotal.innerHTML) === 0){
    tokenTotal.innerHTML = 500
    
  }
  const myTokens = JSON.stringify(tokenTotal.innerHTML)
  localStorage.setItem("myTokens", myTokens)
}

function hit(tray, total) {
  let persistingDeck = JSON.parse(localStorage.getItem("myDeck")) ? JSON.parse(localStorage.getItem("myDeck")) : shuffledSixDecks;
  let newCard = (persistingDeck.pop())
  const myDeck = JSON.stringify(persistingDeck)
  localStorage.setItem("myDeck", myDeck)
  let img = document.createElement("img")
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
  const tokenTotal = document.querySelector(".odometer")
  const slider = document.querySelector(".slider")
  hit(playerTray, playerTotal)
  if (Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Player Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + betAmount(slider.value)
    endOfHand()
  } else if (Number(playerTotal.innerHTML) > 21) {
    result.innerHTML = "Player Bust!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - betAmount(slider.value)
    endOfHand()
  }
})

document.querySelector(".stand").addEventListener("click", function(event) {
  const result = document.querySelector(".result")
  const tokenTotal = document.querySelector(".odometer")
  const slider = document.querySelector(".slider")
  while(Number(dealerTotal.innerHTML) < 17){
    hit(dealerTray, dealerTotal)
  }
  if(Number(dealerTotal.innerHTML) < Number(playerTotal.innerHTML) && [17,18,19,20].includes(Number(dealerTotal.innerHTML))){
    result.innerHTML = "Player Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + betAmount(slider.value)
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) > Number(playerTotal.innerHTML) && Number(dealerTotal.innerHTML) < 21){
    result.innerHTML = "Dealer Wins!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) - betAmount(slider.value)
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) > 21){
    result.innerHTML = "Dealer Busts!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML) + betAmount(slider.value)
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) === Number(playerTotal.innerHTML)){
    result.innerHTML = "Push!!"
    tokenTotal.innerHTML = Number(tokenTotal.innerHTML)
    endOfHand()
  }
})
