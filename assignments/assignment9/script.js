// Quotes

const quotes = [
    "I have never tried to hide the fact that it is my intention to become the best. - Cristiano Ronaldo",
    "You have to fight to reach your dream. You have to sacrifice and work hard for it. - Lionel Messi",
    "The secret is to believe in your dreams; in your potential that you can be like your star, keep searching, keep believing and do not lose faith in yourself. - Neymar",
    "Talent without working hard is nothing. - Cristiano Ronaldo",
    "You can overcome anything if, and only if, you love something enough. - Lionel Messi"
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quote");

function displayQuote() {
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}

displayQuote();
setInterval(displayQuote, 2000);

//Rainbow

function createRainbow() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const rainbowContainer = document.getElementById('rainbow');
    let delay = 0;

    colors.forEach(color => {
        setTimeout(() => {
            const strip = document.createElement('div');
            strip.className = 'rainbow-strip';
            strip.style.backgroundColor = color;
            rainbowContainer.appendChild(strip);
        }, delay);
        delay += 500;
    });

    setTimeout(() => {
        const potOfGold = document.getElementById('pot-of-gold');
        potOfGold.style.display = 'block';
    }, delay + 500);
}
