/* Imports */

/* Get DOM Elements */
const affirmmeBtn = document.getElementById('affirm me');
const promptSection = document.getElementById('prompt');
const affirmationSection = document.getElementById('affirmation');
const answersP = document.getElementById('answers');
const resetBtn = document.getElementById('reset');
const submitBtn = document.getElementById('submit-button');
/* State */

/* Events */
submitBtn.addEventListener('click', () => {
    // hide prompt
    // display image
    toggleSections();
    // pick a random number betwen 0 and length of the answers array - 1
    const randomInt = Math.floor(Math.random() * answers.length);
    // console.log(randomInt);
    const randomChoice = answers[randomInt];
    //console.log(randomChoice);
    //console.log('answers[19]'), answers[19]);
    //set the content of the answer p to the random choice
    answersP.textContent = randomChoice;
});

resetBtn.addEventListener('click', () => {
    // hide 8 ball and the answer
    //show prompt
});

function toggleSections() {
    affirmationSection.classList.toggle('hide');
    answersSection.classList.toggle('hide');
}

const answers = [
    'You deserve love',
    'You are worthy of respect',
    'Everything you need is inside of you',
    'Yes, you can',
    'Treat yourself',
    'Nothing is too hard for you',
    'All things are working for your good',
    'You have plently to offer',
    'You bring joy to those around you',
    'You are an important part of your loved ones life',
    'You are beautiful',
    'Your shape or size does not dictate your worth',
    'Money comes to you easily',
    'You have money in your account',
    'You have food on your table',
    'Everyday brings something to be grateful for',
    'You have all you need to succeed',
    'You belong here',
    'You have nothing to prove',
];
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
