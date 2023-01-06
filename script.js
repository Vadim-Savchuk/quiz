"use strict";

let questions = [
    {
        question: '1+1',
        answers: ['2', '4', '8', '10'],
        correct: 1,
    },
    {
        question: '10+10',
        answers: ['20', '40', '80', '100'],
        correct: 1,
    },
    {
        question: '100+100',
        answers: ['200', '400', '800', '1000'],
        correct: 1,
    },
    {
        question: '1000+1000',
        answers: ['2000', '4000', '8000', '10000'],
        correct: 1,
    },
]

let quiz       = document.querySelector('.quiz');
let quizTitle  = document.querySelector('.quiz-title');
let quizAnswer = document.querySelector('.quiz-questions');
let button     = document.querySelector('.button');

let score = 0;
let indexQuestion = 0;

clearPage();
showQuestion();
button.addEventListener('click', checkAnswer);

function clearPage() {
    quizTitle.innerHTML = '';
    quizAnswer.innerHTML = '';
}

function showQuestion() {
    let headerT = `<h2>${questions[indexQuestion]['question']}</h2>`;

    quizTitle.innerHTML = headerT;
    let counter = 1;

    for (let item of questions[indexQuestion]['answers']) {
        let questionT =
            `<li>
            <label>
                <input type="radio" value="${counter}" class="answer" name="answer">
                <span>${item}</span>
            </label>
        </li>`;

        quizAnswer.innerHTML += questionT;
        counter++;
    }

}

function checkAnswer() {
    let checkedRadio = quizAnswer.querySelector('input[type="radio"]:checked');

    if (!checkedRadio) {
        return
    }

    let userAnswer = parseInt(checkedRadio.value);

    if (userAnswer === questions[indexQuestion]['correct']) {
        score++;
    }

    if (indexQuestion !== questions.length - 1) {
        indexQuestion++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResults();
    }
}

function showResults() {

    let result = `${score} з ${questions.length}`
    let title, massage;

    if (score === questions.length) {
        title = 'Вітаю'
        massage = 'Ви відповіли правильно на всі питання';
    } else if ((score * 100) / questions.length >= 50) {
        title = 'Непоганий результат'
        massage = 'Ви відповіли правильно більше ніж на половину питань';
    } else {
        title = 'Варто спробувати ще раз';
        massage = 'Маловато правильних відповідей';
    }

    let resultT =
    `   <h2>${title}</h2>
        <h3>${massage}</h3>
        <p>${result}</p>
    `
    quizTitle.innerHTML = resultT;

    button.textContent = 'Заново';

    button.addEventListener('click', function(){
        history.go();
    });
}