const questions = [

    {
        question: "Which is largest animal in the Wolrld?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },

    {
        question: "Which is smallest country in the Wolrld?",
        answers: [
            { text: "Vatican city", correct: true },
            { text: "Bhutan", correct: true },
            { text: "Nepal", correct: false },
            { text: "Shri lanka", correct: false }
        ]
    },

    {
        question: "Which is largest desert in the Wolrld?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },

    {
        question: "Which is the  smallest continet in the Wolrld?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    }

];

let questionElement = document.getElementById("quiz-text");
let answerButton = document.querySelector(".answer-buttons");
let nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;



function showQuestions() {

    let currentQuestion = questions[currentQuestionIndex];

    const correctObject = currentQuestion.answers.filter(q => q.correct);
    const correctAnswer = correctObject[0].text;


    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        button.addEventListener('click', (event) => {

            const selectedBtn = event.target;

            if (selectedBtn.textContent === correctAnswer) {

                score++;

                selectedBtn.style.background = "green";

            } else {

                selectedBtn.style.background = "red";
            }


            disableAllButtons();
            nextButton.style.display = 'block';

        })
    })


};



showQuestions();

nextButton.addEventListener('click', () => {


    currentQuestionIndex++;
    answerButton.innerHTML = "";

    if (currentQuestionIndex < questions.length) {
        showQuestions();

    } else {

        questionElement.innerHTML = "";
        answerButton.innerHTML = answerButton.innerHTML = `<div class="score-text">Your score is ${score} out of ${questions.length}</div>`;

        nextButton.style.display = 'none';

    }

    nextButton.style.display = 'none';
});



function disableAllButtons() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.disabled = true;
    })
};