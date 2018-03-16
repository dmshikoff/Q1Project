# Online Blackjack

As my Quarter 1 project, I chose to code a web version of a game. I don't typically care for the types of games that are fitting for a web application, but I do enjoy cards games. Narrowing it down to single player games; Solitaire and Blackjack, I settled on Blackjack due to its more simplified rules, and interactivity with a non-playing "dealer".

## Getting Started

The very first step I took was setting the stage. Getting the basic layout designed would create a place for me to begin coding functionality and interactivity. I researched a number of online casino sites to get an idea of how to set up the layout.

## Coding Blackjack

Before I began coding the gameplay, I first needed to create the resources. You can't play Blackjack without a deck of cards; and for this version I needed 6 decks combined. Next step, shuffle it.

I wanted my code to replicate reality as closely as possible. I created an array of objects that each represented one card. After shuffling the array with a simple randomizing function I would deal 2 "cards" to the player and then the dealer, popping off each object from the "top" of the array.

When the player wishes to "hit" or add another card to their hand, another card object would pop off the top of the shuffled deck array and be placed in their hand.

Once the player opts to "stand", it is then the dealer's turn to hit until a final number is reached. Setting the conditions for the dealer to hit was relatively simple, as they should always try to beat the player, even if it puts them at risk of going over 21; with the exception of a few casino rules.

## Implementations Yet to be Implemented

I have not yet created a "split" function and have not implemented any card animations. Both will be my next steps with this project. I would also like to improve the user interface by streamlining the betting process as well as denoting the "deal", "hit" and "stand" buttons a bit more clearly.

## Technologies

I built this using HTML/CSS with Bootstrap and JavaScript and deployed it using Surge.


## The Road Here

I created this web app only 1 month into my web-dev education. The thought of coding this app was daunting at first, but once I broke down the gameplay into a set of rules and processes, I found coding each chunk very manageable.

## Authors

Daniel Shikoff

## License

Do what you please with this project. I consider it open-source. If you like playing Blackjack and would like to download and add your own code, feel free to access the files contained in this repository.
