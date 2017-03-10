'use strict';

function question1() {
  var answer = prompt('We\'re going to play a guessing game about me. Are you ready? Yes or no answers only please');
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    alert('Sweet, let\'s do this.');
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    alert('Don\'t care we\'re going to do it anyway.');
  } else {
    alert('Remember yes or no answers only please. Here we go.');
  }
  console.log(answer);
}
question1();

function question2() {
  var answer2 = prompt('Do I have a dog named Pistol Pete?');
  if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
    alert('You\'re god damn right I do');
  } else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
    alert('You\'re wrong that is my dog\'s name and he\'s awesome');
  } else {
    alert('Remember yes or no answers only please.');
  }
  console.log(answer2);
};
question2();

function question3() {
  var answer3 = prompt('Do you believe that I almost made it to the olympics for soccer for a U17 group');
  if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
    alert('You shouldn\'t have. I like soccer but I\'m nowhere near that good.');
  } else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
    alert('Correct. I was shit compared to those guys.');
  } else {
    alert('Remember yes or no answers only please.');
  }
  console.log(answer3);
};
question3();

function question4() {
  var answer4 = prompt('Do I play the guitar?');
  if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
    alert('You are correct. I am terrible at it though.');
  } else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
    alert('You\'re wrong at least you don\'t have to hear me play.');
  } else {
    alert('Remember yes or no answers only please.');
  };
  console.log(answer4);
};

var answer5 = prompt('Would you believe I once stepped on a pile of rattlesnakes?');
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  alert('You\'ve guessd correctly that shit was terrifying');
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  alert('You\'re wrong that shit was terrifying.');
} else {
  alert('Remember yes or no answers only please.');
};
console.log(answer5);

var arrAns = ['germany', 'italy' , 'japan' , 'sweden' , 'norway'];
for (var i = 0; i < arrAns.length; i++) {
  var question = prompt('What is a country I\'d like to visit most');
  if (arrAns.includes(question.toLowerCase())) {
    alert('You\'re right that is a place I\'d like to visit');
    break;
  } else {
    alert('Nope. Guess again.');
  }
}
console.log(arrAns);

var num = Math.floor(Math.random() * 100) + 1;
var hint = 'Guess a number between 1-100!';
for (var turns = 10; turns >= 0; turns--) {
  var guess = parseInt(prompt(hint + ' You have ' + turns + ' guesses left.'));
  if (guess === num) {
    alert('Correct ' + num + '.');
    turns = 0;
  } else if (guess < num) {
    alert('Wrong. Too low!');
  } else if (guess > num) {
    alert('Wrong. Too high!');
  } else if (guess === null || isNaN(guess)) {
    alert('That\'s not a number');
  } else if (turns === 0) {
    alert('Sorry the number was ' + num + '. Try again');
  }
}
console.log(num);
alert('Thanks for playing');
