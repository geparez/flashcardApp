const cards = [
    { "question": "What is HTML?", "answer": "is the standard language used to create and structure web pages." },
    { "question": "What is JavaScript?", "answer": "JavaScript is a language that makes websites interactive." },
    { "question": "What are variables?", "answer": "Variables are like boxes that hold information" },
    { "question": "What are tags?", "answer": "Tags are special codes in HTML that tell the web browser how to display content." },
    { "question": "What are attributes?", "answer": "Attributes are extra pieces of information that you can add to HTML tags to provide more details." },
    { "question": "What is CSS?", "answer": "CSS is a language used to style and design web pages." },
    
];

let shownCards = []; // Tracks shown cards


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


// Function to get a random card that hasn't been shown
function getRandomCard() {
    if (shownCards.length === cards.length) {
        shownCards = []; // Reset shown cards
    }

    let card;
    do {
        card = cards[Math.floor(Math.random() * cards.length)];
    } while (shownCards.includes(card));

    shownCards.push(card);
    return card;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayCard(card) {
    if (!card) return;
    
    const cardElement = document.getElementById("card");
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");


    // Flip to the front side before updating content
    cardElement.classList.remove("flashcard-is-flipped"); // Reset to show the question side

    // Add a small delay before updating content to prevent flashing
    await new Promise(resolve => setTimeout(resolve, 300)); // 300ms delay

    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;


}

document.getElementById("flip-card").addEventListener("click", () => {
    const cardElement = document.getElementById("card");
    cardElement.classList.toggle("flashcard-is-flipped"); // Flip the card
});

document.getElementById("next-card").addEventListener("click", () => {
    const card = getRandomCard();
    displayCard(card); // Show the next card
});

document.addEventListener("DOMContentLoaded", () => {
    const initialCard = getRandomCard();
    displayCard(initialCard);
});
