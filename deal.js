// ************ Sub-Functions for Click event for Deal Cards ************ //

function saveToLocalStorage(data, string) {
  const stringifiedData = JSON.stringify(data)
  localStorage.setItem(string, stringifiedData)
}

function accessLocalStorage(string, data) {
  let persistingData = localStorage.getItem(string) ? JSON.parse(localStorage.getItem(string)) : data;
  return persistingData
}

function dealCards(deck) {
  let handArray = []
  let newCard = deck.pop()
  handArray.push(newCard)
  if (handArray.length < 2) {
    handArray.push(deck.pop())
  }
  return handArray
}

function convertDealCardToImgArray(faceDown, array) {
  let cardArray = []
  for (let i of array) {
    let card = document.createElement("img")
    if (faceDown) {
      card.setAttribute("src", "bicycleRed.png")
      card.setAttribute("data-img", i.img)
    } else {
      card.setAttribute("src", i.img)
    }
    card.setAttribute("data-points", i.points)
    card.setAttribute("data-name", i.name)
    cardArray.push(card)
  }
  return cardArray
}

function pointTotal(array) {
  let total = 0
  for (let i of array) {
    total += Number(i.getAttribute("data-points"))
  }
  return total
}

function clear() {
  for (const e in arguments)
    arguments[e].innerHTML = ''
}

function dealButtonSet() {
  document.querySelector(".betSlider").classList.add("d-none")
  document.querySelector(".dealCardsButton").classList.add("d-none")
  document.querySelector(".hitButton").classList.remove("d-none")
  document.querySelector(".standButton").classList.remove("d-none")
}

// ************ Click event for Deal Cards ************ //

document.querySelector(".dealCardsButton").addEventListener("click", function(event) {
  render(
    playerTray,
    convertDealCardToImgArray(false,
      dealCards(
        accessLocalStorage("myDeck", shuffledSixDecks))),
    function(array) {
      document.querySelector(".player-total").innerHTML = pointTotal(array)
    }
  )

  dealButtonSet()
  if (pointTotal(Array.from(dealerTray.children)) === 21 && pointTotal(Array.from(playerTray.children)) === 21) {
    document.querySelector(".result").innerHTML = "Push!!"
    document.querySelector(".chipCount").innerHTML = document.querySelector(".chipCount").innerHTML
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) + Math.ceil(betAmount(document.querySelector(".betSlider").value) * 1.5)
    endOfHand()
  } else if (pointTotal(Array.from(dealerTray.children)) === 21) {
    document.querySelector(".result").innerHTML = "Dealer Blackjack!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML) - betAmount(document.querySelector(".betSlider").value)
    endOfHand()
  } else if (pointTotal(Array.from(playerTray.children)) === 21) {
    document.querySelector(".result").innerHTML = "Push!!"
    document.querySelector(".chipCount").innerHTML = Number(document.querySelector(".chipCount").innerHTML)
    endOfHand()
  }

})

// ************ Betting Functionality ************ //

function betAmount(value) {
  let betAmount;
  if (Number(value) === 1) {
    betAmount = 5
  }
  if (Number(value) === 34) {
    betAmount = 25
  }
  if (Number(value) === 67) {
    betAmount = 50
  }
  if (Number(value) === 100) {
    betAmount = 100
  }
  return betAmount
}
