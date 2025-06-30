import { getRootCssStyles } from './cssUtilities.js';

// Utility: Returns a random integer between min and max this is so the books have differing sizes
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility: Picks a random item from an array
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Get references to DOM elements for each book part
let spines = Object.values(document.getElementsByClassName("spine"));
let covers = Object.values(document.getElementsByClassName("cover"));
let tops = Object.values(document.getElementsByClassName("top"));

// Get available CSS pattern variables from :root (e.g., --spine-tartan, etc.)
let availablePatterns = getRootCssStyles();

// Define a palette of allowed solid colors
let availableColors = [
    "maroon",
    "darkgreen",
    "darkolivegreen",
    "brown",
    "saddlebrown",
    "sienna",
    "midnightblue",
];

// Assign a random height, pattern, and color to each book
spines.map(function (s, i) {
    let randomHeight = getRandomInt(220, 290);
    s.style.height = `${randomHeight}px`;
    s.style.top = `${280 - randomHeight}px`;

    // Apply a random background pattern from :root
    let randomPattern = randomChoice(availablePatterns);
    s.style.backgroundImage = `var(${randomPattern})`;

    // Pick a random color for both the spine and cover
    let randomColor = randomChoice(availableColors);
    s.style.backgroundColor = randomColor;

    // Apply the same height and top offset to the cover
    covers[i].style.height = `${randomHeight}px`;
    covers[i].style.top = `${280 - randomHeight}px`;

    // Apply a solid color background
    covers[i].style.backgroundColor = randomColor;

    // Adjust the top face of the book accordingly
    tops[i].style.top = `${280 - randomHeight}px`;
});

//When the book stops doing its animation we should be able to click it and then we can see the inside and flip through the pages
