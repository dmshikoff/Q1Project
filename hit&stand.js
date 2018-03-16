// ************ Sub-Functions for Hitting and Standing ************ //

function acesToOne(cards) {
  let total = pointTotal(cards)
  while (total > 21 && Array.from(cards).filter(isAceValue11).length !== 0) {
    const card = Array.from(cards).filter(isAceValue11)[0]
    card.setAttribute("data", 1)
    total = pointTotal(cards)
  }
  return total
}

function endOfHandSet() {
  document.querySelector(".betSlider").classList.remove("d-none")
  document.querySelector(".dealCardsButton").classList.remove("d-none")
  document.querySelector(".hitButton").classList.add("d-none")
  document.querySelector(".standButton").classList.add("d-none")
}

function isAceValue11(element) {
  return Number(element.getAttribute("data")) === 11
}

function endOfHand() {
  endOfHandSet()
  // saveToLocalStorage(shuffledSixDecks, "myDeck")
  saveToLocalStorage(document.querySelector(".chipCount").innerHTML, "myTokens")
  let faceImg = dealerTray.firstElementChild.getAttribute("data-img")
  dealerTray.firstElementChild.setAttribute("src", faceImg)
  if (Number(document.querySelector(".chipCount").innerHTML) === 0) {
    document.querySelector(".chipCount").innerHTML = 500
  }
}

function accessLocalStorage(string, data) {
  let persistingData = localStorage.getItem(string) ? JSON.parse(localStorage.getItem(string)) : data;
  return persistingData
}

function hitCard(deck) {
  let hitArray = []
  let newCard = getCard(deck)
  hitArray.push(newCard)
  return hitArray
}

function convertHitCardToImgArray(array) {
  let imgArray = []
  let img = document.createElement("img")
  img.setAttribute("src", array[0].img)
  img.setAttribute("data-points", array[0].points)
  img.setAttribute("data-name", array[0].name)
  imgArray.push(img)
  return imgArray
}

function render(cardContainer, array, fn) {
  array.forEach(function(ele) {
    cardContainer.appendChild(ele)
  })
  if (fn) fn(array)
}

// ************ Hit and Stand ************ //

document.querySelector(".hit").addEventListener("click", function(event) {
  render(
    playerTray,
    convertHitCardToImgArray(
      hitCard("myDeck")), false)

  playerTotal.innerHTML = pointTotal(playerTray.children)
  // saveToLocalStorage(shuffledSixDecks, "myDeck")

  if (Number(playerTotal.innerHTML) === 21) {
    document.querySelector(".result").innerHTML = "Player Wins!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) + betAmount(document.querySelector(".betSlider").value)
    endOfHand()
  } else if (Number(playerTotal.innerHTML) > 21) {
    document.querySelector(".result").innerHTML = "Player Bust!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) - betAmount(document.querySelector(".betSlider").value)
    endOfHand()
  }
})

document.querySelector(".stand").addEventListener("click", function(event) {
  while (Number(dealerTotal.innerHTML) < 17) {
    render(dealerTray, convertHitCardToImgArray(hitCard("myDeck")), false)
  }
  if (Number(dealerTotal.innerHTML) < Number(playerTotal.innerHTML) && [17, 18, 19, 20].includes(Number(dealerTotal.innerHTML))) {
    document.querySelector(".result").innerHTML = "Player Wins!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) + betAmount(document.querySelector(".betSlider").value)
    endOfHand()
  }
  if (Number(dealerTotal.innerHTML) > Number(playerTotal.innerHTML) && Number(dealerTotal.innerHTML) < 21) {
    document.querySelector(".result").innerHTML = "Dealer Wins!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) - betAmount(document.querySelector(".betSlider").value)
    endOfHand()
  }
  if (Number(dealerTotal.innerHTML) > 21) {
    document.querySelector(".result").innerHTML = "Dealer Busts!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) + betAmount(document.querySelector(".betSlider").value)
    endOfHand()
  }
  if (Number(dealerTotal.innerHTML) === Number(playerTotal.innerHTML)) {
    document.querySelector(".result").innerHTML = "Push!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML)
    endOfHand()
  }
})
