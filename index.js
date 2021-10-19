// A CLI app that can quiz your friends on how well they know you. 
// Use nodeJS. 
// Use repl.it to host your app.

var readlineSync = require('readline-sync');
var score = 0;


// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var userLocation = readlineSync.question('Where do you live? ');
console.log('Wow ' + userLocation + ' is really a good place!');
console.log('----------');

// question No:1
var coffeeTea = readlineSync.question('What do i like Coffee or Tea?');
if(coffeeTea == 'coffee'){
  score = score + 1;
  console.log('Correct , Score: ' + score);
  console.log('----------');
}
else{
  score = 0;
  console.log('Wrong , Score: ' + score);
  console.log('----------');
}

// question No:2
var colour = readlineSync.question('what colour do i more prefer: Light or Dark?');
if(colour == 'Light'){
  score = score + 1;
  console.log('Correct , Score: ' + score);
  console.log('----------');
}
else{
  score = 0;
  console.log('Wrong , Score: ' + score);
  console.log('----------');
}

// question No:3
var gymTime = readlineSync.question('when do i go to gym: Morning or Evening?');
if(gymTime == 'morning'){
  score = score + 1;
  console.log('Correct , Score: ' + score);
  console.log('----------');
}
else{
  score = 0;
  console.log('Wrong , Score: ' + score);
  console.log('----------');
}

