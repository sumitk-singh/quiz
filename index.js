var readlineSync = require('readline-sync');
var score = 0;

//data
var questionBank = [{
  question: 'Guess my fav colour ',
  answer: 'green'
},
{
  question: 'Do you think i am a good dancer? ',
  answer: 'no'
},
{
  question: 'Have i ever visited to china? ',
  answer: 'no'
},
{
  question: 'i prefer to take tea or coffee ! ',
  answer: 'coffee'
}

]

//welcome
function welcome(){
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome '+ userName.toUpperCase() + ', Lets play the game and see your score');
}

//game
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer){
    console.log('correct')
    score = score + 2;
    console.log('score: ' + score);
  }
  else{
    console.log('wrong !');
    score = score - 1; 
    console.log('score: ' + score);
  }
    
console.log('________________________');
}

//play
function game(){
  for(var i=0; i<questionBank.length; i++){
    var currentQuestion = questionBank[i].question;
    var currentAnswer = questionBank[i].answer;
    play(currentQuestion, currentAnswer);
  }
}

function yourScore(){
  var finalScore = (score/questionBank.length*2)*100;
  console.log('hey, your final score is ' + finalScore + ' %');
}

welcome();
game();
yourScore();
