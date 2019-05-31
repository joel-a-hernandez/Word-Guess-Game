
//words list    
var nbaTeams = ["warriors", "raptors", "spurs", "mavericks", "wizards"]


var userGuess;
var maxNumGuesses = 8; //max number of guesses
var guessedLetters = []; //letters that have been guessed
var guessedLettersBox = document.getElementById("guessedLetters");
var currentWordLength = []; //The current length of the word that is being used with "_"
var array1 = [];
var numGuessesRemaining = 0; // number of guesses remaining
var wins = 0; //wins
var losses = 0; //losses
var currentWord; //word that is being played

currentWord = nbaTeams[Math.floor(Math.random()*nbaTeams.length)];
    console.log(currentWord)

for (var i = 0; i < currentWord.length; i++){
    currentWordLength.push("_");
}
var word = document.getElementById("currentWord");
var htmlString = "";
for (let i = 0; i < currentWord.length; i++) {
    htmlString = htmlString +" "+ currentWordLength[i];
    
}

word.textContent = htmlString;

document.onkeypress = function (event){
    userGuess = event.key;

if (currentWord.indexOf(userGuess) === -1){
    guessedLetters.push(userGuess);
    guessedLettersBox.textContent = guessedLetters;
} 

if ((userGuess !== guessedLetters[0]) && (maxNumGuesses > 0)) {
	maxNumGuesses = maxNumGuesses-1;
}
// else {
//     for (var i = 0; i < currentWord.length; i++) {
//         if (word[i] === event.key) {
//             currentWord = event.key;
//         } 
//     }
// }

if (currentWord.indexOf(userGuess) === -1) {
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord === event.key){
            
            
        }
        else {
            console.log("Not in array");
        }
    }
}


    


  
}