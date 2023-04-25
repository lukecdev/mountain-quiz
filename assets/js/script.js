//DOM elements
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("text"));
let quizArea = document.getElementById('quiz-area');
let displayQuestions = document.getElementById('question-area');
let optionA = document.getElementById('answer-a');
let optionB = document.getElementById('answer-b');
let optionC = document.getElementById('answer-c');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = []

let questions = [
    {
        question: "Which mountain is located in kerry and has a height of 998mts?",
        option1: 'Mt.Brandon',
        option2: 'Mt.Patrick',
        option3: 'Mt.Alps',
        answer: 1,
        
    },
]