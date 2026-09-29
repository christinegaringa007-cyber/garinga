// 1. FLOATING HEARTS EFFECT 💖
const heartsContainer = document.getElementById('heartsContainer');
const heartSymbols = ['💕', '💗', '💖', '💝', '✨', '🌸', '🌷'];

function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.fontSize = (12 + Math.random() * 14) + 'px';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

// Create hearts continuously
setInterval(createHeart, 600);


// 2. DAILY GRATITUDE QUOTE 💬
const quotes = [
    "Teachers plant seeds of knowledge that will grow forever. 🌱",
    "A good teacher can inspire hope, ignite the imagination, and instill a love of learning. ✨",
    "It takes a big heart to help shape little minds. ❤️",
    "Teaching is the one profession that creates all other professions. 🏆",
    "Thank you for helping me become the best version of myself. 💐",
    "Your influence lasts forever — you never know how far your reach will extend. 🌟",
    "To the world you may be just a teacher, but to your students you are a hero. 🦸‍♀️"
];

// Pick random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById('dailyQuote').innerText = "Thank you for being the best teacher!";


// 3. CURRENT DATE DISPLAY 📅
const now = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentDate').innerText = now.toLocaleDateString('en-US', options);


// 4. TITLE TYPING EFFECT ⌨️
const titleText = "Happy Teacher's Month! 🍎";
const titleElement = document.getElementById('mainTitle');
titleElement.innerText = '';
let charIndex = 0;

function typeTitle() {
    if (charIndex < titleText.length) {
        titleElement.innerText += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 120);
    }
}
// Start typing after page loads
window.addEventListener('load', typeTitle);