var userNumber1 = prompt("Please type a starting number:");
var bottomNumber = parseInt(userNumber1);
var userNumber2 = prompt('Please type a number:');
var topNumber = parseInt(userNumber2);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);
