//---Flashcard game---

//Load once document is ready
$(document).ready(function(){

//Declaring variables
let answer;
let check;
let correctAnswer;

//Start with a score of zero
let score = 0;

//An array with the answer key
let answerKey = [
    {question: "question1", value: "Chandler"},
    {question: "question2", value: "Miniature Pinscher"},
    {question: "question3", value: "Pete Best"},
    {question: "question4", value: "Burj Khalifa"},
    {question: "question5", value: "Chicken Shawarma"}
  ];

//Total number of questions
let totalQuestions = $('.questions').length;
console.log(totalQuestions)

let currentQuestion = 0;

//Caching the selectors
$questions = $('.questions');
$bottomElements = $('.bottomElements');
$form = $('form');

//Hide all the questions
$questions.hide();
$bottomElements.hide();
$form.hide();

//First question
$('#start').on('click', function () {
    $($questions.get(currentQuestion)).fadeIn();
    $('.startPage').hide();
    $bottomElements.show();
    $form.show();
});

//Upon submission, function checks if answer is correct. If correct, adds a score of one
$('#submit').on('click', function(){

//To prevent the default of browser refreshing the page 
    event.preventDefault(); 

//Capture the user's selected answer
    const selectedAnswer = $("input[type=radio]:checked").val();

//Now we need to compare the answer by user with the value in the answer key
    if (answerKey[currentQuestion].value === selectedAnswer){
        score = score + 1;
        $('#score').text(score);
    } else {
        score = score;
        alert(`Sorry! The correct answer is ${answerKey[currentQuestion].value}. `);
    }

//To remove the checked attribute from the previous question
    $(':radio').each(function () {
		$(this).removeAttr('checked');
		$('input[type="radio"]').prop('checked', false);
    })

//To show first question and increment each question by one
    $($questions.get(currentQuestion)).fadeOut(function () {
        currentQuestion = currentQuestion + 1;
        if (currentQuestion == totalQuestions) {
            $('#submit').hide();
        } else {
            $($questions.get(currentQuestion)).fadeIn();
        }
    });

});
    
});