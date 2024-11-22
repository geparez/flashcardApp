// Array of lessons with title and description
const lessons = [
    { 
        title: "What is HTML?", 
        description: "HTML (Hypertext Markup Language) is the standard language used to create and structure web pages. It helps you organize things like text, images, and links on a page. It's not for programming, just for making a webpage look structured." ,
        link :"https://www.w3schools.com/"
    },
    { 
        title: "What are Tags?", 
        description: "Tags are special codes in HTML that tell the web browser how to display content. For example, <p> is a tag for a paragraph, and <img> is a tag for an image. Tags usually come in pairs."
    },
    { 
        title: "What are Attributes?", 
        description: "Attributes are extra pieces of information that you can add to HTML tags to provide more details. For example, the src attribute in an <img> tag tells the browser where to find the image. An attribute is written inside the tag, like this: <img src='image.jpg'>." 
    },
    { 
        title: "What is CSS?", 
        description: "CSS (Cascading Style Sheets) is a language used to style and design web pages. It controls how HTML elements look, such as colors, fonts, layout, and spacing. For example, you can use CSS to change the background color of a page or the size of text." 
    },
    { 
        title: "What are Variables?", 
        description: "Variables are like containers for storing data. They can hold numbers, text, and other values." 
    },
];

// Set the initial lesson index
let currentLesson = 0;

// Get the element where lessons will be displayed
const lessonBox = document.getElementById("lesson-box");
const nextButton = document.getElementById("next-card");

// Function to display the current lesson
function displayLesson() {
    const lesson = lessons[currentLesson];
    // Update the lesson content
    lessonBox.innerHTML = `
        <h3>${lesson.title}</h3>
        <p>${lesson.description}</p>
        <a href= "https://www.w3schools.com/"> click me for more info</a>


    `;
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
    // Go to the next lesson, looping back to the start when reaching the end
    currentLesson = (currentLesson + 1) % lessons.length;
    displayLesson();
});

// Initialize the first lesson on page load
displayLesson();
