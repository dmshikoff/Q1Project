
// ************ Click event for Deal Cards ************ //

drawCard.addEventListener("click", function(event) {
  playerTray.innerHTML = ""
  result.innerHTML = ""
  dealerTray.innerHTML = ""
  let newCard1 = shuffledDeck.splice(shuffledDeck.length - 1, 1)[0]
  let newCard2 = shuffledDeck.splice(shuffledDeck.length - 2, 1)[0]
  let newCard3 = shuffledDeck.splice(shuffledDeck.length - 3, 1)[0]
  let newCard4 = shuffledDeck.splice(shuffledDeck.length - 4, 1)[0]
  let pcard1 = document.createElement("img")
  pcard1.setAttribute("src", newCard1.img)
  pcard1.setAttribute("data", newCard1.points)
  pcard1.setAttribute("data-cName", newCard1.name)
  let pcard2 = document.createElement("img")
  pcard2.setAttribute("src", newCard3.img)
  pcard2.setAttribute("data", newCard3.points)
  pcard2.setAttribute("data-cName", newCard3.name)
  let cardBack1 = document.createElement("img")
  cardBack1.setAttribute("src", "bicycleRed.png")
  cardBack1.setAttribute("data-img", newCard4.img)
  cardBack1.setAttribute("data", newCard4.points)
  cardBack1.setAttribute("data-cName", newCard4.name)
  let dcard2 = document.createElement("img")
  dcard2.setAttribute("src", newCard2.img)
  dcard2.setAttribute("data", newCard2.points)
  dcard2.setAttribute("data-cName", newCard2.name)
  playerTray.appendChild(pcard1)
  playerTray.appendChild(pcard2)
  dealerTray.appendChild(cardBack1)
  dealerTray.appendChild(dcard2)
  if (playerTray.childElementCount > 0) {
    drawCard.classList.add("d-none")
  } else {
    drawCard.classList.remove("d-none")
  }
  hitButton.classList.remove("d-none")
  standButton.classList.remove("d-none")
  playerTotal.innerHTML = pointTotal(playerTray.children)
  dealerTotal.innerHTML = pointTotal(dealerTray.children)
  if (Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Player Blackjack!"
    hitButton.classList.add("d-none")
    standButton.classList.add("d-none")
    drawCard.classList.remove("d-none")
    let faceImg = cardBack1.getAttribute("data-img")
    cardBack1.setAttribute("src", faceImg)
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) !== 21) {
    result.innerHTML = "Dealer Blackjack!"
    hitButton.classList.add("d-none")
    standButton.classList.add("d-none")
    drawCard.classList.remove("d-none")
    let faceImg = cardBack1.getAttribute("data-img")
    cardBack1.setAttribute("src", faceImg)
  } else if (Number(dealerTotal.innerHTML) === 21 && Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Push"
    hitButton.classList.add("d-none")
    standButton.classList.add("d-none")
    drawCard.classList.remove("d-none")
    let faceImg = cardBack1.getAttribute("data-img")
    cardBack1.setAttribute("src", faceImg)
  }
})
