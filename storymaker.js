// Arrays for each category
const nouns1 = ['The Turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The Elephant', 'The cat'];
const verbs = ['Sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Event listeners for each button
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);

// Functions for each button click
function noun1_on_click() {
    const randomNoun1 = getRandomElement(nouns1);
    document.getElementById('choosenNoun1').textContent = `Noun 1: ${randomNoun1}`;
}

function verb_on_click() {
    const randomVerb = getRandomElement(verbs);
    document.getElementById('choosenVerb').textContent = `Verb: ${randomVerb}`;
}

function adjective_on_click() {
    const randomAdjective = getRandomElement(adjectives);
    document.getElementById('choosenAdjective').textContent = `Adjective: ${randomAdjective}`;
}

function noun2_on_click() {
    const randomNoun2 = getRandomElement(nouns2);
    document.getElementById('choosenNoun2').textContent = `Noun 2: ${randomNoun2}`;
}

function setting_on_click() {
    const randomPlace = getRandomElement(places);
    document.getElementById('choosenSetting').textContent = `Place: ${randomPlace}`;
}

function playback_on_click() {
    // Concatenate the selected words
    const story = [
        document.getElementById('choosenNoun1').textContent,
        document.getElementById('choosenVerb').textContent,
        document.getElementById('choosenAdjective').textContent,
        document.getElementById('choosenNoun2').textContent,
        document.getElementById('choosenSetting').textContent
    ].filter(Boolean).join(' ');

    // Display the story
    document.getElementById('story').textContent = story;
}

function random_on_click() {
    // Get random words from each category
    const randomNoun1 = getRandomElement(nouns1);
    const randomVerb = getRandomElement(verbs);
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun2 = getRandomElement(nouns2);
    const randomPlace = getRandomElement(places);

    // Concatenate the random words
    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomPlace}`;

    // Display the random story
    document.getElementById('story').textContent = randomStory;
}

// Function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
// Event listeners for each button
document.getElementById('noun1').addEventListener('click', function() {
    updateButtonStyle('noun1');
    noun1_on_click();
});

document.getElementById('verb').addEventListener('click', function() {
    updateButtonStyle('verb');
    verb_on_click();
});

document.getElementById('adjective').addEventListener('click', function() {
    updateButtonStyle('adjective');
    adjective_on_click();
});

document.getElementById('noun2').addEventListener('click', function() {
    updateButtonStyle('noun2');
    noun2_on_click();
});

document.getElementById('setting').addEventListener('click', function() {
    updateButtonStyle('setting');
    setting_on_click();
});

document.getElementById('playback').addEventListener('click', function() {
    updateButtonStyle('playback');
    playback_on_click();
});

document.getElementById('random').addEventListener('click', function() {
    updateButtonStyle('random');
    random_on_click();
});

// Functions for each button click
function noun1_on_click() {
    const randomNoun1 = getRandomElement(nouns1);
    document.getElementById('choosenNoun1').textContent = `Noun 1: ${randomNoun1}`;
}

// ... (Other button functions)

// Function to update button style to black and white
function updateButtonStyle(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
}
// Arrays for each category
// ... (Your existing arrays)

// Event listeners for each button
document.getElementById('noun1').addEventListener('click', () => handleButtonClick(noun1_on_click));
document.getElementById('verb').addEventListener('click', () => handleButtonClick(verb_on_click));
document.getElementById('adjective').addEventListener('click', () => handleButtonClick(adjective_on_click));
document.getElementById('noun2').addEventListener('click', () => handleButtonClick(noun2_on_click));
document.getElementById('setting').addEventListener('click', () => handleButtonClick(setting_on_click));
document.getElementById('playback').addEventListener('click', () => handleButtonClick(playback_on_click));
document.getElementById('random').addEventListener('click', () => handleButtonClick(random_on_click));

// Function to handle button clicks and change page background color
function handleButtonClick(callback) {
    // Change the background color to black and white
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    // Call the specific button click function
    callback();

    // Reset the background color after a delay (you can adjust the delay as needed)
    setTimeout(() => {
        document.body.style.backgroundColor = ''; // Reset to default
        document.body.style.color = ''; // Reset to default
    }, 2000); // Reset after 2 seconds (2000 milliseconds)
}

// ... (Your existing functions)
