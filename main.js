let questions = [
    {
        question: 'Which house at Hogwarts does Harry belong to?',
        answers: {
        a: 'Ravenclaw',
        b: 'Slytherin', 
        c: 'Hufflepuff', 
        d: 'Gryffindor'
        },
        correctAnswer: 'd'
    },
    {
        question: 'Who is Fluffy?',
        answers: {
        a: "Hermione's cat",
        b: "Harry's owl", 
        c: "A three-headed dog", 
        d: "Hagrid's dragon"
        }, 
        correctAnswer: "c"
    },
    {
        question: 'Who is the Gryffindor house ghost?',
        answers: {
        a: 'The Bloody Baron', 
        b: 'Nearly Headless Nick',
        c: 'The Grey Lady', 
        d: 'The Fat Friar'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Dumbledore has a scar above his left knee that is a perfect map of what?',
        answers: {
        a: 'The Forbidden Forest',
        b: 'The Chamber of Secrets',
        c: 'The London Underground',
        d: 'Grimmauld Place'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What spell would you cast to get rid of a Dementor?',
        answers: {
        a: 'Expecto Patronum',
        b: 'Wingardium Leviosa',
        c: 'Petrificus Totalus',
        d: 'Riddikulus'
        },
        correctAnswer: 'a'
    },
    {
        question: 'At which store does Harry Potter buy his wand?',
        answers: {
        a: 'The Three Broomsticks',
        b: "Ollivander's",
        c: 'The Leaky Cauldron',
        d: 'Borgin and Burkes'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What animal can Sirius Black transform into?',
        answers: {
        a: 'Werewolf',
        b: 'Rat',
        c: 'Stag',
        d: 'Dog'
        },
        correctAnswer: 'd'
    },
    {
        question: 'What did Ron and Harry crash the flying car into on their way to Hogwarts in their second year?',
        answers: {
        a: 'The Forbidden Forest',
        b: 'The Great Hall',
        c: 'The Whomping Willow',
        d: 'The Astronomy Tower'
        },
        correctAnswer: 'c'
    },
    {
        question: "What type of magical creatures are invisible unless you've seen death?",
        answers: {
        a: 'Thestral',
        b: 'Blast-Ended Skrewts',
        c: 'Centaurs',
        d: 'Basilisks',
        },
        correctAnswer: 'a'
    },
    {
        question: "Which magical device did Hermione use to get to all of her classes in her third year?",
        answers: {
        a: 'Polyjuice Potion',
        b: 'Time-Turner',
        c: 'Crystal Ball',
        d: 'Portkey'
        },
        correctAnswer: 'b'
    }
]

const quizBox = document.getElementById('quiz');
let resultsBox = document.getElementById('results');
let submitButton = document.getElementById('submit');

function generateQuiz(questions, quizBox, resultsBox, submitButton) {

function showQuestions(questions, quizBox) {
    //place to save questions//
    let output = [];
    let answers;

//for loop cycles through and save answers to array- add radio button for each//
    for(let i = 0; i < questions.length; i++) {
        answers = [];
        for(letter in questions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                +questions[i].answers[letter]
                + '</label>'

            );
        }

        //push the questions and answer to output array, adding divisions for questions/answers//
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join(' ') + '</div>'
        );
            
    }
    quizBox.innerHTML = output.join(' ');
}

showQuestions(questions, quizBox, resultsBox, submitButton);

function showResults(questions, quizBox, resultsBox) {
    let answerContainers = quizBox.querySelectorAll('.answers');
    let userAnswer = '';
    let numCorrect = 0;

    for(let i = 0; i < questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer) {
            numCorrect++;
            answerContainers[i].style.color = 'limegreen';
        }

        else {
            answerContainers[i].style.color = 'red';
        }
    }
    resultsBox.innerHTML = numCorrect + ' out of ' + questions.length + ' correct!';
}

submitButton.onclick = function() {
    showResults(questions, quizBox, resultsBox);
}

}

generateQuiz(questions, quizBox, resultsBox, submitButton);

