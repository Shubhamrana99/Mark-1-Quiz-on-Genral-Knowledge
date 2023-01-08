var readLineSync = require('readline-sync');

var username = readLineSync.question('Hey! My name is shubham, what is your name? ');
console.log('Hi', username, ', lets check your Genral knowledge!');


let score = 0;
function play(question, ans) {
  var myque = readLineSync.question(question);

  if (myque === ans) {
    console.log('Right Answer');
    score = score + 1;
    console.log('your score is: ', score);
    console.log('-----------------------------');
  }
  else {
    console.log('Wrong Answer');
    score = score - 1;
    console.log('your score is: ', score);
    console.log('------------------------------');
  }
}

// play('what is your name ','shubham');
// play('what is your number ','8149405870');
// play('what is fav color ','black');

var question1 = {
  question: 'How many colors are there in a rainbow? ',
  ans: '7',
}
var question2 = {
  question: 'What does a thermometer measure?(use lower case to answer) ',
  ans: 'temprature',
}
var question3 = {
  question: 'How many hours are there in a day? ',
  ans: '24',
}
var question4 = {
  question: 'How many vowels are there in the English alphabet? ',
  ans: '5',
}
var question5 = {
  question: 'How many days are there in a year? ',
  ans: '365',
}

var allQue = [question1, question2, question3, question4, question5];

for (let i = 0; i <= allQue.length - 1; i++) {
  play(allQue[i].question, allQue[i].ans);
}

var highScores = [
  {
    name: "Shubham",
    score: 5,
  },

  {
    name: username,
    score: score,
  },
]

function finalScores() {
  console.log("oh! You SCORED: ", score, ",Not bad!");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
finalScores();