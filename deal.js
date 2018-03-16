// ************ Sub-Functions for Click event for Deal Cards ************ //

function saveToLocalStorage(data, string) {
  const stringifiedData = JSON.stringify(data)
  localStorage.setItem(string, stringifiedData)
}

// function accessLocalStorage(string, data) {
//   let persistingData = localStorage.getItem(string) ? JSON.parse(localStorage.getItem(string)) : data;
//   return persistingData
// }

function accessLocalStorage(string) {
  return JSON.parse(localStorage.getItem(string))
}

function getCard(deck){
  const data = accessLocalStorage(deck)
  const retVal = data.pop()
  saveToLocalStorage(data.filter(function(ele){return ele !== undefined}), deck)
  return retVal
}


function dealCards(deck, arrayOfFaces = [true,true]) {
  let handArray = []
  let newCard = Object.assign(getCard(deck), {showFace: arrayOfFaces[0]})
  handArray.push(newCard)
  if (handArray.length < 2) {
    handArray.push(Object.assign(getCard(deck), {showFace: arrayOfFaces[1]}))
  }
  return handArray
}

function convertDealCardToImgArray(array) {
  let cardArray = []
  for (let i of array) {
    let card = document.createElement("img")
    if (!i.showFace) {
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
  dealButtonSet()
  clear(playerTray, dealerTray, dealerTotal, playerTotal, document.querySelector(".result"))
  render(
    playerTray,
    convertDealCardToImgArray(
      dealCards("myDeck", [true, true])),
    function(array) {
      document.querySelector(".player-total").innerHTML = pointTotal(array)
    }
  )

  render(
    dealerTray,
    convertDealCardToImgArray(
        dealCards('myDeck', [false, true])),
    function(array) {
      document.querySelector(".dealer-total").innerHTML = pointTotal(array)
    }
  )


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
