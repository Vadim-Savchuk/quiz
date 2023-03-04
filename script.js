"use strict";

let questions = [
    {
        question: 'Хто такий Пітер Паркер ?',
        answers: ['Залізна людина', 'Чорна вдова', 'Халк', 'Людина павук'],
        correct: 4,
    },
    {
        question: 'Скільки років Стіву Роджерсу ?',
        answers: ['35', '70', '104', '20'],
        correct: 2,
    },
    {
        question: 'Як звати Чорну вдову ?',
        answers: ['Наташа Романова', 'Романова Наташа', 'Гвінет Пелтров', 'Даша Кубік'],
        correct: 1,
    },
    {
        question: 'Хто грає роль Тора ?',
        answers: ['Стів Джобс', 'Рамі Малік', 'Маркс Руффало', 'Кріс Хемсворт'],
        correct: 4,
    },
    {
        question: 'Хто грає роль Халка ?',
        answers: ['Стів Джобс', 'Рамі Малік', 'Маркс Руффало', 'Кріс Хемсворт'],
        correct: 3,
    },
    {
        question: 'Скільки фільмів у Кріса Хемсворта в ролі Тора ?',
        answers: ['3', '4', '9', '6'],
        correct: 3,
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