//DOM elements

const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));



let quizArea = document.getElementById('quiz-area');
let displayQuestions = document.getElementById('question-area');
let optionA = document.getElementById('answer-a');
let optionB = document.getElementById('answer-b');
let optionC = document.getElementById('answer-c');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "Which mountain is located in kerry and has a height of 1998mts?",
        option1: 'Mt.Brandon',
        option2: 'Mt.Patrick',
        option3: '22Mt.Alps',
        answer: 1,
        
    },
     {
        question: "Which mountain is located in kerry and has a height of 2998mts?",
        option1: 'Mt.Brandon',
        option2: 'Mt.Patrick',
        option3: '33Mt.Alps',
        answer: 1,
        
    },
     {
        question: "Which mountain is located in kerry and has a height of 3998mts?",
        option1: 'Mt.Brandon',
        option2: 'Mt.Patrick',
        option3: 'Mt.Alps',
        answer: 1,
        
    },
]

const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/e.html');
    }
    questionCounter++;
    /* Get a question from available questions */
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

    options.forEach(option => {
        option.addEventListener("click", e => {
            if(!acceptingAnswers) return;
            
            acceptingAnswers = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.dataset["number"];

            console.log(selectedAnswer == currentQuestion.answer);

            getNewQuestion();
        });
    });
};

startGame();


