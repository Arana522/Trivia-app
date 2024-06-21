/* Trivia App
A partir de esta api: https://opentdb.com/api_config.php
Crea un sitio web que genere trivias según los siguientes parámetros:
Siempre son 10 preguntas
Se puede modificar la dificultad
Se puede seleccionar el tipo de respuesta
Y se puede escoger la categoría.
Una vez seleccionado las parámetros se crea la trivia
Se deben mostrar las preguntas
Se deben mostrar las posibles respuestas
Se deben de contestar
Cada pregunta correcta vale 100 puntos (Mostrar puntaje final)
Botón de crear nueva trivia
Cosas a tener en cuenta:
Diseño libre (Bootstrap, materialize, o tu propio css)
EcmaScript 6
Repo en Github (Github pages es un plus)
Extras: 
SCSS&nbsp;
BEM
Webpack */

/* document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const difficultySelect = document.getElementById('difficulty');
    const typeSelect = document.getElementById('type');
    const generateButton = document.getElementById('generate');
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const newTriviaButton = document.getElementById('new-trivia');
})

let score = 0;
let questions = [];

// Obtener categorías de la API
fetch('https://opentdb.com/api_category.php')
.then(response => reponse.json())
.then(data => {
    data.trivia_categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option); 
    }); 
});

generateButton.addEventListener('click', () => {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    const type = typeSelect.value;
    generateTrivia(category, difficulty, type); 
});

newTriviaButton.addEventListener('click', () => {
    quizContainer.innerHTML = ''; 
    resultContainer.classlist.add('d-none');
    quizContainer.classlist.add('d-none');
    document.getElementById('settings').classList.remove('d-none');
    score = 0;
});

function generateTrivia(category, difficulty, type) {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then(response => response.json())
    .then(data => {
        questions = data.results;
        displayQuestions(questions);
    });
}

function displayQuestions(quizContainer) {
    quizContainer.innerHTML = ''; 
    questions.forEach((questions, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionTittle = document.createElement('h5');
        questionTittle.innerHTML = `${index + 1.} ${question.question}}`;
        questionElement.appendChild(questionTittle);

        const answersContainer = document.createElement('div');
        answersContainer.classList.add('answers');

        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        allAnswers.sort(() => Math.random() - 0.5);

        allAnswers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('btn', 'btn-outline-primary', 'w-100');
            answerButton.innerHTML = answer;
            answerButton.addEventListener('click', () => checkAnswer(answer, question.correct_answer, answerButton));
            answersContainer.appendChild(answerButton);
        });

        questionElement.appendChild(answersContainer);
        quizContainer.appendChild(questionElement);
    });

    quizContainer.classList.remove('d-none');
    document.getElementById('settings').classList.add('d-none');
}

function checkAnswer(selectedAnswer, correctAnswer, button) {
    const questionElement = button.closest('.question');
    const buttons = questionElement.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML === correctAnswer) {
            btn.classList.add('btn-success');
        } else if (btn !== button) {
            btn.classList.add('btn-secondary');
        }
    });

    if (selectedAnswer === correctAnswer) {
        score += 100;
    }

    const allQuestionsAnswered = [...document.querySelectorAll('.question button')].every(btn => btn.disabled);
    if (allQuestionsAnswered) {
        showResult();
    }
}
} */

document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const difficultySelect = document.getElementById('difficulty');
    const typeSelect = document.getElementById('type');
    const generateButton = document.getElementById('generate');
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const newTriviaButton = document.getElementById('new-trivia');

    let score = 0;
    let questions = [];

    // Obtener categorías de la API
    fetch('https://opentdb.com/api_category.php')
        .then(response => response.json())
        .then(data => {
            data.trivia_categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
        });

    generateButton.addEventListener('click', () => {
        const category = categorySelect.value;
        const difficulty = difficultySelect.value;
        const type = typeSelect.value;
        generateTrivia(category, difficulty, type);
    });

    newTriviaButton.addEventListener('click', () => {
        quizContainer.innerHTML = '';
        resultContainer.classList.add('d-none');
        quizContainer.classList.add('d-none');
        document.getElementById('settings').classList.remove('d-none');
        score = 0;
    });

    function generateTrivia(category, difficulty, type) {
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`)
            .then(response => response.json())
            .then(data => {
                questions = data.results;
                displayQuestions(questions);
            });
    }

    function displayQuestions(questions) {
        quizContainer.innerHTML = '';
        questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');

            const questionTitle = document.createElement('h5');
            questionTitle.innerHTML = `${index + 1}. ${question.question}`;
            questionElement.appendChild(questionTitle);

            const answersContainer = document.createElement('div');
            answersContainer.classList.add('answers');

            const allAnswers = [...question.incorrect_answers, question.correct_answer];
            allAnswers.sort(() => Math.random() - 0.5);

            allAnswers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.classList.add('btn', 'btn-outline-primary', 'w-100');
                answerButton.innerHTML = answer;
                answerButton.addEventListener('click', () => checkAnswer(answer, question.correct_answer, answerButton));
                answersContainer.appendChild(answerButton);
            });

            questionElement.appendChild(answersContainer);
            quizContainer.appendChild(questionElement);
        });

        quizContainer.classList.remove('d-none');
        document.getElementById('settings').classList.add('d-none');
    }

    function checkAnswer(selectedAnswer, correctAnswer, button) {
        const questionElement = button.closest('.question');
        const buttons = questionElement.querySelectorAll('button');

        buttons.forEach(btn => {
            btn.disabled = true;
            if (btn.innerHTML === correctAnswer) {
                btn.classList.add('btn-success');
            } else if (btn !== button) {
                btn.classList.add('btn-secondary');
            }
        });

        if (selectedAnswer === correctAnswer) {
            score += 100;
        }

        const allQuestionsAnswered = [...document.querySelectorAll('.question button')].every(btn => btn.disabled);
        if (allQuestionsAnswered) {
            showResult();
        }
    }

    function showResult() {
        scoreElement.innerHTML = score;
        resultContainer.classList.remove('d-none');
    }
});