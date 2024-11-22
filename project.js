const flashcards = [
    { "question": "What is HTML?", "answer": "is the standard language used to create and structure web pages." },
    { "question": "What is JavaScript?", "answer": "JavaScript is a language that makes websites interactive." },
    { "question": "What are variables?", "answer": "Variables are like boxes that hold information" },
    { "question": "What are tags?", "answer": "Tags are special codes in HTML that tell the web browser how to display content." },
    { "question": "What are attributes?", "answer": "Attributes are extra pieces of information that you can add to HTML tags to provide more details." },
    { "question": "What is CSS?", "answer": "CSS is a language used to style and design web pages." },
    
];

var flashcardsInUse = flashcards;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


let currentCard = getRandomInt(flashcardsInUse.length);
flashcardsInUse.splice(currentCard-1,1);
const flashcardsElement = document.getElementById("flashcard");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayCard() {
    flashcardsElement.classList.remove("flashcard-is-flipped"); 
        await sleep(500); // Optionally, add a small delay if desired
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;
}

document.getElementById("flip-card").addEventListener("click", () => {
    flashcardsElement.classList.toggle("flashcard-is-flipped");
});

document.getElementById("next-card").addEventListener("click", () => {
   // currentCard = (currentCard + 1) % flashcards.length; // Loop through cards 
    currentCard = getRandomInt(flashcardsInUse.length);
    flashcardsInUse.splice(currentCard-1,1);
   displayCard(); // Show the next card
});

// Initialize the first card on page load
displayCard();

