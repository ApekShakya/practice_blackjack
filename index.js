let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsUI = document.getElementById("cards")
let newCardButton = document.getElementById("new-card-btn")

newCardButton.style.visibility = "hidden";

function generateNewCard() {
    let newCard = Math.floor(Math.random() * 10) + 1;
    while (cards.filter(e => e == newCard).length > 4) {
        newCard = Math.floor(Math.random() * 10) + 1;
    }
    cards.push(newCard);
}

function startGame() {
    cards = [];
    cardsUI.innerHTML = "";
    newCardButton.style.visibility = "visible";
    generateNewCard();
    generateNewCard();
    renderGame();
}

function renderGame() {
    sum = 0;
    cardsUI.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
        sumEl.textContent = sum;
        cardsUI.innerHTML += `<div class="card">
            <span class="card-number top-left">${cards[i]}</span>
            <span class="card-number bottom-right">${cards[i]}</span>
        </div>`;
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        newCardButton.style.visibility = "hidden";
    } else {
        message = "You're out of the game!"
        isAlive = false
        newCardButton.style.visibility = "hidden";
    }
    messageEl.textContent = message
}


function newCard() {
    generateNewCard();
    renderGame();
}
