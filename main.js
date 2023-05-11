const questions = [

{
  "question": "When is Echo's birthday?🎂?",
  "answer1": "07/26",
  "answer1Total": "0",
  "answer2": "06/21",
  "answer2Total": "0",
  "answer3": "10/24",
  "answer3Total": "0",
  "answer4": "07/24",
  "answer4Total": "1",
},

{
  "question": "What‘s Echo's MBTI🧠",
  "answer1": "ENFJ",
  "answer1Total": "1",
  "answer2": "ESTP",
  "answer2Total": "0",
  "answer3": "INFJ",
  "answer3Total": "0",
  "answer4": "INTJ",
  "answer4Total": "0",
},

{
  "question": "Echo's favorite type of coffee☕️",
  "answer1": "Mocha.",
  "answer1Total": "0",
  "answer2": "Flat White",
  "answer2Total": "0",
  "answer3": "Iced coffee",
  "answer3Total": "0",
  "answer4": "Latte",
  "answer4Total": "1",
},

{
  "question": "What is Echo favorite animal🦕",
  "answer1": "Hamster",
  "answer1Total": "0",
  "answer2": "Cat",
  "answer2Total": "0",
  "answer3": "Bunny",
  "answer3Total": "0",
  "answer4": "Dog",
  "answer4Total": "1",
},

{
  "question": "How many Hamster Echo have right now🐹",
  "answer1": "2",
  "answer1Total": "0",
  "answer2": "3",
  "answer2Total": "1",
  "answer3": "4",
  "answer3Total": "0",
  "answer4": "5",
  "answer4Total": "0",

},

{
  "question": "Which is Echo's favorite kpop group🫀",
  "answer1": "EXO",
  "answer1Total": "0",
  "answer2": "NCT",
  "answer2Total": "1",
  "answer3": "BTS",
  "answer3Total": "0",
  "answer4": "Seventeen",
  "answer4Total": "0",

},

{
  "question": "Which of the following colors has Echo not dyed her hair before?💅",
  "answer1": "Red",
  "answer1Total": "0",
  "answer2": "Blue",
  "answer2Total": "0",
  "answer3": "Orange " ,
  "answer3Total": "1",
  "answer4": "Purple",
  "answer4Total": "0",

},

{
  "question": "Which is Echo's favorite fast food?🍔",
  "answer1": "Wendys",
  "answer1Total": "0",
  "answer2": "Shakeshack",
  "answer2Total": "0",
  "answer3": "Five Guys",
  "answer4Total": "1",
  "answer4": "McDonald's",
  "answer4Total": "0",


},


{
  "question": "Which is Echo favorite fried chiken?🍗",
  "answer1": "KFC.",
  "answer1Total": "0",
  "answer2": "Popeyes",
  "answer2Total": "0",
  "answer3": "chick-fil-A",
  "answer3Total": "0",
  "answer4": "Jollibee",
  "answer4Total": "1",

},


{
  "question": "What is Echo's shoe size?👞",
  "answer1": "6",
  "answer1Total": "0",
  "answer2": "6.5",
  "answer2Total": "1",
  "answer3": " 7",
  "answer3Total": "0",
  "answer4": "7.5",
  "answer4Total": "0",

}


]
  



let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');


function generateQuestions (index) {
    
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total; 
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
     
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`)
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    
    currentQuestion++;

        
        selectedOption.checked = false;
    
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your Got ${totalScore} right out of 10 questions</h1>
      
         <div class="summary">
            <p>You should spend more time with Echo! Why don't you send Echo a message now?</p>
            
           
          
        </div>
        <button class="restart">Take it again after text me!!</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    
    currentQuestion--;
    
    score.pop();
    
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    
    currentQuestion = 0;
    score = [];
    
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);