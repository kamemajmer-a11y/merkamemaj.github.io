const foodCards = document.querySelectorAll(".food-card");
const foodMessage = document.getElementById("foodMessage");

const modal = document.getElementById("foodModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");
const modalCalories = document.getElementById("modalCalories");
const modalIngredients = document.getElementById("modalIngredients");

foodCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const message = card.getAttribute("data-message");

        foodMessage.textContent = message;

        foodCards.forEach(function(item) {
            item.classList.remove("clicked");
        });

        card.classList.add("clicked");

        modalImage.src = card.getAttribute("data-image");
        modalTitle.textContent = card.getAttribute("data-title");
        modalRating.textContent = card.getAttribute("data-rating");
        modalDescription.textContent = card.getAttribute("data-description");
        modalCalories.textContent = card.getAttribute("data-calories");
        modalIngredients.textContent = card.getAttribute("data-ingredients");

        modal.classList.add("active");
    });
});

closeModal.addEventListener("click", function() {
    modal.classList.remove("active");
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

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
    "🥤 Cold drink + late night snack combo unlocked.",
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

const moodButtons = document.querySelectorAll(".mood-btn");

moodButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const moodFood = button.getAttribute("data-food");

        randomResult.textContent = moodFood;
        heroResult.textContent = moodFood;
    });
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});