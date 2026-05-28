// FOOD CARD MESSAGES

const foodCards = document.querySelectorAll(".food-card");

const foodMessage = document.getElementById("foodMessage");

foodCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const message = card.getAttribute("data-message");

        foodMessage.textContent = message;

    });

});


// RANDOM CRAVING BUTTON

const randomBtn = document.getElementById("randomBtn");

const heroRandomBtn = document.getElementById("heroRandomBtn");

const randomResult = document.getElementById("randomResult");

const heroResult = document.getElementById("heroResult");

const cravings = [

    "🍕 You need cheesy pizza tonight.",

    "🍜 Spicy ramen is calling your name.",

    "🍰 Chocolate dessert activated.",

    "🍔 Double burger craving detected.",

    "🌮 Tacos would fix everything right now.",

    "🍟 Fries are the correct decision.",

    "🥤Cold drink + late night snack combo unlocked.",

    "🍩 Donuts are the vibe tonight."

];

function pickRandomCraving() {

    const randomIndex = Math.floor(Math.random() * cravings.length);

    const result = cravings[randomIndex];

    randomResult.textContent = result;

    heroResult.textContent = result;

}

randomBtn.addEventListener("click", pickRandomCraving);

heroRandomBtn.addEventListener("click", pickRandomCraving);


// MOOD BUTTONS

const moodButtons = document.querySelectorAll(".mood-btn");

moodButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const moodFood = button.getAttribute("data-food");

        randomResult.textContent = moodFood;

    });

});


// LIGHT / DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";

    }

    else {

        themeBtn.textContent = "🌙";

    }

});