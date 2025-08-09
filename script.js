const wrongAnswers = [
    "Eat five star Do nothing", "Shubha dinam", "Blueberry", "Antarctica", "Kozhikode", 
    "Your mom's kitchen", "Under the sofa", "Banana", "The Moon", "A potato", 
    "42 but sideways", "SpongeBob SquarePants", "In your dreams", 
    "The Bermuda Triangle", "Somewhere in Kerala", "nalla chodhyam , adtha chodhyam..",
    "Definitely not here", "Under your pillow", "Ask Google", "I forgot",
    "Your neighbour’s fridge", "A secret I can't tell", "Mars Bar", 
    "Upside-down cake", "In the washing machine", "Parallel universe", 
    "Pizza Hut headquarters", "Between the couch cushions", 
    "Somewhere over the rainbow", "404 Not Found", 
    "The dark side of the moon", "In my imagination", "On vacation", 
    "Inside a coconut", "With the penguins", "Next to Area 51", 
    "On the roof", "In the matrix", "Lost in translation", 
    "In a galaxy far, far away", "Your WhatsApp group", "Behind you", 
    "Deep inside your heart", "Hidden in the code", "Shhh, it’s a secret",
    "Not my problem", "Ask again later", "Floating in space"
];

function getWrongAnswer() {
    return wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
}

function askQuestion() {
    const question = document.getElementById('question').value.trim();
    if (question === "") return;

    const answer = getWrongAnswer();
    const chatBox = document.getElementById('chat');

    chatBox.innerHTML += `<p><b>You:</b> ${question}</p>`;
    chatBox.innerHTML += `<p><b>WrongGPT:</b> ${answer}</p>`;

    document.getElementById('question').value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById('question').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        askQuestion();
    }
});
