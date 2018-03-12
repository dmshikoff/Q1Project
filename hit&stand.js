// ************ Click events for Hit and Stand ************ //

function endOfHand() {
  hitButton.classList.add("d-none")
  standButton.classList.add("d-none")
  drawCard.classList.remove("d-none")
  let faceImg = dealerTray.firstElementChild.getAttribute("data-img")
  dealerTray.firstElementChild.setAttribute("src", faceImg)
}




hit.addEventListener("click", function(event) {
  let img = document.createElement("img")
  let newCard = (shuffledDeck.pop())
  img.setAttribute("src", newCard.img)
  img.setAttribute("data", newCard.points)
  img.setAttribute("data-cName", newCard.name)
  playerTray.appendChild(img)
  playerTotal.innerHTML = pointTotal(playerTray.children)
  if (Number(playerTotal.innerHTML) === 21) {
    result.innerHTML = "Player Wins!!"
    endOfHand()
  } else if (Number(playerTotal.innerHTML) > 21) {
    result.innerHTML = "Player Bust"
    endOfHand()
  }
})

stand.addEventListener("click", function(event) {
  while(Number(dealerTotal.innerHTML) < 17){
    let newCard = shuffledDeck.splice(shuffledDeck.length - 1, 1)[0]
    let dcard = document.createElement("img")
    dcard.setAttribute("src", newCard.img)
    dcard.setAttribute("data", newCard.points)
    dcard.setAttribute("data-cName", newCard.name)
    dealerTray.appendChild(dcard)
    dealerTotal.innerHTML = pointTotal(dealerTray.children)
  }
  if(Number(dealerTotal.innerHTML) < Number(playerTotal.innerHTML) && [17,18,19,20].includes(Number(dealerTotal.innerHTML))){
    result.innerHTML = "Player Wins!"
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) > Number(playerTotal.innerHTML) && [Number(dealerTotal.innerHTML) < 21]){
    result.innerHTML = "Dealer Wins!!"
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) > 21){
    result.innerHTML = "Dealer Busts!!"
    endOfHand()
  }
  if(Number(dealerTotal.innerHTML) === Number(playerTotal.innerHTML)){
    result.innerHTML = "Push!"
    endOfHand()
  }
})
